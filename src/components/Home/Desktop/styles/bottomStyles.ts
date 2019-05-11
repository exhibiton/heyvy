import styled from 'styled-components'

export const StyledParent = styled.div`
  background-color: ${props => props.theme.colors.copper};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledContainer = styled.div`
  background-color: ${props => props.theme.colors.copper};
  padding-left: 17.361vw;
`

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5.556vw;
`

export const StyledContent = styled.div`
  width: 48.611vw;
  display: flex;
  flex-direction: column;
`

export const StyledTitle = styled.p`
  ${({ theme }) => theme.textStyles.subtitle};
  margin-bottom: 1.389vw;
`

export const StyledSmLogo = styled.img`
  position: absolute;
  left: 5%;
  top: 85%;
  width: 2.083vw;
`

export const StyledHalfCircle = styled.img`
  position: absolute;
  right: -14.8%;
  top 30%;
  width: 13.403vw;
`
