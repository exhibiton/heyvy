import React from 'react'
import SEO from '../components/seo'
import HomeDesktop from 'components/Home/Desktop'
import HomeMobile from 'components/Home/Mobile'

const IndexPage = () => (
  <>
    <SEO title="Heyvy" keywords={['heyvy', 'ux design', 'ui design', 'graphic design', 'illustration']} />
    <HomeDesktop />
    <HomeMobile />
  </>
)

export default IndexPage
