import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Logo from "../components/atom/welcomeLogo";
import styleWelcome from "../styles/Welcome.module.css";

function Error() {
  const [styleMobile, setStyleMobile] = useState(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    setStyleMobile(isTabletOrMobile);
  });

  return (
    <>
      {styleMobile ? (
        <>
          <div className="container text-center">
            <div className={styleWelcome.content}>
              <Logo />
              <h1>Error Page Not Found</h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container text-center">
            <div className={styleWelcome.content}>
              <Logo />
              <h1>Error Page Not Found</h1>
             
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Error;
