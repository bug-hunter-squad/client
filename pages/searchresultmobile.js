import style from "../styles/SearchResultmobile.module.css";
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
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form, Button } from "react-bootstrap";
import { MdFlight} from "react-icons/md"
import Filter from "../components/molecules/filter";

function searchresult() {
  const { auth, query } = useSelector((state) => state);
  let value;
  if (query === null) {
    return (value = "");
  } else {
    value = query.from.from;
  }

  let valueTo;
  if (query === null) {
    return (valueTo = "");
  } else {
    valueTo = query.to.to;
  }
  let valueDepature;
  if (query === null) {
    return (valueDepature = "");
  } else {
    valueDepature = query.date.date;
  }

  let valueChild;
  if (query === null) {
    return (valueChild = "");
  } else {
    valueChild = query.child.child;
  }

  let valueAdult;
  if (query === null) {
    return (valueAdult = "");
  } else {
    valueAdult = query.adult.adult;
  }

  let valueFacilty;
  if (query === null) {
    return (valueFacilty = "");
  } else {
    valueFacilty = query.facilty.facilty;
  }

  if (valueFacilty === "Luggage")
    return setLuggage(true), setMeal(false), setWifi(false);
  if (valueFacilty === "In-flight meal")
    return setLuggage(true), setMeal(true), setWifi(false);
  if (valueFacilty === "Wifi")
    return setLuggage(false), setMeal(false), setWifi(true);

  let ValueTrip;
  if (query === null) {
    return (ValueTrip = "");
  } else {
    ValueTrip = query.way.way;
  }

  React.useEffect(() => {}, []);

  const [original, setOriginal] = React.useState(value ? value : "");
  const [destination, setDestination] = React.useState(valueTo ? valueTo : "");
  const [depatureDate, setDapatureDate] = React.useState(
    valueDepature ? valueDepature : ""
  );
  const [depatureTime, setDepatureTime] = React.useState("");
  const [arivalTime, setArivalTime] = React.useState("");
  const [childPassenger, setChildPassanger] = React.useState(
    valueChild ? valueChild : ""
  );
  const [adultPassenger, setadultPassanger] = React.useState(
    valueAdult ? valueAdult : ""
  );
  const [getFacility, setFacility] = React.useState(
    valueFacilty ? valueFacilty : ""
  );
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [airlines, setAirlines] = React.useState("");
  const [flightClass, setFlightClass] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [wifi, setWifi] = React.useState(true);
  const [meal, setMeal] = React.useState(true);
  const [luggage, setLuggage] = React.useState(false);
  const [trip, setTrip] = React.useState(ValueTrip ? ValueTrip : "");
  const [current, setCurrentDate] = React.useState();

  const fetcher = async () => {
    const response = await Axios.get(
      `https://bug-hunter-squad.herokuapp.com/flight?original=${original}&destination=${destination}&departureDate=${depatureDate}&departureTime=&arrivalTime=&childPassenger=${childPassenger}&adultPassenger=${adultPassenger}&wifi=${wifi}&meal=${meal}&luggage=${luggage}&minPrice=&maxPrice=&airlines=&flightClass=`
    );
    return response.data;
  };

  const { data } = useSWR("Search", fetcher);
  if (!data)
    return (
      <div
        className="spinner-border text-primary position-absolute top-50 start-50"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  const flight = data.flightInformation;
  const total = data.flightTotal;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <div className="col-lg-4 mx-auto col-sm">
          <div className={style.container}>
            <section>
              <div className="d-flex  justify-content-between">
                <Link href="/searchflight">
                  <a>
                    <div className="p-2 mx-3 mt-5">
                      <Image
                        src="/assets/img/btnback.svg"
                        alt="Logo"
                        height={18}
                        width={18}
                      />
                    </div>{" "}
                  </a>
                </Link>
                <div className="p-2 mx-3 justify-content-end mt-5">
                  <p className={style.text}>monday</p>
                </div>
              </div>
              <div className="d-flex mx-4 justify-content-between text-white">
                <div className="">
                  <p className="p-0">From</p>
                  <h5 className="p-0">{original}</h5>
                  <p className="p-0">Indonesia</p>
                </div>

                <div className="d-flex ">
                  <p className="p-0 d-flex align-items-center">
                    <ArrowLeftRight />
                  </p>{" "}
                </div>

                <div className=" text-end">
                  <p className="p-0">To</p>
                  <h5 className="p-0 ">{destination}</h5>
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
                  {childPassenger ? childPassenger : "0"} Child
                </h5>
              </div>
              <div className="col-4 text-start">
                <p className="mt-4">Class</p>
                <h5 className="p-0 ">
                  {getFacility ? getFacility : "Nothing"}
                </h5>
              </div>
            </div>
          </div>
          <div className="d-flex mx-4 mt-3 justify-content-between ">
            <div className="">
              <p className="p-0">{total} Total search</p>
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
            

            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                  {/* {["checkbox", "radio"].map((type) => ( */}
                  <h6>Transit</h6>
                  {["Direct", "Transit", "Transit 2+"].map((item) => (
                    <div key={`${item}`} className="mb-3">
                      <Form.Check
                        type={`checkbox`}
                        id={`${item}`}
                        label={` ${item}`}
                        value={` ${item}`}
                        onChange={(e) => setTrip(e.target.value)}
                      />
                    </div>
                  ))}
                  <h6>Facilities</h6>
                  {["Luggage", "In-flight meal", "Wifi"].map((item) => (
                    <div key={`${item}`} className="mb-3">
                      <Form.Check
                        type={`checkbox`}
                        id={`${item}`}
                        label={` ${item}`}
                        value={` ${item}`}
                        onChange={(e) => setFacility(e.target.value)}
                      />
                    </div>
                  ))}
                  <h6>Departure Time</h6>
                  {[
                    "00:00 - 06:00",

                    "06:00 - 12:00t",

                    "12:00 - 18:00",

                    "18:00 - 20:00",
                  ].map((item) => (
                    <div key={`${item}`} className="mb-3">
                      <Form.Check
                        type={`checkbox`}
                        id={`${item}`}
                        label={` ${item}`}
                        value={` ${item}`}
                        onChange={(e) => setDepatureTime(e.target.value)}
                      />
                    </div>
                  ))}
                  <h6>Time Arrived</h6>
                  {[
                    "00:00 - 06:00",

                    "06:00 - 12:00",

                    "12:00 - 18:00",

                    "18:00 - 20:00",
                  ].map((item) => (
                    <div key={`${item}`} className="mb-3">
                      <Form.Check
                        type={`checkbox`}
                        id={`${item}`}
                        label={` ${item}`}
                        value={` ${item}`}
                        onChange={(e) => setArivalTime(e.target.value)}
                      />
                    </div>
                  ))}
                  <h6>Airlines</h6>
                  {["Garuda Indonesia", "Air Asia", "Lion Air"].map((item) => (
                    <div key={`${item}`} className="mb-3">
                      <Form.Check
                        type={`checkbox`}
                        id={`${item}`}
                        label={` ${item}`}
                        value={` ${item}`}
                        onChange={(e) => setAirlines(e.target.value)}
                      />
                    </div>
                  ))}
                  <Button type="submit">Create</Button>
                </Form>
              </Offcanvas.Body>
            </Offcanvas>

            {/* asasdas */}
          </div>
          <div className={style.result}>
          {flight?.map((item) => (
            <div className="container border rounded p-2 mb-2"  key={item.flightId}>
              <div class="container  text-center rounded">
              <Link href={`/detail/${item.flightId}`} className="text-decoration-none">
                    <a className="text-decoration-none">
                <div class="row row-cols-3 ">
                  <div class="col col-image">
                    <div>
                      <img
                        src={
                          item.airlineLogo
                            ? item.airlineLogo
                            : "/assets/img/logomaskapai.png"
                        }
                        width="70px"
                        height="70px"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div class="col col-origin">
                    <div>
                      <smaall className="text-small">{item.flightTime ? item.flightTime : "2 hours"}</smaall>
                      <h3 className="text-inti"> {item.flightOriginal
                                  ? item.flightOriginal
                                  : "IDN"}</h3> <MdFlight className="icones"/>
                      <p className="text-footer"> {item.flightDeparture
                                  ? item.flightDeparture
                                  : "07:20"}</p>
                    </div>
                  </div>
                 
                  <div class="col">
                  <div>
                      <smaall className="text-small">{item.flightTime ? item.flightTime : "2 hours"}</smaall>
                      <h3 className="text-inti">{item.flightDestination}</h3>
                      <MdFlight className="icones"/>
                      <p className="text-footer">{item.flightPrice
                                  ? "Rp." + item.flightPrice
                                  : "Rp. 20000"}</p>
                    </div>
                  </div>
                </div></a>
                  </Link>
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
