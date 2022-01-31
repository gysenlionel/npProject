import React from 'react'
import { makeStyles } from '@material-ui/core'

const RedButton = ({ children, ...props }) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      width: '70px',
      border: '1px solid #DF4F4F',
      borderRadius: '2px / 4px',
      padding: '7px',
      color: '#DF4F4F',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      marginRight: theme.spacing(2),
      '&:hover': {
        color: ' #fff',
        border: '1px solid  #DF4F4F',
        backgroundColor: '#DF4F4F',
      },
    },
  }))

  const classes = useStyles()

  return (
    <div className={classes.button} {...props}>
      {children}
    </div>
  )
}

export default RedButton
