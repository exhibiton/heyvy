import styled from 'styled-components'

export const StyledParent = styled.div`
  background-color: ${props => props.theme.colors.copper};
  height: 100vh;
  width: 100vw;
`

export const StyledContainer = styled.div`
  background-color: ${props => props.theme.colors.copper};
  height: 100vh;
  width: 100vw;
  padding-left: 17.361vw;
  padding-top: 20.139vw;
`

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5.556vw;
`

export const StyledContent = styled.div`
  width: 48.611vw;
  display: flex;
  flex-direction: row;
`

export const StyledTitle = styled.p`
  ${({ theme }) => theme.textStyles.subtitle};
  margin-bottom: 1.389vw;
`
