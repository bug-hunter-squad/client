import React from "react";
import AirlinesInfo from "../../atom/airline/AirlinesInfo";
import Dashboard from "../../atom/dashboardLeft";
import FlightInfo from "../../atom/flight/FlightInfo";
import FormFLight from "../../atom/flight/FormFLight";
import FormAirline from "../../atom/airline/FormAirline";
import FormCountry from "../../atom/country/FormCountry";
import CountryInfo from "../../atom/country/CountryInfo";
import Navbar from "../../atom/Navbar";
import Head from "next/head";


const admin = () => {
  return (
    <>
      <Head>
        <title>Admin Dasboard</title>
      </Head>

      <div className="container-fluid text-center ">
        <div className="row">
          <div className="col-sm-3 col-left top-0 start-0 ">
            <Dashboard />
          </div>
          <div className="col-sm-9 col-right">
            <Navbar/>
            <FlightInfo />
            <FormFLight />
            <AirlinesInfo />
            <FormAirline />
            <CountryInfo />
            <FormCountry />
          </div>
        </div>
      </div>
    </>
  );
};

export default admin;
