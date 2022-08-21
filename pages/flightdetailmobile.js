import style from "../styles/SearchResult.module.css";
import Image from "next/image";
import { ArrowLeftRight } from "react-bootstrap-icons";
import { ArrowDownUp } from "react-bootstrap-icons";
import { AiFillStar } from "react-icons/ai";
import { FaHamburger, FaRestroom } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";

function searchresult() {
  return (
    <>
      <container>
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
                  <p className={style.text}>Monday, 20 July 20</p>
                </div>
              </div>
            </section>
          </div>
          <div className={style.result}>
            <div
              className="card col-11 mx-auto"
              style={{
                borderRadius: "15px",
                padding: "10px",
                marginBottom: "10px",
                cursor: "pointer",
                marginTop: "-120px",
              }}
            >
              <div className="row ">
                <div className="">
                  <div>
                    <section>
                      <div className="d-flex mx-4 mt-4 justify-content-between ">
                        <div className="">
                          <h3 className="p-0">IDN</h3>
                          <p className="p-0">12:33</p>
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
                          <h4 className="p-0 ">JPN</h4>
                          <p className="p-0  text-end">15:21</p>
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
                        <div className="">
                          <p>Code</p>
                          <h6>AB-221</h6>
                        </div>
                        <div className="">
                          <p>Class</p>
                          <h6>eCONOMY</h6>
                        </div>
                        <div className="">
                          <p>Terminal</p>
                          <h6>A</h6>
                        </div>
                        <div className="">
                          <p>Gate</p>
                          <h6>221</h6>
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
                          <p className={"text-center"}>2</p>
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
                          <p className={"text-center"}>4</p>
                        </div>
                        <p>Adults</p>
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
                className="d-flex card text-bg-primary ms-4 col-4 "
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
                className="d-flex card text-bg-primary mx-2 col-4 "
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
                className="d-flex card text-bg-primary  col-4 "
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body">
                  <div className="card-text d-flex mt-2 justify-content-around ">
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
              <h5 className="text-primary">$ 145,00</h5>
            </div>
            <div className="mx-4 mb-3">
              <button type="button" class="btn btn-primary btn-lg w-100">
                Book Flight
              </button>
            </div>
          </div>
        </div>
      </container>
    </>
  );
}

export default searchresult;
