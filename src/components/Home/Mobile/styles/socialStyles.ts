import styled from 'styled-components'

export const StyledParent = styled.div`
  ${({ theme }) => theme.textStyles.links};
  margin-top: 30px;
  padding-bottom: 50px;
`

export const StyledLink = styled.a`
  margin-right: 40px;
`
