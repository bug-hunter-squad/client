import React from 'react'
// import SearchResultDesktop from '../components/organisms/Desktop/searchresultdesktop'
import SearchResultMobile from '../components/organisms/Mobile/searchresultmobile'
import Head from "next/head"
import { useMediaQuery } from "react-responsive";


const result = () => {
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 400 });
        return isMobile ? children : null;
      };
      const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 401 });
        return isNotMobile ? children : null;
      };
  return (
    <>
    <Head>
        <title>Search Results</title>
    </Head>
    <div>
      <Mobile>
      <SearchResultMobile />
      </Mobile>
      <Default><SearchResultMobile /></Default>
    </div>
  </>
  )
}

export default result;