import Logo from "../components/atom/searchResultLogo";
import style from "../styles/SearchFlight.module.css";
import Image from "next/image";
import { ArrowLeftRight } from "react-bootstrap-icons";
import { ArrowsFullscreen } from "react-bootstrap-icons";
import { ArrowDownUp } from "react-bootstrap-icons";
import { ChevronLeft } from "react-bootstrap-icons";
import { ChevronRight } from "react-bootstrap-icons";

function searchresult() {
  return (
    <>
      <container>
        <div className="col-lg-4 mx-auto col-sm">
          <div className={style.container}>
            <div
              className={style.card}
              style={{
                backgroundImage: `url('https://www.sahabatufs.com/img/news/09.%20UFS_Oktober%202019_Header.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "264px",
              }}
            >
              {/* <img
                className={style.card}
                src="https://www.sahabatufs.com/img/news/09.%20UFS_Oktober%202019_Header.jpg"
                alt="Logo"
                width="100%"
                height={264}
              /> */}
              <img
                className={style.card}
                src="/assets/img/overlay.png"
                alt="Logo"
                width="100%"
                height={264}
              />
              <div class="card-img-overlay">
                <div className="d-flex mx-3 mb-5 justify-content-between text-white">
                  <div className="p-2 mt-2">
                    <ChevronLeft />
                  </div>
                  <div className="p-2 justify-content-end mt-2">
                    <ArrowsFullscreen />
                  </div>
                </div>
                <h3 class="card-title mx-4 text-white mt-5">Destination</h3>
              </div>
            </div>
          </div>
          <div
            className="card col-10 mx-auto"
            style={{
              borderRadius: "15px",
              padding: "10px",
              marginTop: "-20px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <div className="row ">
              <div className="">
                <div>
                  <section>
                    <div className="d-flex mx-4 justify-content-between">
                      <div className="">
                        <p className="p-0">From</p>
                        <h5 className="p-0">Medan</h5>
                        <p className="p-0">Indonesia</p>
                      </div>
                      <div className="d-flex ">
                        <p className="p-0 d-flex align-items-center text-primary">
                          <ArrowLeftRight />
                        </p>
                      </div>
                      <div className=" text-end">
                        <p className="p-0">To</p>
                        <h5 className="p-0 ">Jakarta</h5>
                        <p className="p-0  text-end">Indonesia</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex mx-auto mt-3 mb-2 col-10 ">
            <button type="button" className="btn mx-auto col-5 btn-outline-primary">
              Button
            </button>
            <button type="button" className="btn mx-auto col-5 btn-outline-primary">
              Button
            </button>
          </div>
          <h5 className="col-10 mx-auto">Departure</h5>
          <div
            className="card col-10 mx-auto"
            style={{
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            <div className="d-flex mx-4 mt-3 justify-content-between ">
              <div className="">
                <h5 className="p-0">Monday, 20 July 20</h5>
              </div>
              <div className="">
                <ChevronRight />
              </div>
            </div>
          </div>
          <h5 className="col-10 mx-auto">How Many Person</h5>
          <div className="d-flex mx-auto mt-3 mb-4 col-10 ">
            <div className="card mx-auto col-5 ">
              <div className="d-flex mx-4 mt-3 justify-content-between ">
                <div className="">
                  <h6 className="p-0">2 Child</h6>
                </div>
                <div className="">
                  <ChevronRight />
                </div>
              </div>
            </div>
            <div className="card mx-auto col-5 ">
              <div className="d-flex mx-4 mt-3 justify-content-between ">
                <div className="">
                  <h6 className="p-0">4 Adults</h6>
                </div>
                <div className="">
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
          <h5 className="col-10 mx-auto">Which Class Do You Want?</h5>
          <div className="d-flex mx-4 mb-3 col-10 justify-content-between ">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                Economy
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                Business
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                First Class
              </label>
            </div>
          </div>
          <div className="col-10 mx-auto">
            <button type="button" className="btn mx-auto col-12 btn-primary">
              <div className="d-flex mx-4 mt-3 justify-content-between ">
                <div className="">
                  <p className="p-0">SEARCH FLIGHT</p>
                </div>
                <div className="">
                  <ChevronRight />
                </div>
              </div>
            </button>
          </div>
        </div>
      </container>
    </>
  );
}

export default searchresult;
