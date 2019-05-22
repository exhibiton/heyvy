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
          <StyledInput
            type="text"
            name="name"
            placeholder="Name *"
            value={this.state.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
          />
          <StyledInput
            type="text"
            name="email"
            placeholder="Email address *"
            value={this.state.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
          />
          <StyledInput
            type="text"
            name="message"
            placeholder="Message *"
            value={this.state.message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
          />
          <StyledSubmit type="submit" disabled={this.state.isSubmitting}>
            Request Quote
          </StyledSubmit>
        </StyledForm>
      </>
    )
  }
}

export default EmailInput
