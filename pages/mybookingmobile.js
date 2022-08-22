<<<<<<< HEAD:pages/mybookingmobile.js
import React from "react";
import FixedMenu from "../components/molecules/fixedmenu";
import { BsEnvelope, BsBell } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/MyBookingmobile.module.css";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import axios from "axios";

function MyBooking() {
  const { auth } = useSelector((state) => state);
  const [data, setData] = React.useState([]);
  // const [id, setId] = React.useState("");
  const [isloading, setLoading] = React.useState(false);

  React.useEffect(() => {
    handleData();
  }, []);

  React.useEffect(() => {

  });

  const handleData = (req, res) => {
    setLoading(true);
    const decodeUser = decode(auth?.token);
    const id = decodeUser.id
    setTimeout(() => {
      axios
        .get(`http://localhost:8500/profile/${id}/booking`)
        .then((response) => {
          console.log(response);
          setData(response.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }, 4000);
=======
import style from "../styles/SearchResult.module.css";
import styleDetail from "../styles/FlightDetail.module.css";
import Image from "next/image";
import { Form } from "react-bootstrap";
import NavDesktop from "../components/molecules/NavDesktop";
import { AiFillStar, AiTwotoneSetting } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import styleMyBook from "../styles/MyBooking.module.css";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import Footer from "../components/molecules/footer";
import axios from "axios";
import Link from "next/link";

function MyBooking() {
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountry(res?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false);
      });
>>>>>>> main:pages/mybooking.js
  };

  return (
    <>
<<<<<<< HEAD:pages/mybookingmobile.js
      <div className="container">
        <div className="col-lg-4 mx-auto">
          <div className="row px-1">
            <div className="col text-start">
              <h3 className="">My Booking</h3>
            </div>
            <div className="col text-end">
              <BsEnvelope className="mx-2" />
              <a href="/notification">
                <BsBell className="" />
              </a>
            </div>
          </div>
        </div>
        <section className="col-lg-4 mx-auto">
          {data?.map((item, index) => (
            <div className={style.card} key={index}>
              <div className="mx-3 mt-3">
                <div className="row"></div>
                <p className="mt-3">{item?.departureTime} {" "} - {item?.arrivalTime}</p>
                <div className="">
                  <div className="d-flex ">
                    <h3 className="p-0 ">{item?.flightOriginal}</h3>
                    <p className="p-2 mx-3">
                      <Image
                        src="/assets/img/flightlogo.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                      />
                    </p>
                    <h3 className="p-0 "> {item?.flightDestination}</h3>
                  </div>
                </div>
                <p style={{ marginTop: "-15px" }}>{item?.airlineName}, AB-221</p>
                <hr className=" " />
                <div className="d-flex justify-content-between">
                  <p>status</p>
                  <p
                    className="bg-warning p-2"
                    style={{ borderRadius: "10px" }}
                  >
                    {item?.bookingStatus}
                  </p>
=======
      <div className="rm-ov-x">
        <div className={style.bgSearchResult}>
          <NavDesktop />

          <div className="container pt-5">
            <div className="row">
              <div className="col-4">
                <div className={`${style.cardFilter} mb-3 text-center`}>
                  <div className="pt-4">
                    <div className="position-relative pt-5">
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <div className={`${styleMyBook.outlineBlue}`}>
                          <div className={`${styleMyBook.cardProfile} card`}>
                            <Image
                              className={styleMyBook.imgProfile}
                              src="/assets/img/profil.png"
                              alt="profile"
                              width="100%"
                              height="100%"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary mt-5"
                  >
                    <h6 className="py-2 px-2 mb-0">Select Photo</h6>
                  </button>
                  <h4 className="pt-4">Mike Kowalski</h4>
                  <small>Medan, Indonesia</small>
                  <div className="d-flex justify-content-between pt-4">
                    <h6>Cards</h6>
                    <h6 className={style.textBlue}>
                      <FaPlus className="pb-1" /> Add
                    </h6>
                  </div>
                  <div className={`${styleMyBook.card} card`}>
                    <h6 className="text-start px-4 text-white pt-3">
                      4441 1235 5512 5551
                    </h6>
                    <div className="d-flex justify-content-between px-4 pb-3">
                      <small className={styleMyBook.nameCard}>X Card</small>
                      <small className={styleMyBook.nameCard}>$ 1,440.2</small>
                    </div>
                  </div>

                  <Link href="/mybooking" passHref>
                    <a className="rm-decoration">
                      <div className="row pt-4">
                        <div className="col-4">
                          <BiUserCircle
                            className={`${styleMyBook.active} ${styleMyBook.icon} text-start`}
                          />
                        </div>
                        <div className="col-8">
                          <h6 className={`${styleMyBook.active} text-start`}>
                            Profile
                          </h6>
                        </div>
                      </div>
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a className="rm-decoration">
                      <div className="row pt-4">
                        <div className="col-4">
                          <AiFillStar
                            className={`${styleMyBook.icon} text-start`}
                          />
                        </div>
                        <div className="col-8">
                          <h6 className={`text-start`}>My Review</h6>
                        </div>
                      </div>
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a className="rm-decoration">
                      <div className="row pt-4">
                        <div className="col-4">
                          <AiTwotoneSetting
                            className={`${styleMyBook.icon} text-start`}
                          />
                        </div>
                        <div className="col-8">
                          <h6 className={`text-start`}>Settings</h6>
                        </div>
                      </div>
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a className="rm-decoration">
                      <div className="row pt-4">
                        <div className="col-4">
                          <FaSignOutAlt
                            className={`${styleMyBook.red} ${styleMyBook.icon} text-start`}
                          />
                        </div>
                        <div className="col-8">
                          <h6 className={`${styleMyBook.red} text-start`}>
                            Logout
                          </h6>
                        </div>
                      </div>
                    </a>
                  </Link>
>>>>>>> main:pages/mybooking.js
                </div>
              </div>

              <div className="col-8">
                <div className={`${style.cardFilter} pb-3`}>
                  <div className="card-body">
                    <h6 className={style.textBlue}>MY BOOKING</h6>
                    <div className="d-flex justify-content-between">
                      <h4>My Booking</h4>
                      <Link href="/" passHref>
                        <a className="rm-decoration">
                          <h6 className={style.textBlue}>Order History</h6>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={`${styleMyBook.cardMyBooking} card mt-4`}>
                  <div className="card-body">
                    <p>Monday, 20 July '20 - 12:33</p>
                    <div className="row">
                      <div className="col-3">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 className="mb-0">IDN</h5>
                            <small className={style.textvsm}>12:33</small>
                          </div>
                          <Image
                            src="/assets/img/flightlogo.svg"
                            alt="Logo"
                            width="20"
                            height="20"
                          />
                          <div>
                            <h5 className="mb-0">JPN</h5>
                            <small className={style.textvsm}>15:21</small>
                          </div>
                        </div>
                      </div>
                      <small className={`${styleMyBook.colorSecondary} pt-1`}>
                        Garuda Indonesia, AB-221
                      </small>
                    </div>
                  </div>
                  <div className="card-footer bg-white">
                    <div className="row">
                      <div className="col-5">
                        <div className="d-flex justify-content-between">
                          <p className={`${styleMyBook.colorSecondary} pt-2`}>
                            Status
                          </p>
                          <div className="pt-2">
                            <label
                              className={`${styleMyBook.labelWarning} px-4`}
                            >
                              <small>Waiting for payment</small>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-7 text-end">
                        <h6 className={`${style.textBlue} pt-2`}>
                          View Details <FiChevronDown />
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styleMyBook.cardMyBooking} card mt-4`}>
                  <div className="card-body">
                    <p>Monday, 20 July '20 - 12:33</p>
                    <div className="row">
                      <div className="col-3">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 className="mb-0">IDN</h5>
                            <small className={style.textvsm}>12:33</small>
                          </div>
                          <Image
                            src="/assets/img/flightlogo.svg"
                            alt="Logo"
                            width="20"
                            height="20"
                          />
                          <div>
                            <h5 className="mb-0">JPN</h5>
                            <small className={style.textvsm}>15:21</small>
                          </div>
                        </div>
                      </div>
                      <small className={`${styleMyBook.colorSecondary} pt-1`}>
                        Garuda Indonesia, AB-221
                      </small>
                    </div>
                  </div>
                  <div className="card-footer bg-white">
                    <div className="row">
                      <div className="col-5">
                        <div className="d-flex justify-content-between">
                          <p className={`${styleMyBook.colorSecondary} pt-2`}>
                            Status
                          </p>
                          <div className="pt-2">
                            <label
                              className={`${styleMyBook.labelSuccess} px-4`}
                            >
                              <small>Eticket issued</small>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-7 text-end">
                        <h6 className={`${style.textBlue} pt-2`}>
                          View Details <FiChevronDown />
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyBooking;
