import React from 'react'
import MobileHeader from '../../Header/MobileHeader'
import {
  StyledCircle,
  StyledContainer,
  StyledImgDiv,
  StyledHeyvy,
  StyledArea,
  StyledSubP,
  StyledP,
} from './styles/topStyles'
import dash from '../../../images/dash.svg'
import peachCircle from '../../../images/peachCircle.svg'
import heyvyPlus from '../../../images/heyvySm.svg'
import MobileSocials from './MobileSocials'

interface TopLayoutProps {
  email?: string
}

const TopLayout: React.SFC<TopLayoutProps> = () => (
  <StyledContainer>
    <MobileHeader />
    <StyledArea>
      <StyledSubP>Cyrill Clyunev</StyledSubP>
      <StyledImgDiv>
        <img src={dash} />
      </StyledImgDiv>
    </StyledArea>
    <StyledP>
      Digital product <br />
      design & art direction
    </StyledP>
    <StyledCircle>
      <img src={peachCircle} />
    </StyledCircle>
    <StyledHeyvy>
      <img src={heyvyPlus} />
    </StyledHeyvy>
    <MobileSocials />
  </StyledContainer>
)

TopLayout.defaultProps = {
  email: '',
}

export default TopLayout
