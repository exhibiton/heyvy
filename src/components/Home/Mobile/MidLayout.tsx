import React from 'react'
import MobileHeader from '../../Header/MobileHeader'
import {
  Spacing,
  StyledSubTitle,
  StyledTitle,
  StyledContainer,
  StyledP,
  StyledHeyvy,
  StyledParagraph,
} from './styles/midStyles'
import heyvyPlus from '../../../images/heyvySm.svg'
import MobileSocials from './MobileSocials'

const MidLayout: React.SFC<{}> = () => (
  <StyledContainer>
    <MobileHeader />
    <Spacing />
    <StyledParagraph>
      <StyledSubTitle>who</StyledSubTitle>
      <StyledTitle>
        A digital <br />
        product designer
      </StyledTitle>
      <StyledP>
        with over 10 years of experience in design industry, working with clients all over the world for
        studios like Fantasy, SFCD, Cuberto, Gotomo etc.
      </StyledP>
    </StyledParagraph>
    <StyledParagraph>
      <StyledSubTitle>What</StyledSubTitle>
      <StyledTitle>
        Helps startups <br />
        and entrepreneurs
      </StyledTitle>
      <StyledP>
        to transform complex data into a clear and good looking interface, create clever product architecture
        and perfect visual to make products stand out
      </StyledP>
    </StyledParagraph>
    <StyledHeyvy>
      <img src={heyvyPlus} />
    </StyledHeyvy>
    <MobileSocials />
  </StyledContainer>
)

export default MidLayout
