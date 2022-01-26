import * as React from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import Avatar from '@mui/material/Avatar'
import { makeStyles } from '@material-ui/core'
import logo from '../../assets/logo/logo_t.png'

import { AuthContext } from '../../context/auth'

const useStyles = makeStyles((theme) => ({
  appbar: {
    top: '0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#86C4BA',
  },
  typo: {
    fontFamily: 'Abel',
    color: '#fff',
  },
  navlink: {
    color: '#fff',
    textDecoration: 'none',
  },
  navlinksm: {
    color: '#757575',
    textDecoration: 'none',
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
  },
  linkDrawer: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    display: 'block',
  },
  disconnect: {
    display: 'flex',
    justifyContent: 'flex-start',
    cursor: 'pointer',
  },
  linksLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  username: {
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}))

const Nav = () => {
  const { user, logout } = React.useContext(AuthContext)

  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <NavLink to="/" className={classes.navlink}>
          <div className={classes.fullLogo}>
            <img src={logo} alt="" className={classes.logoLg} />
            <img src={logo} alt="" className={classes.logoSm} />
            <div className={classes.typo}>My Event</div>
          </div>
        </NavLink>
        <div className={classes.links}>
          <NavLink to="events" className={classes.navlink}>
            <div className={classes.linksLg}>
              <div className={classes.link}>Events</div>
            </div>
          </NavLink>
          <NavLink to="news" className={classes.navlink}>
            <div className={classes.linksLg}>
              <div className={classes.link}>News</div>
            </div>
          </NavLink>
          <NavLink to="shopping" className={classes.navlink}>
            <div className={classes.linksLg}>
              <div className={classes.link}>Shopping List</div>
            </div>
          </NavLink>
        </div>
        <div className={classes.icons}>
          {user ? (
            <div className={classes.username}>Hello, {user.username}</div>
          ) : null}
          <NavLink to="profil" className={classes.navlink}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className={classes.avatar}
            />
          </NavLink>
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
          anchor="right"
        >
          <NavLink to="events" className={classes.navlinksm}>
            <div className={classes.linkDrawer}>
              <ListItem>
                <div>Events</div>
              </ListItem>
            </div>
          </NavLink>
          <NavLink to="news" className={classes.navlinksm}>
            <div className={classes.linkDrawer}>
              <ListItem className={classes.linkDrawer}>
                <div>News</div>
              </ListItem>
            </div>
          </NavLink>
          <NavLink to="shopping" className={classes.navlinksm}>
            <div className={classes.linkDrawer}>
              <ListItem className={classes.linkDrawer}>
                <div>Shopping list</div>
              </ListItem>
            </div>
          </NavLink>
          {user ? (
            <ListItem className={classes.disconnect} onClick={logout}>
              <div>Logout</div>
            </ListItem>
          ) : (
            <ListItem>
              <div>Login</div>
            </ListItem>
          )}
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
