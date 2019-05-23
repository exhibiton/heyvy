import React from 'react'
import image from '../../../'
class EmailInput extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <form className="custom-form" name="contact" method="POST" data-netlify="true">
        <input className="custom-input" type="text" name="name" placeholder="Name *" />
        <input className="custom-input" type="text" name="email" placeholder="Email address *" />
        <input className="custom-input" type="text" name="message" placeholder="Message *" />
        <button className="submit-btn" type="submit">
          Send Message
        </button>
      </form>
    )
  }
}

export default EmailInput
