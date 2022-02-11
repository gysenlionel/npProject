import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import Avatar from '@mui/material/Avatar'
import { makeStyles } from '@material-ui/core'
import logo from '../../assets/logo/logo_t.png'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import BadgeXs from '../Badge/BadgeXs'
import BadgeClassic from '../Badge/BadgeClassic'
import Login from '../../pages/Login/Login'

import { AuthContext } from '../../context/auth'

const useStyles = makeStyles((theme) => ({
  appbar: {
    top: '0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
  },
  typo: {
    fontFamily: 'Abel',
    color: '#fff',
    textShadow: '0px 1px 4px black ',
    fontWeight: 'bold',
  },
  navlink: {
    color: '#fff',
    textDecoration: 'none',
  },
  navlinksm: {
    color: '#757575',
    textDecoration: 'none',
    '&:hover': { color: '#DF4F4F', fontWeight: 'bold' },
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
  fullLogoDrawer: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  typoDrawer: {
    fontFamily: 'Abel',
    color: '#000000',
    fontWeight: 'bold',
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
    backgroundColor: '#000000',
    marginRight: theme.spacing(8),
    '&:hover': { color: '#DF4F4F' },
  },
  linkDrawer: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    display: 'block',
  },
  disconnect: {
    color: '#757575',
    cursor: 'pointer',
    '&:hover': { color: '#DF4F4F', fontWeight: 'bold' },
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
      '&:hover': { color: '#DF4F4F', fontWeight: 'bold' },
    },
  },
  linksLg: {
    position: 'relative',
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
  drawerPaper: {
    width: '45%',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: '25%',
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing(3),
    },
  },
  login: {
    color: '#757575',
    cursor: 'pointer',
    '&:hover': { color: '#DF4F4F', fontWeight: 'bold' },
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
      '&:hover': { color: '#DF4F4F', fontWeight: 'bold' },
    },
  },
  borderB: {
    width: '100%',
    borderBottom: '1px solid #757575',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      borderBottom: '1px solid #757575',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  borderBLastItem: {
    [theme.breakpoints.up('sm')]: {
      borderBottom: 'none',
    },
    width: '100%',
    borderBottom: '1px solid #757575',
  },
  usernamename: {
    color: '#DF4F4F',
    fontWeight: 'bold',
  },
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
  helloUserDrawer: {
    textAlign: 'center',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  nameUserDrawer: {
    textAlign: 'center',
    color: '#DF4F4F',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  shopIcon: {
    // marginLeft: theme.spacing(25),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const Nav = () => {
  const state = useSelector((state) => state.handleCart)
  const { user, logout } = React.useContext(AuthContext)

  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const [openModal, setOpenModal] = React.useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

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
          {user && (
            <NavLink to="shopping" className={classes.navlink}>
              <div className={classes.linksLg}>
                <BadgeClassic className={classes.badge} right="54">
                  <div className={classes.link}>Shopping List</div>
                </BadgeClassic>
              </div>
            </NavLink>
          )}
        </div>
        <div className={classes.shopIcon}>
          {state.length !== 0 && (
            <NavLink to="shopping" className={classes.navlink}>
              <BadgeXs className={classes.badgeXs}>
                <ShoppingCartIcon />
              </BadgeXs>
            </NavLink>
          )}
        </div>
        <div className={classes.icons}>
          {user ? (
            <div className={classes.username}>
              Hello,{' '}
              <span className={classes.usernamename}>{user.username}</span>
            </div>
          ) : null}
          <NavLink to="profil" className={classes.navlink}>
            <Avatar alt="Remy Sharp" src="" className={classes.avatar} />
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

        {/* ************ Drawer ******************** */}

        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          anchor="right"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {user && (
            <>
              <div className={classes.helloUserDrawer}>
                <span>hello</span>
              </div>
              <div className={classes.nameUserDrawer}>
                <span>{user.username}</span>
              </div>
            </>
          )}
          <span className={classes.borderBLastItem}>
            <NavLink to="events" className={classes.navlinksm}>
              <div className={classes.linkDrawer}>
                <ListItem>
                  <div>Events</div>
                </ListItem>
              </div>
            </NavLink>
          </span>
          <span className={classes.borderBLastItem}>
            <NavLink to="news" className={classes.navlinksm}>
              <div className={classes.linkDrawer}>
                <ListItem className={classes.linkDrawer}>
                  <div>News</div>
                </ListItem>
              </div>
            </NavLink>
          </span>
          {user && (
            <span className={classes.borderBLastItem}>
              <NavLink to="shopping" className={classes.navlinksm}>
                <div className={classes.linkDrawer}>
                  <ListItem className={classes.linkDrawer}>
                    <div>Shopping list</div>
                  </ListItem>
                </div>
              </NavLink>
            </span>
          )}
          {/* Changé liens !!! */}
          <span className={classes.borderB}>
            <NavLink to="shopping" className={classes.navlinksm}>
              <ListItem>
                <div>About us</div>
              </ListItem>
            </NavLink>
          </span>
          <span className={classes.borderB}>
            <NavLink to="shopping" className={classes.navlinksm}>
              <ListItem>
                <div>Contact us</div>
              </ListItem>
            </NavLink>
          </span>
          {user ? (
            <span className={classes.borderB}>
              <ListItem onClick={logout}>
                <div className={classes.disconnect}>Logout</div>
              </ListItem>
            </span>
          ) : (
            <>
              <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className={classes.modal}>
                  <Login handleClose={handleClose} />
                </Box>
              </Modal>

              <span className={classes.borderB}>
                <ListItem>
                  <div onClick={handleOpen} className={classes.login}>
                    Login
                  </div>
                </ListItem>
              </span>
            </>
          )}
          <div className={classes.fullLogoDrawer}>
            <img src={logo} alt="" className={classes.logoLg} />
            <img src={logo} alt="" className={classes.logoSm} />
            <div className={classes.typoDrawer}>My Event</div>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
