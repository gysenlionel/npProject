import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PayementForm from './PayementForm'

const StripeContainer = () => {
  const stripeTestPromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY)

  return (
    <Elements stripe={stripeTestPromise}>
      <PayementForm />
    </Elements>
  )
}

export default StripeContainer
