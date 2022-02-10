import React from 'react'
import { NavLink } from 'react-router-dom'
import Popup from 'reactjs-popup'
import { makeStyles } from '@material-ui/core'
import logo from '../../assets/logo/logo_t.png'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Login from '../../../pages/Login/Login'

const BootstrapButton = styled(Button)({
  width: '85px',
  border: '1px solid #DF4F4F',
  borderRadius: '2px / 4px',
  padding: '7px',
  color: '#DF4F4F',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  background: 'transparent',

  '&:hover': {
    color: ' #fff',
    border: '1px solid  #DF4F4F',
    backgroundColor: '#DF4F4F',
  },
})

const useStyles = makeStyles((theme) => ({
  popupContainer: {
    width: '50%',
  },
  modal: {
    fontSize: '1rem',
    // border: '1px solid #DF4F4F',
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.6)',
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    bordeBottom: '1px solid gray',
    fontSize: '18px',
    textAlign: 'center',
    padding: '5px',
  },
  content: {
    width: '100%',
    padding: '10px 5px',
    // fontWeight: 'bold',
  },
  actions: {
    width: '100%',
    padding: '10px 5px',
    margin: 'auto',
    textAlign: 'center',
  },
  close: {
    cursor: 'pointer',
    position: 'absolute',
    display: ' block',
    padding: '2px 5px',
    lineHeight: '20px',
    right: '-10px',
    top: ' -10px',
    fontSize: '24px',
    background: '#ffffff',
    borderRadius: '18px',
    border: '1px solid #cfcece',
  },
  img: {
    width: '53px',
    height: '53px',
  },
  sign: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    marginLeft: theme.spacing(2),
  },
  modalLogin: {
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
}))

const PopupCon = ({ children }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Popup trigger={children} modal nested className={classes.popupContainer}>
      {(close) => (
        <div className={classes.modal}>
          <button className={classes.close} onClick={close}>
            &times;
          </button>
          <div className={classes.header}>
            <img src={logo} alt="" className={classes.img} />
          </div>
          <div className={classes.content}>login to access this page</div>
          <div className={classes.actions}>
            <div className={classes.sign}>
              <BootstrapButton
                variant="contained"
                disableRipple
                onClick={handleOpen}
              >
                Sign
              </BootstrapButton>
              <NavLink to="signup" className={classes.link}>
                <BootstrapButton variant="contained" disableRipple>
                  Sign up
                </BootstrapButton>
              </NavLink>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className={classes.modalLogin}>
                <Login handleClose={handleClose} />
              </Box>
            </Modal>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default PopupCon
