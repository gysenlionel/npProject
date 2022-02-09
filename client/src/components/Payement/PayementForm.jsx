import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'

import BlackButton from '../Button/BlackButton'

const useStyles = makeStyles((theme) => ({}))

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#000000',
      fontWeight: 500,
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
}

const PayementForm = () => {
  const classes = useStyles()

  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        // route pour le paiment exemple à voir avec graphql

        // const response = await axios.post('http://', {
        //   amount: 1000,
        //   id: id,
        // })
        const response = await console.log(`amount: 1000, id: ${id}`)
        console.log(`paiment send to backend id: ${id}`)

        if (response.data.success) {
          console.log('Successful payement')
          setSuccess(true)
        }
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log(error.message)
    }
  }
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className={classes.FormGroup}>
            <CardElement options={CARD_OPTIONS} />
          </fieldset>
          <BlackButton onClick={handleSubmit}>Pay</BlackButton>
        </form>
      ) : (
        <div>
          <h2> You just bought a sweet event!!!</h2>
        </div>
      )}
    </>
  )
}

export default PayementForm
