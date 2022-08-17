import React from "react";
import Forgots from "../components/organisms/Mobile/forgot";
import { useMediaQuery } from "react-responsive";

const forgot = () => {
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
          <Forgots />
        </Mobile>
        <Default>Desktop</Default>
      </div>
    </>
  );
};

export default forgot;
