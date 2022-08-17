import React from "react";
import { useMediaQuery } from "react-responsive";
import Registers from "../components/organisms/Mobile/register";

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
      <div>
        <Mobile>
          <Registers />
        </Mobile>
        <Default> helo guyss</Default>
      </div>
    </>
  );
}
export default register;
