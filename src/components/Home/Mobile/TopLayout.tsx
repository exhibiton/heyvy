import React from 'react'

interface TopLayoutProps {
  email?: string
}

const TopLayout: React.SFC<TopLayoutProps> = () => <div>Test</div>

TopLayout.defaultProps = {
  email: '',
}

export default TopLayout
