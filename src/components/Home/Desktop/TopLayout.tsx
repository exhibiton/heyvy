import React from 'react'
import {
  StyledContainer,
  StyledParent,
  StyledH1,
  StyledH2,
  StyledLgLogo,
  StyledSmLogo,
  StyledCircle,
  StyledDash,
} from './styles/topStyles'
import Header from '../../Header/DesktopHeader'
import heyvyLg from '../../../images/heyvyLg.svg'
import heyvySm from '../../../images/heyvySm.svg'
import peachCircle from '../../../images/peachCircle.svg'
import dash from '../../../images/dash.svg'
import SocialFooter from '../../SocialFooter'

const TopLayout: React.SFC<{}> = () => (
  <>
    <StyledLgLogo src={heyvyLg} />
    <StyledSmLogo src={heyvySm} />

    <StyledParent>
      <Header />
      <StyledContainer>
        <StyledH2>
          Cyrill Clyunev
          <StyledDash src={dash} />
        </StyledH2>
        <StyledH1>
          Digital product <br /> design & art direction
        </StyledH1>
        <StyledCircle src={peachCircle} />
      </StyledContainer>
      <SocialFooter />
    </StyledParent>
  </>
)

export default TopLayout
