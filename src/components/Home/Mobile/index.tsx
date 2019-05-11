import React from 'react'
import Layout from '../../Layout'
import { renderMobileOnly } from 'components/resolutionRenderHOCs'
import TopLayout from './TopLayout'

class HomePageMobile extends React.PureComponent {
  public render() {
    return (
      <Layout>
        <TopLayout />
      </Layout>
    )
  }
}

export default renderMobileOnly(HomePageMobile)
