import React from 'react'
import { Alert } from 'react-bootstrap'

function Massage ({ variant, children }) {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}

export default Massage
