import React from "react";
import { useMediaQuery } from "react-responsive";
import Logins from "../components/organisms/Mobile/login";
import LoginDekstop from "../components/organisms/Desktop/login"
import Head from "next/head"

const login = () => {
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
      <title>Login</title>
    </Head>
      <div>
        <Mobile>
          <Logins />
        </Mobile>
        <Default><LoginDekstop/></Default>
      </div>
    </>
  );
};

export default login;
