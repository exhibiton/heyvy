import React from 'react'
import MobileHeader from '../../Header/MobileHeader'
import { StyledTitle, StyledContainer, StyledHeyvy, StyledParagraph } from './styles/bottomStyles'
import heyvyPlus from '../../../images/heyvySm.svg'
import MobileSocials from './MobileSocials'
import ContactForm from '../../ContantForm'

const BottomLayout: React.SFC<{}> = () => (
  <StyledContainer>
    <MobileHeader />
    <StyledParagraph>
      <StyledTitle>Get in touch</StyledTitle>
      <ContactForm />
    </StyledParagraph>

    <StyledHeyvy>
      <img src={heyvyPlus} />
    </StyledHeyvy>
    <MobileSocials />
  </StyledContainer>
)

export default BottomLayout
