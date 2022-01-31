import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import { alpha } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    display: (props) => (props.open ? 'flex' : 'none'),
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      width: '24%',
      display: (props) => (props.open ? 'flex' : 'flex'),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    width: '100%',
  },
  cancel: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  searchButton: {
    marginLeft: theme.spacing(2),
    display: (props) => (props.open ? 'none ' : 'flex'),
    [theme.breakpoints.up('sm')]: {
      display: (props) => (props.open ? 'none ' : 'none'),
    },
  },
}))

const SearchBar = ({ setSearch, setPageNumber }) => {
  const [open, setOpen] = useState(false)

  const classes = useStyles({ open })

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <SearchIcon />
        <InputBase
          placeholder="Search artists"
          className={classes.input}
          onChange={(e) => {
            // setPageNumber(0)
            setSearch(e.target.value)
          }}
        />
        <div className={classes.cancel}>
          <CancelIcon onClick={() => setOpen(false)} />
        </div>
      </div>
      <div className={classes.searchButton}>
        <SearchIcon onClick={() => setOpen(true)} />
      </div>
    </div>
  )
}

export default SearchBar
