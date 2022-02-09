import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

import { makeStyles } from '@material-ui/core'

import Login from '../../pages/Login/Login'
import Form from '../../pages/Formulaire/FormulaireFormik'
import { NavLink } from 'react-router-dom'
import RedButton from '../Button/RedButton'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },

  sign: {
    display: 'flex',
  },

  link: {
    textDecoration: 'none',
  },
  modalContainer: {
    width: '100%',
  },
}))

export default function BasicModal() {
  const classes = useStyles()
  // modal
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //   switch signin/signup
  const [signin, setSignin] = React.useState(true)
  const [signup, setSignup] = React.useState(false)

  return (
    <div>
      <div className={classes.sign}>
        <RedButton onClick={handleOpen}>Sign in</RedButton>

        <NavLink to="signup" className={classes.link}>
          <RedButton>Sign up</RedButton>
        </NavLink>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Login />
        </Box>
      </Modal>
    </div>
  )
}
