import React from "react";
import Head from "next/head";
import MyBooking from "../components/organisms/Desktop/mybooking";
import MyBookingMobile from "../components/organisms/Mobile/mybookingmobile";
import { useMediaQuery } from "react-responsive";

const mybooking = () => {
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
        <title>My Booking</title>
    </Head>
      <Mobile>
        <MyBookingMobile />
      </Mobile>
      <Default>
        <MyBooking />
      </Default>
    </>
  );
};

export default mybooking;
