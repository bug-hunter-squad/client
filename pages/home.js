import { useMediaQuery } from "react-responsive";
import Mobile from "../components/organisms/Mobile/home"
import Desktop from "../components/organisms/Desktop/home";
import { useEffect, useState } from 'react';

function Home() {
  const [styleDesktop, setStyleDesktop] = useState(null)
  const [styleMobile, setStyleMobile] = useState(null)

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1300px)" });

  useEffect(() => {
    setStyleDesktop(isDesktopOrLaptop)
    setStyleMobile(isTabletOrMobile)
  })

  return (
    <>
      {styleDesktop ? <Desktop /> : null}
      {styleMobile ? <Mobile /> : null}
    </>
  );
}

export default Home;
