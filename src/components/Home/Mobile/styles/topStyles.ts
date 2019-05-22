import styled from 'styled-components'

export const StyledSubP = styled.p`
  ${({ theme }) => theme.textStyles.mobile.h2};
`

export const StyledP = styled.p`
  margin: 0;
  ${({ theme }) => theme.textStyles.mobile.subtitle};
`

export const StyledArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 240px;
`

export const StyledImgDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`

export const StyledContainer = styled.div`
  margin-left: 50px;
`

export const StyledCircle = styled.div`
  margin-top: 30px;
`

export const StyledHeyvy = styled.div`
  margin-top: 140px;
`
