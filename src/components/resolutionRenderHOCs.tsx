import * as React from 'react'
import useWindowSize from '@rooks/use-window-size'

type IPredicate = (shouldRender: number) => boolean

const WIDTH_THRESHOLD = 767

const renderIf = (predicate: IPredicate) => (Component: React.ComponentClass) => (props: object) => {
  const windowWidth = useWindowSize()

  if (predicate(windowWidth.innerWidth || WIDTH_THRESHOLD + 1)) return <Component {...props} />

  return null
}

export const renderMobileOnly = renderIf(currentResolution => currentResolution <= WIDTH_THRESHOLD)
export const renderDesktopOnly = renderIf(currentResolution => currentResolution > WIDTH_THRESHOLD)
