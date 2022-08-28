import React from "react";
import { useMediaQuery } from "react-responsive";
import Registers from "../components/organisms/Mobile/register";
import RegisterDesktop from "../components/organisms/Desktop/Register";
import Head from "next/head"

function register() {
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
      <title>Register</title>
    </Head>
      <div>
        <Mobile>
          <Registers />
        </Mobile>
        <Default><RegisterDesktop/></Default>
      </div>
    </>
  );
}
export default register;
