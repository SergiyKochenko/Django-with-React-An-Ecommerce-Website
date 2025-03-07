import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'

function PlaceOrderScreen() {
    const cart = useSelector(state => state.cart)

    const itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    const shippingPrice = (itemsPrice > 100 ? 0 : 10).toFixed(2)
    const taxPrice = Number((0.082 * itemsPrice).toFixed(2))
    const totalPrice = (Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)).toFixed(2)

    const placeOrder = () => {
        console.log('Order Placed')
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address: </strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city},
                                {' '}
                                {cart.shippingAddress.postalCode},
                                {' '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method: </strong>
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0 ? (
                                <Message variant='info'>
                                    Your cart is empty
                                </Message>
                            ) : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
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
                                                    <Link to={`/product/${item.product}`} className='cart-link'>
                                                        {item.name}
                                                    </Link>
                                                </Col>

                                                <Col md={4}>
                                                    {item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Items:</Col>
                                    <Col>${itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping:</Col>
                                    <Col>${shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax:</Col>
                                    <Col>${taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Total:</Col>
                                    <Col>${totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrder}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PlaceOrderScreen
