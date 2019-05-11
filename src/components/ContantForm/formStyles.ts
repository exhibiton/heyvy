import styled from 'styled-components'

export const StyledInput = styled.input`
  ${({ theme }) => theme.textStyles.input};
  margin-top: 24px;
  background-color: transparent;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: solid 1px rgba(255, 255, 255, 0.4);
`

export const StyledForm = styled.form`
  width: 310px;
  height: 310px;
  display: flex;
  flex-direction: column;
`

export const StyledSubmit = styled.button`
  ${({ theme }) => theme.textStyles.buttontxt};
  background-color: transparent;
  width: 140px;
  height: 40px;
  opacity: 0.4;
  border: solid 1px white;
  margin-top: 60px;
`
