import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core'

import TextfieldNoFormik from '../FormUi/Textfield/TextFieldNoformik'
import BlackButton from '../Button/BlackButton'

const useStyles = makeStyles((theme) => ({
  shoppingCart__container: {},
  inputs: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    color: '#DF4F4F',
    textAlign: 'center',
  },
  prices: {
    width: '100px',

    float: 'left',
    textAlign: 'center',
    fontSize: '0.9rem',
    borderRadius: '4px',
    backgroundColor: '#000000',
    color: '#fff',
    padding: '1px',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },

  shoppingCart: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    border: '1px #DF4F4F solid',
    padding: theme.spacing(1),
  },
  disclamerContainer: {
    width: '100%',
    color: '#6E6E6E',
    fontSize: '0.8rem',
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  totalContainer: {
    border: '1px solid black',
    flex: 1,
    textAlign: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderRadius: '4px',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}))
const ShoppingCart = ({ fetchedData, history }) => {
  const classes = useStyles()

  const [qtyMin, setQtyMin] = useState(0)
  const [qtyMax, setQtyMax] = useState(0)

  let price = []

  price.push(
    fetchedData[0]?.priceRanges[0].min,
    fetchedData[0]?.priceRanges[0].max
  )

  return (
    <div className={classes.shoppingCart}>
      <div className={classes.shoppingCart__container}>
        <h3 className={classes.title}>Buy tickets</h3>
        <div className={classes.inputs}>
          <p className={classes.prices}>{price[0]}€</p>

          <TextfieldNoFormik
            InputProps={{ inputProps: { min: 0, max: 10 } }}
            placeholder="Tickets"
            className={classes.input}
            onChange={(e) => setQtyMin(e.target.value)}
          />
        </div>
        <div className={classes.inputs}>
          <p className={classes.prices}>{price[1]}€</p>
          <TextfieldNoFormik
            InputProps={{ inputProps: { min: 0, max: 10 } }}
            placeholder="Tickets"
            className={classes.input}
            onChange={(e) => setQtyMax(e.target.value)}
          />
        </div>
      </div>
      <div className={classes.totalContainer}>
        <h4>Total</h4>
        <div>...€</div>
        <div className={classes.button}>
          <BlackButton children="add to" />
        </div>
      </div>
      <div>
        <div className={classes.disclamerContainer}>
          <p>
            Complaints (without forgetting to indicate the reason(s) invoked)
            must be addressed as soon as possible but no later than 14 days
            after delivery in writing to My Event, which will follow up the
            complaint. In the event of an order error on the part of the Buyer,
            he/she may benefit from a right of exchange within 14 days of
            receipt.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
