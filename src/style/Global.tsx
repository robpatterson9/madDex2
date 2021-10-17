import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'
// import MADmain from './MAD_main.svg'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  page {
    // background-image :url('./images/MAD_main.svg')


  }
  
body {
    background-image :url('./images/MAD_main.svg') 
  



 

  }


  .Iframe {
    // padding: 16px;
    
    border: 4px solid #ff1100;
    max-width: 551px;

    width: 100%;



    border-radius: 12px;
    background: transparent;

  }

// #Flex {
//      border: 2px solid;
//    }

    img {
      height: 100%;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
