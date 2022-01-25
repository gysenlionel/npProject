import React, { useState, useEffect } from 'react'
import { Grid, Container } from '@mui/material'
import { gql, useMutation } from '@apollo/client'
import TextField from '@mui/material/TextField'
import { Button } from '@material-ui/core'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ErrorIcon from '@mui/icons-material/Error'

import './Formulaire.css'

const Formulaire = () => {
  // errors
  const [errors, setErrors] = useState({})

  // values
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  // state apollo
  const [addUser] = useMutation(REGISTER_USER)

  const onSubmit = async (e) => {
    e.preventDefault()
    const { data } = await addUser({
      onError(err) {
        console.log(err.graphQLErrors[0].extensions.errors)
        setErrors(err.graphQLErrors[0].extensions.errors)
      },
      variables: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        address: address,
        city: city,
        country: country,
      },
    })

    // console.log(data.registerInput)
  }

  return (
    <Grid container sx={{ mt: 4 }}>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="fistname"
                  label="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="lastname"
                  label="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="username"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="address"
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="city"
                  label="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="country"
                  label="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                {Object.keys(errors).length > 0 && (
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'background.paper',
                    }}
                    aria-label="contacts"
                  >
                    {Object.values(errors).map((value) => (
                      <ListItem disablePadding key={`${value}-padd`}>
                        <ListItemButton key={`${value}-butt`}>
                          <ListItemIcon key={`${value}-icon`}>
                            <ErrorIcon key={`${value}-err`} className="error" />
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
              <Grid item xs={12}>
                <Button
                  fullWidth
                  color="primary"
                  variant={'contained'}
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
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
