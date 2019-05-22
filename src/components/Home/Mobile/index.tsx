import React from 'react'
import Layout from '../../Layout'
import { renderMobileOnly } from 'components/resolutionRenderHOCs'
import TopLayout from './TopLayout'
import MidLayout from './MidLayout'

class HomePageMobile extends React.PureComponent {
  public render() {
    return (
      <Layout>
        <TopLayout />
        <MidLayout />
      </Layout>
    )
  }
}

export default renderMobileOnly(HomePageMobile)
