import React from 'react'
import Layout from '../../Layout'
import { renderMobileOnly } from 'components/resolutionRenderHOCs'
import TopLayout from './TopLayout'
import MidLayout from './MidLayout'
import BottomLayout from './BottomLayout'

class HomePageMobile extends React.PureComponent {
  public render() {
    return (
      <Layout>
        <TopLayout />
        <MidLayout />
        <BottomLayout />
      </Layout>
    )
  }
}

export default renderMobileOnly(HomePageMobile)
