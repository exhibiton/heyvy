import React from 'react'
import {
  ImgContainer,
  StyledColumn,
  StyledContainer,
  StyledContent,
  StyledParent,
  StyledSubTitle,
  StyledTitle,
  StyledParagraph,
  StyledDash,
  StyledCrosses,
  StyledHorizontalContainer,
  StyledSmLogo,
} from './styles/midStyles'
import Header from '../../Header/DesktopHeader'
import SocialFooter from '../../SocialFooter'
import VerticalDash from '../../../images/midRightBar.svg'
import Crosses from '../../../images/sixCrosses.svg'
import heyvySm from '../../../images/heyvySm.svg'

interface MidLayoutProps {
  email?: string
}

const MidLayout: React.SFC<MidLayoutProps> = () => (
  <>
    <StyledSmLogo src={heyvySm} />
    <StyledParent>
      <Header />
      <StyledContainer>
        <StyledContent>
          <div>
            <StyledCrosses src={Crosses} />
          </div>
          <StyledHorizontalContainer>
            <StyledColumn>
              <StyledSubTitle>Who</StyledSubTitle>
              <StyledTitle>
                A digital <br /> product designer
              </StyledTitle>
              <StyledParagraph>
                with over 10 years of experience in design industry, working with clients all over the world
                for studios like Fantasy, SFCD, Cuberto, Gotomo etc.
              </StyledParagraph>
            </StyledColumn>
            <StyledColumn>
              <StyledSubTitle>What</StyledSubTitle>
              <StyledTitle>Helps startups and entrepreneurs</StyledTitle>
              <StyledParagraph>
                to transform complex data into a clear and good looking interfaces, create clever product
                architecture and perfect visual to make products stand out
              </StyledParagraph>
            </StyledColumn>
          </StyledHorizontalContainer>
          <div style={{}}>
            <StyledCrosses src={Crosses} />
          </div>
        </StyledContent>
        <ImgContainer>
          <StyledDash src={VerticalDash} />
        </ImgContainer>
      </StyledContainer>

      <SocialFooter />
    </StyledParent>
  </>
)

MidLayout.defaultProps = {
  email: '',
}

export default MidLayout
