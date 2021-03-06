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

const BottomLayout: React.SFC<{}> = () => (
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

export default BottomLayout
