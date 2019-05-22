import { DefaultTheme, css } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    browngray: '#979797',
    copper: '#c6472a',
    lightgray: '#c8c8c8',
    lightpeach: '#fcd7cb',
    pinkishgray: '#cebba2',
    white: '#ffffff',
  },
  size: {
    s: '12px',
    m: '16px',
    l: '2px',
    xxl: '36px',
  },
  textStyles: {
    h2: css`
      font-family: Inter;
      font-size: 16px;
      line-height: 18px;
      color: #ffffff;
    `,
    regular: css`
      font-family: Inter;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
    `,
    subtitle: css`
      font-family: Inter;
      font-size: 24px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: -0.3px;
      color: #ffffff;
    `,
    smalldesc: css`
      font-family: Inter;
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      color: #cebba2;
    `,
    h1: css`
      font-family: Inter;
      font-size: 36px;
      font-weight: bold;
      line-height: 41px;
      letter-spacing: -0.5px;
      color: #ffffff;
    `,
    links: css`
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      color: #ffffff;
      opacity: 0.8;
    `,
    input: css`
      font-family: Inter;
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 6px;
      color: #ffffff;
      opacity: 0.6;
    `,
    buttontxt: css`
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      color: #ffffff;
    `,
    mobile: {
      h2: css`
        font-family: Inter;
        font-size: 16px;
        line-height: 18px;
        color: #ffffff;
      `,
      regular: css`
        font-family: Inter;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
      `,
      subtitle: css`
        font-family: Inter;
        font-size: 24px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: -0.3px;
        color: #ffffff;
      `,
      smalldesc: css`
        font-family: Inter;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        color: #cebba2;
      `,
      h1: css`
        font-family: Inter;
        font-size: 36px;
        font-weight: bold;
        line-height: 41px;
        letter-spacing: -0.5px;
        color: #ffffff;
      `,
      links: css`
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        color: #ffffff;
      `,
      input: css`
        font-family: Inter;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
      `,
      buttontxt: css`
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        color: #ffffff;
      `,
    },
  },
}
