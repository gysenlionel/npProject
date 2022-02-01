import React, { useState } from 'react'

import { Container, Grid, makeStyles } from '@material-ui/core'
import SelectWrapperPrice from '../FormUi/SelectWrapper/SelectWrapperPrice'

const useStyles = makeStyles((theme) => ({
  shoppingCart__container: {},
  input: {
    width: '130px',
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
}))
const ShoppingCart = ({ fetchedData }) => {
  const classes = useStyles()

  const [value, setValue] = useState()

  const handleChange = (evt) => {
    setValue(evt.target.value)
  }

  let price = []

  price.push(
    fetchedData[0]?.priceRanges[0].min,
    fetchedData[0]?.priceRanges[0].max
  )
  console.log(value)
  return (
    <div className={classes.shoppingCart__container}>
      <h3>buy tickets</h3>

      <div className={classes.inputs}>
        <SelectWrapperPrice
          onChange={handleChange}
          name="price"
          options={price}
          label="Price"
          className={classes.input}
          value=""
        />
        <SelectWrapperPrice
          onChange={handleChange}
          name="price"
          options={price}
          label="Price"
          className={classes.input}
          value=""
        />
        <SelectWrapperPrice
          onChange={handleChange}
          name="price"
          options={price}
          label="Price"
          className={classes.input}
          value=""
        />
        <SelectWrapperPrice
          onChange={handleChange}
          name="price"
          options={price}
          label="Price"
          className={classes.input}
          value=""
        />
      </div>
    </div>
  )
}

export default ShoppingCart
