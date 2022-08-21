import React from "react";
import { useMediaQuery } from "react-responsive";
import Logins from "../components/organisms/Mobile/login";
import LoginDekstop from "../components/organisms/Desktop/login"

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
