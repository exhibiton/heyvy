import React from 'react'
import { StyledContainer, StyledContent, StyledParent, StyledTitle } from './styles/bottomStyles'
import Header from '../../Header/DesktopHeader'
import ContactForm from '../../ContantForm'

interface BottomLayoutProps {
  email?: string
}

const BottomLayout: React.SFC<BottomLayoutProps> = () => (
  <StyledParent>
    <Header />
    <StyledContainer>
      <StyledContent>
        <StyledTitle>Get in touch</StyledTitle>
        <ContactForm />
      </StyledContent>
    </StyledContainer>
  </StyledParent>
)

BottomLayout.defaultProps = {
  email: '',
}

export default BottomLayout
