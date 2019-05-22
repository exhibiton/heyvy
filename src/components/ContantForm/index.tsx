import { StyledForm, StyledInput, StyledSubmit } from './formStyles'
import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface State {
  email: string
  isSubmitting: boolean
  message: string
  name: string
}

class EmailInput extends React.Component<{}, State> {
  public state: State = {
    email: '',
    isSubmitting: false,
    message: '',
    name: '',
  }

  public render() {
    return (
      <>
        <ToastContainer />
        <StyledForm name="contact" method="POST" data-netlify="true">
          <StyledInput type="text" name="name" placeholder="Name *" />
          <StyledInput type="text" name="email" placeholder="Email address *" />
          <StyledInput type="text" name="message" placeholder="Message *" />
          <StyledSubmit type="submit">Request Quote</StyledSubmit>
        </StyledForm>
      </>
    )
  }
}

export default EmailInput
