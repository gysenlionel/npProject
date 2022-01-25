import React, { useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Container } from '@mui/material'
import { gql, useMutation } from '@apollo/client'

import { AuthContext } from '../../context/auth'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ErrorIcon from '@mui/icons-material/Error'

import './Formulaire.css'

import TextfieldWrapper from '../../components/FormUi/Textfield/Textfield'
import Submit from '../../components/FormUi/Submit/Submit'
import SelectWrapper from '../../components/FormUi/SelectWrapper/SelectWrapper'
import countries from '../../data/countries.json'
const Formulaire = () => {
  // context data user
  const context = useContext(AuthContext)
  // errors
  const [errors, setErrors] = useState({})

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
    <Grid container sx={{ pt: 4 }} className="background">
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              // direction pour submit le form!
              onSubmit={async (values) => {
                console.log(values)
                //    fetch
                const { data } = await addUser({
                  onError(err) {
                    console.log(
                      err.graphQLErrors[0].extensions.exception.errors
                    )
                    setErrors(err.graphQLErrors[0].extensions.exception.errors)
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
              <Form className="formulaire__form">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div>Fill in your details</div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper name="firstName" label="First Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper name="lastName" label="Last Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper name="username" label="User Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextfieldWrapper name="email" label="Email" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="password"
                      label="Password"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="confirmPassword"
                      label="Password Confirm"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper name="address" label="Address" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper name="city" label="City" />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectWrapper
                      name="country"
                      options={countries}
                      label="Country"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {Object.keys(errors).length > 0 && (
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                          bgcolor: '#d5eebb',
                        }}
                        aria-label="contacts"
                      >
                        {Object.values(errors).map((value) => (
                          <ListItem disablePadding key={`${value}-padd`}>
                            <ListItemButton key={`${value}-butt`}>
                              <ListItemIcon key={`${value}-icon`}>
                                <ErrorIcon
                                  key={`${value}-err`}
                                  className="error"
                                />
                              </ListItemIcon>

                              <ListItemText
                                key={value}
                                primary={value}
                                className="error"
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
