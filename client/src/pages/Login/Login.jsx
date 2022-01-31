import React, { useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Container } from '@mui/material'
import { gql, useMutation } from '@apollo/client'
import { makeStyles } from '@material-ui/core'

import { AuthContext } from '../../context/auth'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ErrorIcon from '@mui/icons-material/Error'

import TextfieldWrapper from '../../components/FormUi/Textfield/Textfield'
import Submit from '../../components/FormUi/Submit/Submit'

const useStyles = makeStyles((theme) => ({
  sign: {
    color: '#DF4F4F',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  error: {
    color: '#da1212',
  },

  login__background: {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  },

  login__form: {
    borderRadius: '6px / 8px',
    padding: '2%',
    backgroundColor: '#fff',
    boxShadow: '1px 1px 10px grey, -1px -1px 10px grey',
  },
  input: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
}))
const Login = () => {
  // context pour data user
  const context = useContext(AuthContext)
  // errors
  const [errors, setErrors] = useState({})
  // style material ui
  const classes = useStyles()

  const INITIAL_FORM_STATE = {
    email: '',
    password: '',
  }

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email('invalid email.').required('Required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })

  // state apollo
  const [loginUser] = useMutation(LOGIN_USER)

  return (
    <Grid container sx={{ pt: 0 }} className={classes.login__background}>
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <div>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              // direction pour submit le form!
              onSubmit={async (values) => {
                //    fetch
                const { data } = await loginUser({
                  onError(err) {
                    setErrors(err.graphQLErrors[0].extensions.errors)
                  },
                  variables: {
                    email: values.email,
                    password: values.password,
                  },
                })
                // met la data dans context
                context.login(data.login)
                // redirection
                window.location = '/'
              }}
            >
              <Form className={classes.login__form}>
                <Grid
                  container
                  spacing={2}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={12}>
                    <p className={classes.sign}>Sign in</p>
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="email"
                      label="Email"
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="password"
                      label="Password"
                      type="password"
                      className={classes.input}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    {Object.keys(errors).length > 0 && (
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                        }}
                        aria-label="contacts"
                      >
                        {Object.values(errors).map((value) => (
                          <ListItem disablePadding key={`${value}-padd`}>
                            <ListItemButton
                              key={`${value}-butt`}
                              sx={{
                                '&:hover': {
                                  bgcolor: 'transparent',
                                },
                              }}
                            >
                              <ListItemIcon key={`${value}-icon`}>
                                <ErrorIcon
                                  key={`${value}-err`}
                                  className={classes.error}
                                />
                              </ListItemIcon>

                              <ListItemText
                                key={value}
                                primary={value}
                                className={classes.error}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Grid>

                  <Grid item xs={12} sx={{ mb: 4 }}>
                    <Submit>Submit</Submit>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  )
}

// graphql data
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      username
      firstname
      lastname
      address
      city
      country
      createdAt
      token
    }
  }
`

export default Login
