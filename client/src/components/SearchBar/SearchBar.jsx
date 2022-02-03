import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    display: (props) => (props.open ? 'flex' : 'none'),
    alignItems: 'center',
    border: '1px solid #000000',
    borderRadius: theme.shape.borderRadius,
    width: '70%',

    [theme.breakpoints.up('sm')]: {
      width: '24%',
      border: ' 1px solid #000000',
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
  icon: {
    color: '#DF4F4F',
  },
}))

const SearchBar = ({ setSearch, setPageNumber }) => {
  const [open, setOpen] = useState(false)

  const classes = useStyles({ open })

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <SearchIcon className={classes.icon} />
        <InputBase
          placeholder="Search artists"
          className={classes.input}
          onChange={(e) => {
            setPageNumber(0)
            setSearch(e.target.value)
          }}
        />
        <div className={classes.cancel}>
          <CancelIcon onClick={() => setOpen(false)} />
        </div>
      </div>
      <div className={classes.searchButton}>
        <SearchIcon onClick={() => setOpen(true)} className={classes.icon} />
      </div>
    </div>
  )
}

export default SearchBar
