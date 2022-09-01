import style from "../../../styles/SearchResultmobile.module.css";
import { ChevronLeft } from "react-bootstrap-icons";
import { ArrowLeftRight } from "react-bootstrap-icons";
import { ArrowDownUp } from "react-bootstrap-icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Axios from "axios";
import useSWR from "swr";
import { Container } from "react-bootstrap";
import FilterModal from "../../molecules/Filtermodal";
import { SET_FILTER } from "../../../redux/filter/type";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter} from "next/router";

function searchresult() {
  const router = useRouter()
  const dispatch = useDispatch();
  const { filter, query } = useSelector((state) => state);
  let value;
  if (query === null) {
    return (value = "");
  } else {
    value = query?.from?.from;
  }

  let valueTo;
  if (query === null) {
    return (valueTo = "");
  } else {
    valueTo = query?.to?.to;
  }
  let valueDepature;
  if (query === null) {
    return (valueDepature = "");
  } else {
    valueDepature = query?.date?.date;
  }

  let valueChild;
  if (query === null) {
    return (valueChild = "");
  } else {
    valueChild = query?.child?.child;
  }

  let valueAdult;
  if (query === null) {
    return (valueAdult = "");
  } else {
    valueAdult = query?.adult?.adult;
  }

  let valueFacilty;
  if (query === null) {
    return (valueFacilty = "");
  } else {
    valueFacilty = query?.facilty?.facility;
  }

  let valueWifi;
  if (query === null) {
    return (valueWifi = "");
  } else {
    valueWifi = filter?.wifi?.wifi;
  }
  let valueMeal;
  if (query === null) {
    return (valueMeal = "");
  } else {
    valueMeal = filter?.meal?.meal;
  }
  let valueLuggage;
  if (query === null) {
    return (valueLuggage = "");
  } else {
    valueLuggage = filter?.luggage?.luggage;
  }

  let ValueTrip;
  if (query === null) {
    return (ValueTrip = "");
  } else {
    ValueTrip = query?.way?.way;
  }

  React.useEffect(() => {
    handleFrom();
    handleDestination();
  }, []);

  const handleFrom = async () => {
    if (value) {
      const response = await Axios.get(
        `http://localhost:8500/country/${value}`
      );
      setOriginal(response?.data?.city);
      setCountryOriginal(response?.data?.country);
    } else {
      data = null;
    }
  };
  const handleDestination = async () => {
    if (valueTo) {
      const response = await Axios.get(
        `http://localhost:8500/country/${valueTo}`
      );
      setDestination(response?.data?.city);
      setCountryDestination(response?.data?.country);
    } else {
      data = null;
    }
  };

  const [original, setOriginal] = React.useState("");
  const [countryOriginal, setCountryOriginal] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [countryDestination, setCountryDestination] = React.useState("");

  const fetcher = async () => {
    const response = await Axios.get(
      `http://localhost:8500/flight?originalId=${value}&destinationId=${valueTo}&departureDate=${valueDepature}&departureTime=&arrivalTime=&childPassenger=${valueChild}&adultPassenger=${valueAdult}&wifi=${valueWifi}&meal=${valueMeal}&luggage=${valueLuggage}&minPrice=&maxPrice=&airlines=`
    );
    return response.data;
  };
  const { data } = useSWR("Search", fetcher);
  const flight = data?.flightInformation;
  const total = data?.flightTotal;
 

  const handleShow = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_FILTER,
      payload: {
        filter: true,
      },
    });
  };

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateNow = new Date();
  const date = `${weekday[dateNow.getDay()]}, ${
    dateNow.getMonth() + 1
  }, ${dateNow.getFullYear()}`;


  const handleGoSearch =(e)=>{
    e.preventDefault();
    router.push("/searchflight")
  }
  return (
    <>
      <Container>
        <div className="col-lg-4 mx-auto col-sm">
          <div className={style.container}>
            <section>
              <div className="d-flex  justify-content-between">
                <Link href="/searchflight">
                  <ChevronLeft className="mx-4 mt-5 text-white fs-5" />
                </Link>
                <div className=" mx-3 justify-content-end mt-5">
                  <p className={style.text}>{date}</p>
                </div>
              </div>
              <div className="d-flex mx-4 justify-content-between text-white">
                <div className="">
                  <p className="p-0">From</p>
                  <h5 className="p-0">{original}</h5>
                  <p className="p-0">{countryOriginal}</p>
                </div>

                <div className="d-flex ">
                  <p className="p-0 d-flex align-items-center">
                    <ArrowLeftRight className="" />
                  </p>
                </div>

                <div className=" text-end">
                  <p className="p-0">To</p>
                  <h5 className="p-0 ">{destination}</h5>
                  <p className="p-0  text-end">{countryDestination}</p>
                </div>
              </div>
            </section>
          </div>
          <div className={style.container2}>
            <div className="COL-12 mx-4 d-flex ">
              <div className="col-8">
                <p className="mt-4">Passanger</p>
              </div>
              <div className="col-4 text-start">
                <p className="mt-4">Class</p>
              </div>
            </div>
            <div className="COL-12 mx-4 d-flex " style={{ marginTop: "-10px" }}>
              <div className="col-8  d-flex">
                <h6 className="p-0 d-flex">
                  {valueChild ? valueChild : "0"} Child
                </h6>
                <h6 className="p-0  mx-2">
                  {valueAdult ? valueAdult : "0"} Adult
                </h6>
              </div>
              <div className="col-4 text-start">
                <h6 className="p-0 ">
                  {valueFacilty ? valueFacilty : "Nothing"}
                </h6>
              </div>
            </div>
          </div>
          <div className="d-flex mx-4 mt-2 justify-content-between ">
            <div className="">
              <p className="p-0">{total ? total : "0"} Total search</p>
            </div>
            <div
              className="d-flex text-end"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              <p className=" mx-1 ">Filter</p>
              <div>
                <ArrowDownUp />
              </div>
            </div>
            <FilterModal />
          </div>
          <div>
            {flight ? (
              flight.map((item) => (
                <div
                  className={style.result}
                  // className="container border rounded p-2 mb-2"
                  key={item.flightId}
                >
                  <div className="container text-center rounded">
                    <Link
                      href={`/detail/${item.flightId}`}
                      className="text-decoration-none"
                    >
                      <a className="text-decoration-none">
                        <div className="row ">
                          <div
                            className={`${style.searchimage} col-3 col-image`}
                          >
                            <div className={style.searchimage}>
                              <img
                                src={
                                  item.airlineLogo
                                    ? item.airlineLogo
                                    : "/assets/img/logomaskapai.png"
                                }
                                width="70px"
                                height="50px"
                                alt="image"
                                style={{
                                  // objectFit: "cover",
                                  backgroundSize: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-9 ">
                            <div className="row mt-3">
                              <div className="col-5">
                                <div className="text-start">
                                  <h5 className="p-0">
                                    {item.flightOriginalCountry
                                      ? item.flightOriginalCountry
                                      : "IDN"}
                                  </h5>
                                  <p className={style.font}>
                                    {item.flightDeparture.split(" ")[1]}
                                  </p>
                                </div>
                              </div>
                              <div className="col-2">
                                <div className="row d-flex justify-content-center">
                                  <Image
                                    className=""
                                    src="/assets/img/flightlogo.svg"
                                    alt="Logo"
                                    width="25"
                                    height="40px"
                                    style={{}}
                                  />
                                </div>
                              </div>
                              <div className="col-5 ">
                                <div
                                  className=" text-end"
                                  style={{
                                    overflowX: "auto",
                                  }}
                                >
                                  <h5 className="p-0 ">
                                    {item.flightDestinationCountry}
                                  </h5>
                                  <p className={style.font}>
                                    {item.flightArrival.split(" ")[1]}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="row "
                              style={{ marginTop: "-10px" }}
                            >
                              <div className="col-12 d-flex justify-content-between ">
                                <p className={style.fontsize}>
                                  {item.flightTime
                                    ? item.flightTime
                                    : "2 hours"}
                                </p>

                                <p className={style.fontprice}>
                                  {item.flightPrice
                                    ? "IDR" + item.flightPrice
                                    : "IDR 0"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className=" p-5">
                  <div className="row row-cols-1 d-flex flex-rows justify-content-center align-content-center">
                    <div className="col d-content">
                      <Image
                        src="/avaible.jpg"
                        alt="available"
                        width={200}
                        height={150}
                      />
                    </div>
                    <div className="col d-content">
                      <h4>No flights available</h4>
                    </div>
                    <p className="text-center">
                      Please recheck the link or choose other great flights on
                      Ankasa
                    </p>
                    <div className="col d-content">
                      <button type="button" className="btn btn-primary" onClick={handleGoSearch}>
                        Change Search
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default searchresult;
