import React, { useState } from 'react'
import { TextField, MenuItem } from '@material-ui/core'

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const configSelect = {
    ...otherProps,
    select: true,
    variant: 'outlined',
    size: 'small',
  }

  return (
    <TextField {...configSelect}>
      {options.map((item, index) => {
        return (
          <MenuItem key={`${item}-${index}`} value={item}>
            {item}
          </MenuItem>
        )
      })}
    </TextField>
  )
}

export default SelectWrapper
