import style from "../styles/SearchResultmobile.module.css";
import styleDetail from "../styles/FlightDetail.module.css";
import Image from "next/image";
import { Form } from "react-bootstrap";
import NavDesktop from "../components/molecules/NavDesktop";
import { AiFillWarning } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import FlagBlue from "../components/molecules/FlagBlue";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import Footer from "../components/molecules/footer";
import axios from "axios";

function SearchResult() {
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
  };

  return (
    <>
      <div className="rm-ov-x">
        <div className={style.bgSearchResult}>
          <NavDesktop />
          <FlagBlue />

          <div className={`${styleDetail.content} container`}>
            <div className="row">
              <div className="col-8">
                <div className={style.cardFilter}>
                  <div className="card-body">
                    <div className="mb-5">
                      <label
                        for="full-name"
                        className={`${styleDetail.titleForm} form-label`}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className={`${styleDetail.form} form-control`}
                        id="full-name"
                        required
                        placeholder="Mike Kowalski"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        for="email"
                        className={`${styleDetail.titleForm} form-label`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className={`${styleDetail.form} form-control`}
                        id="email"
                        required
                        placeholder="flightbooking@ankasa.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="formFile"
                        className={`${styleDetail.titleForm} form-label`}
                      >
                        Phone Number
                      </label>
                      <div className={styleDetail.phone}>
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={phone}
                          onChange={setPhone}
                        />
                      </div>
                    </div>
                    <div className={styleDetail.warning}>
                      <AiFillWarning className={styleDetail.iconWarning} />
                      Make sure the customer data is correct.
                    </div>
                  </div>
                </div>
                <h4 className="pt-5 pb-3">Passenger Details</h4>

                <div className={style.cardFilter}>
                  <div className="card-body">
                    <div className={styleDetail.blue}>
                      <div className="d-flex justify-content-between pt-3 px-4">
                        <p>Passenger: 1 Adult</p>
                        <div className="row">
                          <div className="col-10">
                            <p>Same as contact person</p>
                          </div>
                          <div className="col-2">
                            <Form.Check type="switch" id="custom-switch" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-5 mt-4">
                      <label
                        for="title"
                        className={`${styleDetail.titleForm} form-label`}
                      >
                        Title
                      </label>
                      <select
                        className={`${styleDetail.form} form-select`}
                        aria-label="Default select example"
                      >
                        <option selected value="1">
                          Mr.
                        </option>
                        <option value="2">Mrs.</option>
                        <option value="3">Dr.</option>
                        <option value="4">Drs.</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <label
                        for="full-name"
                        className={`${styleDetail.titleForm} form-label`}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className={`${styleDetail.form} form-control`}
                        id="full-name"
                        required
                        placeholder="Mike Kowalski"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="formFile"
                        className={`${styleDetail.titleForm} form-label`}
                      >
                        Nationallity
                      </label>
                      <select
                        className={`${styleDetail.form} form-select`}
                        aria-label="Default select example"
                      >
                        <option selected>-Select-</option>
                        {country.map((item) => (
                          <option value={item?.flag}>{item.name.common}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <h4 className="pt-5 pb-3">Passenger Details</h4>

                <div className={`${styleDetail.cardInsurance} card`}>
                  <div
                    className={`${styleDetail.br} card-header bg-white py-3`}
                  >
                    <div className="d-flex justify-content-between">
                      <h6>
                        <span className="pe-3">
                          <input
                            className="form-check-input mt-1"
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                        </span>
                        Travel Insurance
                      </h6>

                      <div>
                        <span className="d-flex">
                          <h6 className={`${styleDetail.textBlue}`}>$ 2,00</h6>{" "}
                          <small>/Pax</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>Get travel compensation up to $ 10.000,00</p>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <button className={`${style.btnSelect} btn`}>
                    Proceed to Payment
                  </button>
                </div>
              </div>

              <div className="col-4">
                <div className={`${style.cardFilter} mb-3`}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <Image
                          src="/assets/img/garuda.png"
                          alt="Logo"
                          width="120"
                          height="70"
                        />
                      </div>
                      <div className="col">
                        <p>Garuda Indonesia</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between py-3">
                      <div>
                        <h5 className="mb-0">Medan (IDN)</h5>
                      </div>
                      <Image
                        src="/assets/img/flightlogo.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                      />
                      <div>
                        <h5 className="mb-0">Tokyo (JPN)</h5>
                      </div>
                    </div>
                    <small>Sunday, 15 August 2020 • 12:33 - 15:21</small>
                    <h6 className={`${style.textBlue} pt-4 pb-0 mb-0`}>
                      <AiOutlineCheckCircle /> Refundable
                    </h6>
                    <h6 className={`${style.textBlue} pt-4 pb-0 mb-0`}>
                      <AiOutlineCheckCircle /> Can reschedule
                    </h6>
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

export default SearchResult;
