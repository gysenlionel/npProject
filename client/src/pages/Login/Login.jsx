import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Container} from '@mui/material'
import TextfieldWrapper from '../../components/FormUi/Textfield/Textfield'
import axios from 'axios'
import Submit from '../../components/FormUi/Submit/Submit'
const Login = () => {
        const INITIAL_FORM_STATE = {
            email: '',
            password:'',
            
          }
        
          const FORM_VALIDATION = Yup.object().shape({
            email: Yup.string().email('invalid email.').required('Required'),
            password: Yup.string()
              .required('Password is required')
              .min(6, 'Password must be at least 6 characters'),
          })
        
          return (
            <Grid container sx={{ mt: 4 }}>
              <Grid item xs={12} >
                <Container maxWidth="md">
                  <div>
                    <Formik
                      initialValues={{ ...INITIAL_FORM_STATE }}
                      validationSchema={FORM_VALIDATION}
                      // direction pour submit le form!
                      onSubmit={async(values) => {
               const email = values.email
               const password = values.password

            //    fetch 
            await axios({
                method: 'post',
                url:``,
                data: {
                    email,
                    password
                }
            })
            .then((res) => {
                if(res.data.erros){
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
                        <Grid container spacing={2} >
                          <Grid item xs={12} >
                            <div>Connect</div>
                          </Grid>
                          
                          <Grid item xs={12}>
                            <TextfieldWrapper name="email" label="Email"  />
                          </Grid>
                          <Grid item xs={12}>
                            <TextfieldWrapper name="password" label="Password" type='password'/>
                          </Grid>
                         
                          <Grid item xs={12} sx={{ mb: 4 }}>
                            <Submit >Submit</Submit>
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

export default Login
