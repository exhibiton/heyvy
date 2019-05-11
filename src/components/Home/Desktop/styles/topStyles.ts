import styled from 'styled-components'

export const StyledParent = styled.div`
  background-color: ${props => props.theme.colors.lightgray};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-left: 17.361vw;
`

export const StyledH1 = styled.p`
  ${({ theme }) => theme.textStyles.h1};
`

export const StyledH2 = styled.p`
  ${({ theme }) => theme.textStyles.h2};
`

export const StyledLgLogo = styled.img`
  position: absolute;
  right: -25%;
  width: 42.83vh;
`

export const StyledSmLogo = styled.img`
  position: absolute;
  left: 5%;
  top: 28%;
  width: 2.083vw;
`

export const StyledCircle = styled.img`
  width: 2.778vw;
  margin-top: 4.167vw;
`

export const StyledDash = styled.img`
  width: 1.667vw;
  vertical-align: middle;
  margin-left: 0.694vw;
`
