/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'


import SalesSection from './components/SalesSection'

const StyledHeroSection = styled(PageSection)`
  padding-top: 116px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = {
    // background: '#D7CAEC',
    border: '4px solid #ff1100',
    borderRadius: '30px',
    margin: '60',
    width: '50%',
    maxWidth: '368px',

  }

  return (
    <>
    <Hero />
    
      <PageSection
        innerProps={{ style: { margin: '10', width: '100%' } }}
        // background={
        //   theme.isDark
        //     ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
        //     : 'linear-gradient(74deg, #FFFFFF 2%, #ff1100 100%)'
        // }
        index={2}
        background="./MAD_main.svg"
        hasCurvedDivider={false}
  
        // innerProps={{ style: HomeSectionContainerStyles }}
        // // background="./MAD_main.svg"
    

        // index={11}
        // hasCurvedDivider={false}
    

      >
        <SalesSection margin-bottom="100px" {...swapSectionData} />
        <div>
          <br />
          <br />
          <br />
<div className="Iframe">

          <iframe
            src="https://widget.onramper.com?defaultCrypto=BNB&color=FF1100&apiKey=pk_prod_EMEhKOXNuUfrHnqu9Xg2w3hUVBPuurn8sHoPYvbbf4s0"
            height="611px"
            width="100%"
            title="Onramper widget"
            frameBorder="0"
            allow="accelerometer; autoplay; camera; gyroscope; payment"
          >
        
              Buy crypto
       
          </iframe>
        

        </div>
        </div>
        
      </PageSection>
      <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

    </>
  )
}

export default Home
