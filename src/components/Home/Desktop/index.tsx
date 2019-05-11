import React from 'react'
import Layout from '../../Layout'
import TopLayout from './TopLayout'
import MidLayout from './MidLayout'
import BottomLayout from './BottomLayout'
import { renderDesktopOnly } from 'components/resolutionRenderHOCs'

class HomePageDesktop extends React.PureComponent<{}, {}> {
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

export default renderDesktopOnly(HomePageDesktop)
