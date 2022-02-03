import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    backgroundColor: '#595959',
    color: '#F3F3F3',
    '&:hover': {
      backgroundColor: '#0d0d0d',
    },
  },
})

const BlackButton = ({ children, onClick, ...otherProps }) => {
  const classes = useStyles()

  const configButton = {
    variant: 'contained',
    // fullWidth: true,
    onClick: onClick,
  }
  return (
    <Button className={classes.button} {...configButton}>
      {children}
    </Button>
  )
}

export default BlackButton
