import React from 'react'
import Layout from '../../Layout'
import TopLayout from './TopLayout'
import MidLayout from './MidLayout'
import BottomLayout from './BottomLayout'
import { renderDesktopOnly } from 'components/resolutionRenderHOCs'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 80vw;
`

const HomePageDesktop = () => (
  <ReactFullpage
    render={() => (
      <ReactFullpage.Wrapper>
        <StyledWrapper>
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
        </StyledWrapper>
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
