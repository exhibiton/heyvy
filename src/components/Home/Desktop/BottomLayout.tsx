import React from 'react'
import {
  StyledContainer,
  StyledContent,
  StyledParent,
  StyledTitle,
  StyledSmLogo,
  StyledHalfCircle,
} from './styles/bottomStyles'
import Header from '../../Header/DesktopHeader'
import ContactForm from '../../ContantForm'
import SocialFooter from '../../SocialFooter'
import heyvySm from '../../../images/heyvySm.svg'
import halfCircle from '../../../images/halfCircle.svg'

interface BottomLayoutProps {
  email?: string
}

const BottomLayout: React.SFC<BottomLayoutProps> = () => (
  <StyledParent>
    <StyledSmLogo src={heyvySm} />
    <StyledHalfCircle src={halfCircle} />
    <Header />
    <StyledContainer>
      <StyledContent>
        <StyledTitle>Get in touch</StyledTitle>
        <ContactForm />
      </StyledContent>
    </StyledContainer>
    <SocialFooter />
  </StyledParent>
)

BottomLayout.defaultProps = {
  email: '',
}

export default BottomLayout
