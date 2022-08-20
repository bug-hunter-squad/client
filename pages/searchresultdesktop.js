import style from "../styles/SearchResult.module.css";
import Image from "next/image";
import { ArrowDownUp } from "react-bootstrap-icons";
import NavDesktop from "../components/molecules/NavDesktop";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { FaHamburger, FaWifi } from "react-icons/fa";
import { RiSuitcase3Fill } from "react-icons/ri";
import Flight from "../components/molecules/Flight";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Footer from "../components/molecules/footer";

function SearchResult() {
  const [openTransit, setOpenTransit] = useState(true);
  const [upDownTransit, setUpDownTransit] = useState(true);

  // State transit
  const [direct, setDirect] = useState(true);
  const [transit, setTransit] = useState(true);
  const [transit2, setTransit2] = useState(true);
  //End state transit
  
  // State Facilities
  const [luggage, setLuggage] = useState(true);
  const [meal, setMeal] = useState(true);
  const [wifi, setWifi] = useState(true);
  //End state Facilities

  // State Derpature
  const [dinihari, setDinihari] = useState(true);
  const [pagi, setPagi] = useState(true);
  const [siang, setSiang] = useState(true);
  const [malam, setMalam] = useState(true);
  //End state Derpature
  
  // State Arrived
  const [arrived_dinihari, setArrived_Dinihari] = useState(true);
  const [arrived_pagi, setArrived_Pagi] = useState(true);
  const [arrived_siang, setArrived_Siang] = useState(true);
  const [arrived_malam, setArrived_Malam] = useState(true);
  //End state Arrived
  
  // State Airlines
  const [garuda, setGaruda] = useState(true);
  const [airasia, setAirasia] = useState(true);
  const [lion, setLion] = useState(true);
  //End state Airlines

  const [openFacilities, setOpenFacilities] = useState(true);
  const [upDownFacilities, setUpDownFacilities] = useState(true);

  const [openDerparture, setOpenDerparture] = useState(true);
  const [upDownDerparture, setUpDownDerparture] = useState(true);

  const [openArrived, setOpenArrived] = useState(true);
  const [upDownArrived, setUpDownArrived] = useState(true);

  const [openAirlines, setOpenAirlines] = useState(true);
  const [upDownAirlines, setUpDownAirlines] = useState(true);

  const [openPrice, setOpenPrice] = useState(true);
  const [upDownPrice, setUpDownPrice] = useState(true);

  return (
    <>
      <div className="rm-ov-x">
        <div className={style.bgSearchResult}>
          <NavDesktop />
          <Flight />

          <div className="container pt-4">
            <div className="row mb-3">
              <div className="col-3">
                <div className="d-flex justify-content-between">
                  <h4>Filter</h4>
                  <h6 className={`${style.textBlue} pt-2`}>Reset</h6>
                </div>
              </div>
              <div className="col-9">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <h4>Select Ticket</h4>
                    <small className="pt-2 ps-1">(6 flight found)</small>
                  </div>

                  <div className="d-flex">
                    <h6>Sort by</h6>
                    <ArrowDownUp className={`${style.icon} px-1`} />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div className={style.cardFilter}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h6>Transit</h6>
                      <p
                        className={style.buttonUpDown}
                        onClick={() => {
                          setOpenTransit(!openTransit);
                          setUpDownTransit(!upDownTransit);
                        }}
                        aria-controls="Transit-collapse"
                        aria-expanded={openTransit}
                      >
                        {upDownTransit ? <FiChevronUp /> : <FiChevronDown />}
                      </p>
                    </div>
                    <Collapse in={openTransit}>
                      <div id="Transit-collapse">
                        <ol className="list-group list-group-numbered">
                          <li className="d-flex justify-content-between py-2">
                            <div>Direct</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={direct}
                                onChange={() => setDirect(!direct)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>Transit</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={transit}
                                onChange={() => setTransit(!transit)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>Transit 2+</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={transit2}
                                onChange={() => setTransit2(!transit2)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>
                        </ol>
                      </div>
                    </Collapse>
                    <hr className={style.line} />

                    <div className="d-flex justify-content-between">
                      <h6>Facilities</h6>
                      <p
                        className={style.buttonUpDown}
                        onClick={() => {
                          setOpenFacilities(!openFacilities);
                          setUpDownFacilities(!upDownFacilities);
                        }}
                        aria-controls="facilites-collapse"
                        aria-expanded={open}
                      >
                        {upDownFacilities ? <FiChevronUp /> : <FiChevronDown />}
                      </p>
                    </div>

                    <Collapse in={openFacilities}>
                      <div id="facilites-collapse">
                        <ol className="list-group list-group-numbered">
                          <li className="d-flex justify-content-between py-2">
                            <div>Luggage</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={luggage}
                                onChange={() => setLuggage(!luggage)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>In-Flight Meal</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={meal}
                                onChange={() => setMeal(!meal)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>Wi-fi</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={wifi}
                                onChange={() => setWifi(!wifi)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>
                        </ol>
                      </div>
                    </Collapse>
                    <hr className={style.line} />

                    <div className="d-flex justify-content-between">
                      <h6>Departure Time</h6>
                      <p
                        className={style.buttonUpDown}
                        onClick={() => {
                          setOpenDerparture(!openDerparture);
                          setUpDownDerparture(!upDownDerparture);
                        }}
                        aria-controls="derparture-collapse"
                        aria-expanded={open}
                      >
                        {upDownDerparture ? <FiChevronUp /> : <FiChevronDown />}
                      </p>
                    </div>

                    <Collapse in={openDerparture}>
                      <div id="derparture-collapse">
                        <ol className="list-group list-group-numbered">
                          <li className="d-flex justify-content-between py-2">
                            <div>00:00 - 06:00</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={dinihari}
                                onChange={() => setDinihari(!dinihari)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>06:00 - 12:00</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={pagi}
                                onChange={() => setPagi(!pagi)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>12:00 - 18:00</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={siang}
                                onChange={() => setSiang(!siang)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>18:00 - 24:00</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={malam}
                                onChange={() => setMalam(!malam)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>
                        </ol>
                      </div>
                    </Collapse>
                    <hr className={style.line} />

                    <div className="d-flex justify-content-between">
                      <h6>Time Arrived</h6>
                      <p
                        className={style.buttonUpDown}
                        onClick={() => {
                          setOpenArrived(!openArrived);
                          setUpDownArrived(!upDownArrived);
                        }}
                        aria-controls="Arrived-collapse"
                        aria-expanded={open}
                      >
                        {upDownArrived ? <FiChevronUp /> : <FiChevronDown />}
                      </p>
                    </div>

                    <Collapse in={openArrived}>
                      <div id="Arrived-collapse">
                        <ol className="list-group list-group-numbered">
                          <li className="d-flex justify-content-between py-2">
                            <div>00:00 - 06:00</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={arrived_dinihari}
                                onChange={() => setArrived_Dinihari(!arrived_dinihari)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>06:00 - 12:00</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={arrived_pagi}
                                onChange={() => setArrived_Pagi(!arrived_pagi)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>12:00 - 18:00</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={arrived_siang}
                                onChange={() => setArrived_Siang(!arrived_siang)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>18:00 - 24:00</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={arrived_malam}
                                onChange={() => setArrived_Malam(!arrived_malam)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>
                        </ol>
                      </div>
                    </Collapse>
                    <hr className={style.line} />

                    <div className="d-flex justify-content-between">
                      <h6>Airlines</h6>
                      <p
                        className={style.buttonUpDown}
                        onClick={() => {
                          setOpenAirlines(!openAirlines);
                          setUpDownAirlines(!upDownAirlines);
                        }}
                        aria-controls="Airlines-collapse"
                        aria-expanded={open}
                      >
                        {upDownAirlines ? <FiChevronUp /> : <FiChevronDown />}
                      </p>
                    </div>

                    <Collapse in={openAirlines}>
                      <div id="Airlines-collapse">
                        <ol className="list-group list-group-numbered">
                          <li className="d-flex justify-content-between py-2">
                            <div>Garuda Indonesia</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={garuda}
                                onChange={() => setGaruda(!garuda)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>Air Asia</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={airasia}
                                onChange={() => setAirasia(!airasia)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <div>Lion Air</div>
                            <span className="pe-1">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                defaultChecked={lion}
                                onChange={() => setLion(!lion)}
                                aria-label="Checkbox for following text input"
                              />
                            </span>
                          </li>
                        </ol>
                      </div>
                    </Collapse>
                    <hr className={style.line} />

                    <div className="d-flex justify-content-between">
                      <h6>Ticket Price</h6>
                      <p
                        className={style.buttonUpDown}
                        onClick={() => {
                          setOpenPrice(!openPrice);
                          setUpDownPrice(!upDownPrice);
                        }}
                        aria-controls="Price-collapse"
                        aria-expanded={open}
                      >
                        {upDownPrice ? <FiChevronUp /> : <FiChevronDown />}
                      </p>
                    </div>

                    <Collapse in={openPrice}>
                      <div id="Price-collapse">
                        <div className="d-flex justify-content-between">
                          <label for="customRange2" class="form-label">
                            <small>Lowest</small>
                          </label>
                          <label for="customRange2" class="form-label">
                            <small>Highest</small>
                          </label>
                        </div>
                        <input
                          type="range"
                          class="form-range"
                          min="0"
                          max="5"
                          id="customRange2"
                        />
                        <div className="d-flex justify-content-between">
                          <label for="customRange2" class="form-label">
                            <h6 className={style.textBlue}>$ 145,00</h6>
                          </label>
                          <label for="customRange2" class="form-label">
                            <h6 className={style.textBlue}>$ 300,00</h6>
                          </label>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className={`${style.cardFilter} mb-3`}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2">
                        <Image
                          src="/assets/img/garuda.png"
                          alt="Logo"
                          width="120"
                          height="70"
                        />
                      </div>
                      <div className="col-3">
                        <p>Garuda Indonesia</p>
                      </div>
                    </div>
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
                      <div className="col-3">
                        <div className="text-center">
                          <p className={`${style.eta} mb-0`}>
                            3 hours 11 minutes
                          </p>
                          <small className={style.textvsm}>(1 transit)</small>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="text-center">
                          <div className="d-flex justify-content-between">
                            <RiSuitcase3Fill className={style.iconFacilities} />
                            <FaHamburger className={style.iconFacilities} />
                            <FaWifi className={style.iconFacilities} />
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="text-center">
                          <span className="d-flex justify-content-center">
                            <p className={style.textBlue}>$ 214,00 </p>
                            <small> /pax</small>
                          </span>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="text-center">
                          <button className={`${style.btnSelect} btn`}>
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                    <h6 className={`${style.textBlue} pt-4 pb-0 mb-0`}>
                      View Details <FiChevronDown />
                    </h6>
                  </div>
                </div>

                <div className={`${style.cardFilter} mb-3`}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2">
                        <Image
                          src="/assets/img/airasia.png"
                          alt="Logo"
                          width="120"
                          height="70"
                        />
                      </div>
                      <div className="col-3">
                        <p>Airasia</p>
                      </div>
                    </div>
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
                      <div className="col-3">
                        <div className="text-center">
                          <p className={`${style.eta} mb-0`}>
                            3 hours 11 minutes
                          </p>
                          <small className={style.textvsm}>(1 transit)</small>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="text-center">
                          <div className="d-flex justify-content-between">
                            <RiSuitcase3Fill className={style.iconFacilities} />
                            <FaHamburger className={style.iconFacilities} />
                            <FaWifi className={style.iconFacilities} />
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="text-center">
                          <span className="d-flex justify-content-center">
                            <p className={style.textBlue}>$ 214,00 </p>
                            <small> /pax</small>
                          </span>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="text-center">
                          <button className={`${style.btnSelect} btn`}>
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                    <h6 className={`${style.textBlue} pt-4 pb-0 mb-0`}>
                      View Details <FiChevronDown />
                    </h6>
                  </div>
                </div>

                <div className={`${style.cardFilter} mb-3`}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2">
                        <Image
                          src="/assets/img/lion.png"
                          alt="Logo"
                          width="120"
                          height="70"
                        />
                      </div>
                      <div className="col-3">
                        <p>Lion Air</p>
                      </div>
                    </div>
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
                      <div className="col-3">
                        <div className="text-center">
                          <p className={`${style.eta} mb-0`}>
                            3 hours 11 minutes
                          </p>
                          <small className={style.textvsm}>(1 transit)</small>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="text-center">
                          <div className="d-flex justify-content-between">
                            <RiSuitcase3Fill className={style.iconFacilities} />
                            <FaHamburger className={style.iconFacilities} />
                            <FaWifi className={style.iconFacilities} />
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="text-center">
                          <span className="d-flex justify-content-center">
                            <p className={style.textBlue}>$ 214,00 </p>
                            <small> /pax</small>
                          </span>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="text-center">
                          <button className={`${style.btnSelect} btn`}>
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                    <h6 className={`${style.textBlue} pt-4 pb-0 mb-0`}>
                      View Details <FiChevronDown />
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
