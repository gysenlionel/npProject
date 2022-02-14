import React, { useState } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/action'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core'

import TextfieldNoFormik from '../FormUi/Textfield/TextFieldNoformik'
import BlackButton from '../Button/BlackButton'
import ModalPrevent from '../Modal/ModalPrevent'

import { totalPrice, totalPriceFixed } from '../../utils/totalPrice'

const useStyles = makeStyles((theme) => ({
  shoppingCart__container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
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
    justifyContent: 'center',
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
    minWidth: '45%',
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  total: {
    content: '',
    display: 'block',
    width: '25%',
    height: '1px',
    borderTop: '1px solid #000000',
    margin: '0px auto',
    padding: '10px',
  },
}))
const ShoppingCart = ({ fetchedData }) => {
  const classes = useStyles()

  const [qtyMin, setQtyMin] = useState('0')
  const [qtyMax, setQtyMax] = useState('0')
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()
  const addProduct = (product, qtyMin, qtyMax) => {
    dispatch(addCart(product, qtyMin, qtyMax))
  }

  const state = useSelector((state) => state.handleCart)
  // ne pas afficher les qte dans le btn quand valeur du shoppingList(state.handleCart) est de 0
  const stateNotNull = () => {
    if (state.length === 0) {
      return ''
    } else {
      return state.length
    }
  }

  const inputProtect = (value) => {
    let valueMin = parseFloat(value.qtyMin)
    let valueMax = parseFloat(value.qtyMax)
    if (
      (valueMin !== 0 && valueMin >= 1 && valueMin <= 10 && valueMax === 0) ||
      (valueMin === 0 && valueMax !== 0 && valueMax >= 1 && valueMax <= 10) ||
      (valueMin !== 0 &&
        valueMin >= 1 &&
        valueMin <= 10 &&
        valueMax !== 0 &&
        valueMax >= 1 &&
        valueMax <= 10)
    ) {
      return addProduct(fetchedData[0], qtyMin, qtyMax)
    } else {
      return setShowModal(true)
    }
  }

  // push  les prices dans une array
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
            value={qtyMin}
            onChange={(e) => {
              if (e.target.value >= 1 && e.target.value <= 10) {
                if (e.target.value === '010') {
                  let result = e.target.value.slice(1)
                  setQtyMin(result)
                } else {
                  setQtyMin(e.target.value)
                }
              } else {
                setQtyMin('0')
              }
            }}
          />
        </div>
        {fetchedData[0].priceRanges[0].min !==
        fetchedData[0].priceRanges[0].max ? (
          <div className={classes.inputs}>
            <p className={classes.prices}>{price[1]}€</p>
            <TextfieldNoFormik
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              placeholder="Tickets"
              className={classes.input}
              value={qtyMax}
              onChange={(e) => {
                if (e.target.value >= 1 && e.target.value <= 10) {
                  if (e.target.value === '010') {
                    let result = e.target.value.slice(1)
                    setQtyMax(result)
                  } else {
                    setQtyMax(e.target.value)
                  }
                } else {
                  setQtyMax('0')
                }
              }}
            />
          </div>
        ) : null}
      </div>
      <div className={classes.totalContainer}>
        <h4>Total</h4>
        <p>
          {qtyMin !== '0' && qtyMin !== ''
            ? `${qtyMin} x ${
                fetchedData[0].priceRanges[0].min &&
                fetchedData[0].priceRanges[0].min
              }€ `
            : null}
        </p>
        <p>
          {qtyMax !== '0' && qtyMax !== ''
            ? `${qtyMax} x ${
                fetchedData[0].priceRanges[0].max &&
                fetchedData[0].priceRanges[0].max
              }€ `
            : null}
        </p>
        <br />

        {qtyMax !== '0' || qtyMin !== '0' ? (
          <h4 className={classes.total}>
            {totalPriceFixed(
              qtyMin,
              qtyMax,
              fetchedData[0].priceRanges[0].min,
              fetchedData[0].priceRanges[0].max
            )}
            €
          </h4>
        ) : null}

        <div className={classes.button}>
          <BlackButton
            children={`add ${stateNotNull()}`}
            onClick={() => inputProtect({ qtyMin, qtyMax })}
          />
          {showModal ? <ModalPrevent setShowModal={setShowModal} /> : null}
        </div>
      </div>

      <div>
        <div className={classes.disclamerContainer}>
          <p>
            Complaints (without forgetting to indicate the reason(s) invoked)
            must be addressed as soon as possible but no later than 14 days
            after delivery in writing to My Event, which will follow up the
            complaint. <br /> In the event of an order error on the part of the
            Buyer, he/she may benefit from a right of exchange within 14 days of
            receipt.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
