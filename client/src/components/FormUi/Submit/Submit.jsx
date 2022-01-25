import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { useFormikContext } from 'formik'

const useStyles = makeStyles({
  button: {
    backgroundColor: '#86C4BA',
    color: '#F3F3F3',
    '&:hover': {
      backgroundColor: '#7FC8A9',
    },
  },
})

const Submit = ({ children, ...otherProps }) => {
  const classes = useStyles()
  // submit form du hook de fornik
  const { submitForm } = useFormikContext()

  const handleSubmit = () => {
    submitForm()
  }

  const configButton = {
    variant: 'contained',
    fullWidth: true,
    onClick: handleSubmit,
  }
  return (
    <Button className={classes.button} {...configButton}>
      {children}
    </Button>
  )
}

export default Submit
