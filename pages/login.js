import React from "react";
import { useMediaQuery } from "react-responsive";
import Logins from "../components/organisms/Mobile/login";

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
        <Default> helo guyss</Default>
      </div>
    </>
  );
};

export default login;
