import React from 'react'
import { StyledLink, StyledParent } from './styles/socialStyles'

const SocialFooter: React.SFC<{}> = () => (
  <StyledParent>
    <StyledLink href="https://linkedin.com">LinkedIn</StyledLink>
    <StyledLink href="https://dribbble.com">Dribbble</StyledLink>
    <StyledLink href="https://instagram.com">Instagram</StyledLink>
  </StyledParent>
)

export default SocialFooter
