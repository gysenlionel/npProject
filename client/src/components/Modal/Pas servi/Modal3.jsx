import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Login from '../../../pages/Login/Login'
import FormulaireFormik from '../../../pages/Formulaire/FormulaireFormik'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    // margin: 'auto',
  },
  tab: {
    color: 'red !important',
  },
}))
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Modal3 = () => {
  const [value, setValue] = useState(0)
  const classes = useStyles()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider' }}
        className={classes.tabs}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Sign In" className={classes.tab} />
          <Tab label="Sign Up" className={classes.tab} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormulaireFormik />
      </TabPanel>
    </Box>
  )
}

export default Modal3
