import React from 'react'
import Layout from '../../Layout'
import TopLayout from './TopLayout'
import MidLayout from './MidLayout'
import BottomLayout from './BottomLayout'
import { renderDesktopOnly } from 'components/resolutionRenderHOCs'
import ReactFullpage from '@fullpage/react-fullpage'

const HomePageDesktop = () => (
  <ReactFullpage
    render={() => (
      <ReactFullpage.Wrapper>
        <Layout>
          <div className="section">
            <TopLayout />
          </div>
          <div className="section">
            <MidLayout />
          </div>
          <div className="section">
            <BottomLayout />
          </div>
        </Layout>
      </ReactFullpage.Wrapper>
    )}
  />
)

// class HomePageDesktop extends React.PureComponent<{}, {}> {
//   public render() {
//     return (
//       <Layout>
//         <TopLayout />
//         <MidLayout />
//         <BottomLayout />
//       </Layout>
//     )
//   }
// }

export default renderDesktopOnly(HomePageDesktop)
