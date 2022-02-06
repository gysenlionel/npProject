import React, { useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Container } from '@mui/material'
import { gql, useMutation } from '@apollo/client'
import { makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../../context/auth'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ErrorIcon from '@mui/icons-material/Error'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import TextfieldWrapper from '../../components/FormUi/Textfield/Textfield'
import Submit from '../../components/FormUi/Submit/Submit'
import SelectWrapper from '../../components/FormUi/SelectWrapper/SelectWrapper'
import countries from '../../data/countries.json'
import image from '../../assets/img/test6.jpg'

const useStyles = makeStyles((theme) => ({
  error: {
    color: '#da1212',
  },

  background: {
    color: 'black',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  formContainer: {
    marginTop: theme.spacing(4),
  },
  formulaire__form: {
    borderRadius: '6px / 8px',
    padding: '2%',
    marginBottom: '6%',
    backgroundColor: '#fff',
    boxShadow: '1px 1px 5px grey, -1px -1px 5px grey',
  },
  sign: {
    color: '#DF4F4F',
    margin: 'auto',
    fontSize: '1.2rem',
  },
  input: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focusVisible': {
        color: 'black',
      },
      '&.Mui-focused': {
        color: '#000000',
      },
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    color: '#595959',
    cursor: 'pointer',
    '&:hover': {
      color: '#000000',
    },
  },
}))
const Formulaire = () => {
  const classes = useStyles()
  // context data user
  const context = useContext(AuthContext)
  // errors
  const [errors, setErrors] = useState(null)
  // errors 2
  const [errors2, setErrors2] = useState(null)

  // object non null
  function isRealValue(obj) {
    return obj && obj !== 'null' && obj !== 'undefined'
  }

  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    country: '',
  }

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    email: Yup.string().email('invalid email.').required('Required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
  })

  // state apollo
  const [addUser] = useMutation(REGISTER_USER)

  return (
    <Grid container sx={{ pt: 0 }} className={classes.background}>
      <Grid item xs={12}>
        <Container maxWidth="sm" className={classes.formContainer}>
          <div>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              // direction pour submit le form!
              onSubmit={async (values) => {
                // console.log(values)
                //    fetch
                const { data } = await addUser({
                  onError(err) {
                    setErrors(err.graphQLErrors[0].extensions.errors)
                    setErrors2(
                      err.graphQLErrors[0].extensions.exception.thrownValue
                        .errors
                    )
                  },
                  variables: {
                    firstname: values.firstName,
                    lastname: values.lastName,
                    email: values.email,
                    username: values.username,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                    address: values.address,
                    city: values.city,
                    country: values.country,
                  },
                })
                // if (data) {
                context.login(data.register)
                // redirection
                window.location = '/'
                // }
                // return null
              }}
            >
              <Form className={classes.formulaire__form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className={classes.title}>
                      <NavLink to="/">
                        <ArrowBackIcon className={classes.arrow} />
                      </NavLink>
                      <h1 className={classes.sign}>Fill in your details</h1>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="firstName"
                      label="First Name"
                      fullWidth={true}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="lastName"
                      label="Last Name"
                      fullWidth={true}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="username"
                      label="User Name"
                      fullWidth={true}
                      className={classes.input}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="email"
                      label="Email"
                      fullWidth={true}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="password"
                      label="Password"
                      type="password"
                      fullWidth={true}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="confirmPassword"
                      label="Password Confirm"
                      type="password"
                      fullWidth={true}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="address"
                      label="Address"
                      fullWidth={true}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="city"
                      label="City"
                      fullWidth={true}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectWrapper
                      name="country"
                      options={countries}
                      label="Country"
                      fullWidth={true}
                      className={classes.input}
                    />
                  </Grid>

                  {/* errors1 */}
                  <Grid item xs={12}>
                    {isRealValue(errors) && (
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

                  {/* errors2 */}
                  <Grid item xs={12}>
                    {isRealValue(errors2) && (
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                        }}
                        aria-label="contacts"
                      >
                        {Object.values(errors2).map((value) => (
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
const REGISTER_USER = gql`
  mutation register(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $address: String!
    $city: String!
    $country: String!
  ) {
    register(
      registerInput: {
        firstname: $firstname
        lastname: $lastname
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        address: $address
        city: $city
        country: $country
      }
    ) {
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

export default Formulaire
