import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core'

import RedButton from '../../Button/RedButton'
import Login from '../../../pages/Login/Login'
import Modal3 from './Modal3'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    bgcolor: 'background.paper',
    border: 'transparent !important',
    maxHeight: '100vh',
  },
}))
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vw',
  bgcolor: 'background.paper',
  border: 'transparent !important',
  p: 4,
}

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

export default function TransitionsModal() {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <BootstrapButton variant="contained" disableRipple onClick={handleOpen}>
        Sign
      </BootstrapButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modal}>
            <Modal3 />
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
