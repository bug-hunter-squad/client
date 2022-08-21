import React from 'react'
import Admin from "../components/organisms/Desktop/admin"
import { useMediaQuery } from "react-responsive";

const dashboard = () => {
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
    <div>
      <Mobile>
        <Admin />
      </Mobile>
      <Default><Admin/></Default>
    </div>
  </>
    
  )
}


export default dashboard