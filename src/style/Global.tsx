import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'
// import MADmain from './MAD_main.svg'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme { }
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  page {
    margin-top: 200px;
    

    // background-image :url('./images/MAD_main.svg')


  }
  
body {
    margin-top: 1px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-image :url('./images/bg1.png') 
 
  
  }
  .Iframe {
    
    border: 4px solid #ff1100;
    max-width: 551px;
    width: 100%;
    border-radius: 12px;
    background: transparent;
  }
.Banner {
 height: 120px;
 width: 100%;
 

 background-image :url('./bannerbg.png') 


}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

    img {
      height: 100%;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
