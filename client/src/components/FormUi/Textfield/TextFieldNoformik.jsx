import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { ClassNames } from '@emotion/react'

const TextfieldNoFormik = ({ name, ...otherProps }) => {
  const useStyles = makeStyles((theme) => ({
    input: {
      width: '130px',
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focusVisible': {
          color: 'black',
        },
      },
    },
  }))
  const classes = useStyles()
  const configTextField = {
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    size: 'small',
    type: 'number',
  }

  return <TextField {...configTextField} className={classes.input} />
}

export default TextfieldNoFormik
