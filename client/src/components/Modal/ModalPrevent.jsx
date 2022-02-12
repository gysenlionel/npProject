import * as React from 'react'
import Box from '@mui/material/Box'

import Modal from '@mui/material/Modal'

import logo from '../../assets/logo/logo_t.png'
import { makeStyles } from '@material-ui/core'

import Modal1 from './Modal'

import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    borderRadius: '4px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '75vw',
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
  more: {
    color: '#DF4F4F',

    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: '#000000',
    },
  },
  img: {
    width: '53px',
    height: '53px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  close: {
    marginLeft: 'auto',
    '&:hover': {
      color: '#DF4F4F',
    },
  },
}))

export default function BasicModal({ setShowModal }) {
  const classes = useStyles()
  // modal
  const [open, setOpen] = React.useState(true)
  const handleClose = () => setOpen(false)

  const handleModal = () => {
    handleClose()
    setShowModal(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <CloseIcon className={classes.close} onClick={handleModal} />
          <div className={classes.content}>
            <img src={logo} alt="" className={classes.img} />
            <p>
              You must fill in the fields to add this event to your basket.{' '}
              <br />
              Your selection must be between 1 and 10 tickets per price
              category.
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
