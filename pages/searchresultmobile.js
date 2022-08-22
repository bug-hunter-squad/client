
import style from "../styles/SearchResult.module.css";
import Image from "next/image";
import { ArrowLeftRight } from "react-bootstrap-icons";
import { ArrowDownUp } from "react-bootstrap-icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Axios from "axios";
import useSWR from "swr";
import { Container } from "react-bootstrap";

function searchresult() {
  const { auth, query } = useSelector((state) => state);

  const [flight, setFlight] = React.useState([]);
  const [loadFlight, setLoadFlight] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [original, setOriginal] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [depatureDate, setDapatureDate] = React.useState("");
  const [depatureTime, setDepatureTime] = React.useState("");
  const [arivalTime, setArivalTime] = React.useState("");
  const [childPassenger, setChildPassanger] = React.useState("");
  const [adultPassanger, setadultPassanger] = React.useState("");
  const [wifi, setWifi] = React.useState("");
  const [meal, setMeal] = React.useState("");
  const [luggage, setLuggage] = React.useState("");
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [airlines, setAirlines] = React.useState("");
  const [flightClass, setFlightClass] = React.useState("");

  const fetcher = async () => {
    const response = await Axios.get(
      `http://localhost:8500/flight?original=${original}&destination=${destination}&departureDate=${depatureDate}&departureTime=${depatureTime}&arrivalTime=${arivalTime}&childPassenger=${childPassenger}&adultPassenger=${adultPassanger}&wifi=${wifi}&meal=${meal}&luggage=${luggage}&minPrice=${minPrice}&maxPrice=${maxPrice}&airlines=${airlines}&flightClass=${flightClass}&}`
    );
    return response.data.flightInformation;
  };

  const { data } = useSWR("Search", fetcher);
  console.log(data)
  if (!data)
    return (
      <div
        className="spinner-border text-primary position-absolute top-50 start-50"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );


  return (
    <>
      <Container>
        <div className="col-lg-4 mx-auto col-sm">
          <div className={style.container}>
            <section>
              <div className="d-flex  justify-content-between">
                <div className="p-2 mx-3 mt-5">
                  <Image
                    src="/assets/img/btnback.svg"
                    alt="Logo"
                    height={18}
                    width={18}
                  />
                </div>
                <div className="p-2 mx-3 justify-content-end mt-5">
                  <p className={style.text}>{"16 day"}</p>
                </div>
              </div>
              <div className="d-flex mx-4 justify-content-between text-white">
                <div className="">
                  <p className="p-0">From</p>
                  <h5 className="p-0">{"bandung"}</h5>
                  <p className="p-0">Indonesia</p>
                </div>
                <div className="d-flex ">
                  <p className="p-0 d-flex align-items-center">
                    <ArrowLeftRight />
                  </p>
                </div>
                <div className=" text-end">
                  <p className="p-0">To</p>
                  <h5 className="p-0 ">{"Balikpapan"}</h5>
                  <p className="p-0  text-end">Indonesia</p>
                </div>
              </div>
            </section>
          </div>
          <div className={style.container2}>
            <div className="COL-12 mx-4 d-flex ">
              <div className="col-8">
                <p className="mt-4">Passanger</p>
                <h5 className="p-0">
                  {""} Child {"1"} Adults
                </h5>
              </div>
              <div className="col-4 text-start">
                <p className="mt-4">Class</p>
                <h5 className="p-0 ">Economy</h5>
              </div>
            </div>
          </div>
          <div className="d-flex mx-4 mt-3 justify-content-between ">
            <div className="">
              <p className="p-0">5 Flight Found</p>
            </div>
            <div className="d-flex text-end" style={{cursor:"pointer"}} onClick={() => setModalOpen(true)}>
              <p className=" mx-1 ">Filter</p>
              <div>
                <ArrowDownUp />
              </div>
            </div>
            {/* <div
              className="d-flex text-end"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFilter(true);
              }}
            >
              <p className=" mx-1 ">Filter</p>
              <div>
                <ArrowDownUp />
              </div>
            </div> */}
          </div>
          {filter && <Filter setFilter={setFilter} />}
          <div className={style.result}>
            {data?.map((item) => (
              <div
                className="card col-11 mx-auto"
                style={{
                  borderRadius: "15px",
                  padding: "10px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
                key={item.flightId}
              >
                <div className="row ">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <img
                      src={item.airlineLogo? item.airlineLogo : "/assets/img/logomaskapai.png"}
                      width="70px"
                      height="70px"
                      alt="image"
                    />
                  </div>
                  <div className="col-9">
                    <div>
                      <section>
                        <div className="d-flex mx-4 justify-content-between ">
                          <div className="">
                            <h4 className="p-0">{item.flightOriginal? item.flightOriginal : "IDN"}</h4>
                            <p className="p-0">{item.flightDeparture? item.flightDeparture : "07:20"}</p>
                          </div>
                          <div className=" ">
                            <p className="p-2">
                              <Image
                                src="/assets/img/flightlogo.svg"
                                alt="Logo"
                                width="25"
                                height="25"
                                style={{ marginLeft: "-15px" }}
                              />
                            </p>
                          </div>
                          <div className=" text-end">
                            <h4 className="p-0 ">{item.flightDestination?  item.flightDestination : "IDN"}</h4>
                            <p className="p-0  text-end">{item.flightArrival? item.flightArrival : "07:20"}</p>
                          </div>
                        </div>
                        <div className="d-flex mx-4 justify-content-between ">
                          <div className="">
                            <p className={style.fontsixe}>{item.flightTime? item.flightTime : "2 hours"}</p>
                          </div>
                          <div className=" text-end">
                            <h6 className="p-0  text-end text-primary">
                              {item.flightPrice? "Rp." + item.flightPrice : "Rp. 20000"}
                            </h6>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default searchresult;
