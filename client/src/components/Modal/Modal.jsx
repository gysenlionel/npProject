import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import Login from '../../pages/Login/Login'
import Form from '../../pages/Formulaire/FormulaireFormik'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '80vh',
  overflow: 'scroll',
  width: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  backgroundColor: '#CEDEBD',
}

export default function BasicModal() {
  // modal
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //   switch signin/signup
  const [signin, setSignin] = React.useState(true)
  const [signup, setSignup] = React.useState(false)

  const handleModals = (e) => {
    if (e.target.id === 'signin') {
      setSignin(true)
      setSignup(false)
    } else if (e.target.id === 'signup') {
      setSignup(true)
      setSignin(false)
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div onClick={handleModals} id="signin">
              Sign in{' '}
            </div>
            <div onClick={handleModals} id="signup">
              Sign up{' '}
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            {signin ? <Login /> : <Form />}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
