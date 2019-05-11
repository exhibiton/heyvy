import styled from 'styled-components'

export const StyledInput = styled.input`
  ${({ theme }) => theme.textStyles.input};
`

export const StyledForm = styled.form`
  width: 310px;
  height: 310px;
`

export const StyledSubmit = styled.button`
  width: 140px;
  height: 40px;
  opacity: 0.4;
  border: solid 1px white;
  ${({ theme }) => theme.textStyles.buttontxt};
`
