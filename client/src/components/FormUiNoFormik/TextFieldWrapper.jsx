import React from 'react'
import TextField from '@mui/material/TextField'

const TextFieldWrapper = ({ name, label, value, type, id, onChange }) => {
  return (
    <TextField
      required
      id={id}
      label={label}
      name={name}
      fullWidth
      value={value}
      type={type}
      onChange={onChange}
    />
  )
}

export default TextFieldWrapper
