import styled from 'styled-components'

export const StyledHeyvy = styled.div`
  margin-top: 100px;
`

export const StyledContainer = styled.div`
  padding-top: 1px;
  padding-left: 50px;
  background-color: ${props => props.theme.colors.copper};
`

export const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-top: 190px;
`

export const StyledTitle = styled.div`
  ${({ theme }) => theme.textStyles.mobile.subtitle};
  margin-top: 20px;
`
