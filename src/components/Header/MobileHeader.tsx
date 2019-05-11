import { Link } from 'gatsby'
import React from 'react'
import AsykoLogo from '../../images/asyko-logo.svg'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledImg = styled.img`
  width: 100px;
`

const Header = () => (
  <StyledHeader>
    <HeaderDiv>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <StyledImg src={AsykoLogo} />
        </Link>
      </h1>
    </HeaderDiv>
  </StyledHeader>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
