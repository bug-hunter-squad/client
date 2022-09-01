import style from "../../../styles/SearchResultmobile.module.css";
import styleDetail from "../../../styles/FlightDetail.module.css";
import Image from "next/image";
import { Form } from "react-bootstrap";
import NavDesktop from "../../molecules/NavDesktop";
import { AiFillStar, AiTwotoneSetting } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import styleMyBook from "../../../styles/MyBookingmobile.module.css";
import React, { useState, useEffect } from "react";
import Footer from "../../molecules/footer";
import axios from "axios";
import Link from "next/link";

function MyBooking() {

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
  };

  return (
    <>
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
