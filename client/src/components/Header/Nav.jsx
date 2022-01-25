import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import { makeStyles } from '@material-ui/core'
import logo from '../../assets/logo/logo_t.png'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#86C4BA',
  },
  typo: {
    fontFamily: 'Abel',
  },
  fullLogo: {
    textAlign: 'center',
  },
  logoLg: {
    width: '60px',
    height: '60px',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    width: '30px',
    height: '30px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  links: {
    display: 'flex',
  },
  link: {
    marginRight: theme.spacing(8),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}))

const Nav = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <div className={classes.fullLogo}>
          <img src={logo} alt="" className={classes.logoLg} />
          <img src={logo} alt="" className={classes.logoSm} />
          <div className={classes.typo}>My Event</div>
        </div>
        <div className={classes.links}>
          <div className={classes.link}>icon</div>
          <div className={classes.link}>icon</div>
          <div className={classes.link}>icon</div>
        </div>
        <div className={classes.icons}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.avatar}
          />
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          anchor="top"
        >
          <ListItem>
            <div>icon</div>
          </ListItem>
          <ListItem>
            <div>icon</div>
          </ListItem>
          <ListItem>
            <div>icon</div>
          </ListItem>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
