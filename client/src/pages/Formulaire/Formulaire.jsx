import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Container } from '@mui/material'
import TextfieldWrapper from '../../components/FormUi/Textfield/Textfield'
import Submit from '../../components/FormUi/Submit/Submit'
import axios from 'axios'
import SelectWrapper from '../../components/FormUi/SelectWrapper/SelectWrapper'
import countries from '../../data/countries.json'
const Formulaire = () => {
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

  return (
    <Grid container sx={{ mt: 4 }}>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              // direction pour submit le form!
              onSubmit={async (values) => {
                const firstname = values.firstName
                const lastname = values.lastName
                const email = values.email
                const username = values.username
                const password = values.password
                const city = values.city
                const country = values.country

                //    fetch
                await axios({
                  method: 'post',
                  url: ``,
                  data: {
                    firstname,
                    lastname,
                    username,
                    email,
                    password,
                    city,
                    country,
                  },
                })
                  .then((res) => {
                    if (res.data.erros) {
                      // renvoi les erreurs
                      console.log(res.data.errors.email)
                    } else {
                      // redirigé si submit
                      console.log('submit')

                      // window.location = '/'
                    }
                  })
                  .catch((err) => console.log(err))
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div>Your details</div>
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

export default Formulaire
