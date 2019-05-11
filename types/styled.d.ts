import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      browngray: string
      copper: string
      lightgray: string
      lightpeach: string
      pinkishgray: string
      white: string
    }
    size: {
      s: string
      m: string
      l: string
      xxl: string
    }
    textStyles: {
      h1: FlattenSimpleInterpolation
      h2: FlattenSimpleInterpolation
      subtitle: FlattenSimpleInterpolation
      links: FlattenSimpleInterpolation
      buttontxt: FlattenSimpleInterpolation
      input: FlattenSimpleInterpolation
      smalldesc: FlattenSimpleInterpolation
      regular: FlattenSimpleInterpolation
      mobile: {
        h1: FlattenSimpleInterpolation
        h2: FlattenSimpleInterpolation
        subtitle: FlattenSimpleInterpolation
        links: FlattenSimpleInterpolation
        buttontxt: FlattenSimpleInterpolation
        input: FlattenSimpleInterpolation
        smalldesc: FlattenSimpleInterpolation
        regular: FlattenSimpleInterpolation
      }
    }
  }
}
