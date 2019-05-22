import styled from 'styled-components'

export const StyledParent = styled.div`
  background-color: ${props => props.theme.colors.black};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const StyledContainer = styled.div`
  background-color: ${props => props.theme.colors.black};
  position: relative;
  width: 100vw;
  margin-left: 17.361vw;
  display: flex;
  flex-direction: row;
`

export const StyledColumn = styled.div`
  width: 24.3055vw;
  display: flex;
  flex-direction: column;
  padding-right: 5.556vw;
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5.903vw;
  margin-bottom: 5.903vw;
`

export const StyledHorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledSubTitle = styled.p`
  ${({ theme }) => theme.textStyles.smalldesc};
`

export const StyledTitle = styled.p`
  ${({ theme }) => theme.textStyles.subtitle};
`

export const StyledParagraph = styled.p`
  ${({ theme }) => theme.textStyles.regular};
`

export const StyledDash = styled.img`
  vertical-align: middle;
  width: 8.75vw;
  margin-left: 6vw;
`

export const ImgContainer = styled.div`
  margin 0;
`

export const StyledCrosses = styled.img`
  width: 13.403vw;
`

export const StyledSmLogo = styled.img`
  position: absolute;
  left: 5%;
  top: 83%;
  width: 2.083vw;
`
