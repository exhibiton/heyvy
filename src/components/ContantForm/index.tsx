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

  private handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    this.setState({ isSubmitting: true })
    axios({
      method: 'POST',
      params: {
        email: this.state.email,
      },
      url: 'http://localhost:3000/api/wait_list',
    })
      .then(() => {
        toast.success('Quote request sent', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        })
        this.setState({ isSubmitting: false })
      })
      .catch(() => {
        toast.error('Could not send quote request', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        })
        this.setState({ isSubmitting: false })
      })
  }

  public render() {
    return (
      <>
        <ToastContainer />
        <StyledForm onSubmit={this.handleSubmit}>
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
