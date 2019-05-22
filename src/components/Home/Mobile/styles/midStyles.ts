import styled from 'styled-components'

export const StyledHeyvy = styled.div`
  margin-top: 140px;
`

export const StyledContainer = styled.div`
  padding-top: 1px;
  padding-left: 50px;
  background-color: black;
`

export const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
`

export const StyledSubTitle = styled.div`
  ${({ theme }) => theme.textStyles.mobile.smalldesc};
  margin-top: 40px;
`

export const StyledTitle = styled.div`
  ${({ theme }) => theme.textStyles.mobile.subtitle};
  margin-top: 20px;
`

export const StyledP = styled.div`
  ${({ theme }) => theme.textStyles.mobile.regular};
  margin-top: 20px;
`

export const Spacing = styled.div`
  margin-top: 40px;
`
