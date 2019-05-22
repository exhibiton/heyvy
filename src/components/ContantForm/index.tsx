import { StyledForm, StyledInput, StyledSubmit } from './formStyles'
import React from 'react'
class EmailInput extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <StyledForm name="contact" method="POST" data-netlify="true">
        <StyledInput type="text" name="name" placeholder="Name *" />
        <StyledInput type="text" name="email" placeholder="Email address *" />
        <StyledInput type="text" name="message" placeholder="Message *" />
        <StyledSubmit type="submit">Request Quote</StyledSubmit>
      </StyledForm>
    )
  }
}

export default EmailInput
