import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING
} from "@paypal/react-paypal-js"

import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails, payOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET } from '../constants/orderConstants'

function OrderScreen() {
  const { id: orderId } = useParams()
  const dispatch = useDispatch()

  const [sdkReady, setSdkReady] = useState(false)

  // Get order details from Redux
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  // Get order payment info from Redux
  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  // Compute items price locally without mutating Redux state
  const computedItemsPrice = (!loading && !error && order)
    ? order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    : "0.00"

  // Dynamically add PayPal script if not already loaded
  const addPayPalScript = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://www.paypal.com/sdk/js?client-id=AVhzeRuoFGzTijLO4dQ1EDuoikcEXCeAw71JYkKPcvxgrf09_Jss-BX9a0vNdxm9kgmDngteNyMMdt94'
    script.async = true
    script.crossOrigin = "anonymous"
    script.onload = () => setSdkReady(true)
    script.onerror = () => {
      throw new Error('PayPal SDK could not be loaded.')
    }
    document.body.appendChild(script)
  }

  // Fetch order details, reset payment state, etc.
  useEffect(() => {
    if (!order || successPay || order._id !== Number(orderId)) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, order, orderId, successPay])

  // Handler for successful payment capture
  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <div>
      <h1>Order: {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            {/* Shipping Info */}
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${order.user.email}`} style={{ color: 'blue' }}>
                  {order.user.email}
                </a>
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>Delivered on {order.deliveredAt}</Message>
              ) : (
                <Message variant='warning'>Not Delivered</Message>
              )}
            </ListGroup.Item>

            {/* Payment Method */}
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='warning'>Not Paid</Message>
              )}
            </ListGroup.Item>

            {/* Order Items */}
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message variant='info'>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = { (item.qty * item.price).toFixed(2) }
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Order Summary + PayPal Buttons */}
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Items:</Col>
                  <Col>${computedItemsPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax:</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              {/* Render PayPal buttons only if not paid */}
              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalScriptProvider
                      options={{
                        clientId: "AVhzeRuoFGzTijLO4dQ1EDuoikcEXCeAw71JYkKPcvxgrf09_Jss-BX9a0vNdxm9kgmDngteNyMMdt94",
                        currency: "USD",
                      }}
                    >
                      {/* PayPal Button */}
                      <PayPalButtons
                        fundingSource={FUNDING.PAYPAL}
                        style={{ layout: "horizontal" }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: order.totalPrice,
                                },
                              },
                            ],
                          })
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then(successPaymentHandler)
                        }}
                      />

                      {/* Pay Later Button */}
                      <PayPalButtons
                        fundingSource={FUNDING.PAYLATER}
                        style={{ layout: "horizontal" }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: order.totalPrice,
                                },
                              },
                            ],
                          })
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then(successPaymentHandler)
                        }}
                      />

                      {/* Debit or Credit Card Button */}
                      <PayPalButtons
                        fundingSource={FUNDING.CARD}
                        style={{ layout: "horizontal" }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: order.totalPrice,
                                },
                              },
                            ],
                          })
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then(successPaymentHandler)
                        }}
                      />

                      {/* "Powered by PayPal" logo under the Card button */}
                      <div style={{ textAlign: 'center', marginTop: '10px' }}> Powered by{' '}
                        <img
                          src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png"
                          alt="Powered by PayPal"
                          style={{ maxWidth: '80px' }}
                        />
                      </div>
                    </PayPalScriptProvider>
                  )}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default OrderScreen
