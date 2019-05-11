import { StyledForm, StyledInput, StyledSubmit } from './formStyles'
import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface State {
  email: string
  isSubmitting: boolean
}

class EmailInput extends React.Component<{}, State> {
  public state: State = {
    email: '',
    isSubmitting: false,
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
        toast.success('You have been added to the list', {
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
        toast.error('Could not add you to the list', {
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
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
          />
          <StyledSubmit type="submit" disabled={this.state.isSubmitting}>
            Request Access
          </StyledSubmit>
        </StyledForm>
      </>
    )
  }
}

export default EmailInput
