import * as React from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core'

import { useSelector } from 'react-redux'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 54,
    top: 2,
    border: `1px solid #000000`,
    padding: '0 4px',
    backgroundColor: 'white',
    color: '#000000',
    fontWeight: 'bold',
  },
}))

export default function SimpleBadge({ children, ...props }) {
  const state = useSelector((state) => state.handleCart)
  return (
    <StyledBadge badgeContent={state.length} {...props}>
      {children}
    </StyledBadge>
  )
}
