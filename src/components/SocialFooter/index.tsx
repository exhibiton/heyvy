import React from 'react'
import { StyledLink, StyledParent } from './socialStyles'

const SocialFooter: React.SFC<{}> = () => (
  <StyledParent>
    <StyledLink href="https://www.linkedin.com/in/cyrill-clyunev-0b4aa816/">LinkedIn</StyledLink>
    <StyledLink href="https://dribbble.com/heyvy">Dribbble</StyledLink>
    <StyledLink href="http://www.instagram.com/heyvy.co">Instagram</StyledLink>
  </StyledParent>
)

export default SocialFooter
