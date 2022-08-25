import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import style from "../../styles/SearchFlightmobile.module.css";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import { AiFillStar, AiOutlineWifi } from "react-icons/ai";
import { FaHamburger, FaRestroom } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import Swal from "sweetalert2";

const Detail = (req, res) => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const { auth, query } = useSelector((state) => state);

  React.useEffect(() => {
    const decodeUser = decode(auth?.token);
    setUser(decodeUser?.id);
  }, [auth]);

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

  const valueFacilty = query.facilty.facility;
  const valueClass = valueFacilty.toString();

  const [date, setDate] = React.useState();
  const [original, setOriginal] = React.useState(value ? value : "");
  const [destination, setDestination] = React.useState(valueTo ? valueTo : "");
  const [childPassenger, setChildPassanger] = React.useState(
    valueChild ? valueChild : ""
  );
  const [adultPassenger, setadultPassanger] = React.useState(
    valueAdult ? valueAdult : ""
  );
  const [getFacility, setFacility] = React.useState(
    valueFacilty ? valueFacilty : ""
  );

  const [wifi, setWifi] = React.useState(true);
  const [meal, setMeal] = React.useState(true);
  const [luggage, setLuggage] = React.useState(false);
  const [userId, setUser] = React.useState();
  const [Prices, setPrices] = React.useState();

  const fetcher = async () => {
    const response = await Axios.get(
      `https://bug-hunter-squad.herokuapp.com/flight/${id}`
    );
    return response?.data?.DetailFlightInformation;
  };
  const { data } = useSWR("getIdflight", fetcher);
  if (!data)
    return (
      <div
        className="spinner-border text-primary position-absolute top-50 start-50"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  const result = data;
  console.log(result);

  const handleBooking = async (req, res) => {
    await Axios.post(
      `https://bug-hunter-squad.herokuapp.com/flight/${id}/booking/profile/${userId}`,
      {
        totalChildPassenger: childPassenger,
        totalAdultPassenger: adultPassenger,
        flightClass: getFacility,
        totalPrice: 2000000,
      }
    )
      .then((res) => {
        Swal.fire({
          title: "Booking Successful",
          width: 389,
          text: `Cek Your booking in mybooking`,
          icon: "success",
        });

        router.push("/mybookingmobile");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  //       let days = [
  //           "Sunday",
  //           "Monday",
  //           "Tuesday",
  //           "Wednesday",
  //           "Thursday",
  //           "Friday",
  //           "Saturday",
  //         ];
  //     let d = new Date();
  //     let dayName = days[d.getDay()];
  //     const DateNow = dayName + " " + d.getDate() + "/" + d.getMonth() + " " + d.getFullYear;
  //     setDate(DateNow);

  return (
    <>
      <Container>
        <div className="col-lg-4 mx-auto col-sm">
          <div className={style.container}>
            <section>
              <div className="d-flex  justify-content-between">
                <div className="p-2 mx-3 mt-5">
                  <a
                    href="/searchresultmobile"
                    className="col-sm-8 fw-semibold text-white"
                  >
                    <IoChevronBack className="fs-3" />
                  </a>
                </div>
                {/* <div className="p-2 mx-3 justify-content-end mt-5">
                  <p className={style.text}>monday happy</p>
                </div> */}
              </div>
            </section>
          </div>
          {result.map((item) => (
            <>
              <div className={style.result} key={item.flight_id}>
                <div
                  className=" card col-11 mx-auto"
                  style={{
                    borderRadius: "15px",
                    padding: "10px",
                    marginBottom: "10px",
                    cursor: "pointer",
                    marginTop: "-120px",
                    boxShadow:"0px 8px 27px rgba(14, 63, 108, 0.19"
                  }}
                >
                  <div className="row ">
                    <div className="">
                      <div>
                        <section>
                          <div className="d-flex mx-4 mt-4 justify-content-between ">
                            <div className="">
                              <h3 className="p-0">{item.original}</h3>
                              <p className={`${style.font}`} >
                                {
                                  item.departure_time
                                    .split("T")[1]
                                    .split(".")[0]
                                }
                              </p>
                              <p className={`${style.font} ${style.margin}`} >
                                {item.departure_time.split("T")[0]}
                              </p>
                            </div>
                            <div className=" ">
                              <p className="p-2 mt-2">
                                <Image
                                  src="/assets/img/flightlogo.svg"
                                  alt="Logo"
                                  width="30"
                                  height="30"
                                  style={{ marginLeft: "-15px" }}
                                />
                              </p>
                            </div>
                            <div className=" text-end">
                              <h4 className="p-0 ">{item.destination}</h4>
                              <p className={`${style.font}`} >
                                {item.arrival_time.split("T")[1].split(".")[0]}
                              </p>
                              <p className={`${style.font} ${style.margin}`} >
                                {item.arrival_time.split("T")[0]}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex mx-4 justify-content-between ">
                            <div className="">
                              <Image
                                src="/assets/img/logomaskapai.png"
                                width="80px"
                                height="50px"
                                alt="image"
                              />{" "}
                            </div>
                            <div className=" text-end">
                              <div>
                                <AiFillStar className="text-warning" />
                                <AiFillStar className="text-warning" />
                                <AiFillStar className="text-warning" />
                                <AiFillStar className="text-warning" />
                                <AiFillStar className="text-warning" />
                              </div>
                              <p>120k review</p>
                            </div>
                          </div>
                          <div className="d-flex mx-4  mt-3 justify-content-between ">
                            <div className={`${style.font}`}>
                              <p>Code</p>
                              <h6>{item.flight_id}</h6>
                            </div>
                            <div className={`${style.font}`}>
                              <p>Class</p>
                              <h6>{getFacility}</h6>
                            </div>
                            <div className={`${style.font}`}>
                              <p>Terminal</p>
                              <h6>{item.terminal}</h6>
                            </div>
                            <div className={`${style.font}`}>
                              <p>Gate</p>
                              <h6>{item.gate}</h6>
                            </div>
                          </div>
                          <hr className="mx-3" />
                          <div className="d-flex mx-4  justify-content-between ">
                            <div
                              className=""
                              style={{
                                color: "blue",
                                backgroundColor: "#2395FF",
                                width: "25px",
                                height: "25px",
                                justifyItems: "center",
                                borderRadius: "50%",
                                opacity: "0.8",
                              }}
                            >
                              <p className={"text-center"}>{childPassenger}</p>
                            </div>
                            <p>Child</p>
                            <div
                              className=""
                              style={{
                                color: "blue",
                                backgroundColor: "#2395FF",
                                width: "25px",
                                height: "25px",
                                justifyItems: "center",
                                borderRadius: "50%",
                                opacity: "0.8",
                              }}
                            >
                              <p className={"text-center"}>{adultPassenger} </p>
                            </div>
                            <p> Adults</p>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="mx-4 mt-3">Facilities</h4>
                <div
                  style={{
                    display: "flex",
                    overflowX: "auto",
                  }}
                >
                  <div
                    className={
                      meal
                        ? "d-flex card text-bg-success ms-4 col-4 "
                        : "d-flex card text-bg-success ms-4 col-4 d-none"
                    }
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-text d-flex justify-content-around ">
                        <FaHamburger className="mt-1" />
                        <h4>Snack</h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      wifi
                        ? "d-flex card text-bg-primary mx-2 col-4 "
                        : "d-flex card text-bg-primary mx-2 col-4 d-none"
                    }
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-text d-flex justify-content-around ">
                        <div>
                          <AiOutlineWifi className="" />
                        </div>
                        <h4>Wifi</h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      luggage
                        ? "d-flex card text-bg-warning  col-4 "
                        : "d-flex card text-bg-warning  col-4 d-none"
                    }
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-text d-flex text-bg-danger mt-2 justify-content-around ">
                        <div className="d-flex">
                          <FaRestroom />
                        </div>
                        <h6>Restroom</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-text mx-4 mt-3 d-flex justify-content-between ">
                  <p>Total you'll pay</p>
                  <h5 className={style.fontprice}>
                    Rp{item.price * 1.25 * (childPassenger + adultPassenger)}
                  </h5>
                </div>
                <div className="mx-4 mb-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg w-100"
                    onClick={handleBooking}
                  >
                    Book Flight
                  </button>
                </div>
              </div>{" "}
            </>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Detail;
