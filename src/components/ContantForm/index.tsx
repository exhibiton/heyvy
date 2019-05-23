import { StyledForm, StyledSubmit } from './formStyles'
import React from 'react'
class EmailInput extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <StyledForm name="contact" method="POST" data-netlify="true">
        <input className="custom-input" type="text" name="name" placeholder="Name *" />
        <input className="custom-input" type="text" name="email" placeholder="Email address *" />
        <input className="custom-input" type="text" name="message" placeholder="Message *" />
        <StyledSubmit type="submit">Request Quote</StyledSubmit>
      </StyledForm>
    )
  }
}

export default EmailInput
