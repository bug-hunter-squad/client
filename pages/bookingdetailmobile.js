import style from "../styles/BookingDetailmobile.module.css";
import Image from "next/image";
import { ArrowsFullscreen } from "react-bootstrap-icons";
import { ChevronLeft } from "react-bootstrap-icons";
import { BiDotsVerticalRounded } from "react-icons/bi";
function bookingdetail() {
  return (
    <>
      <container className="col-lg-4  mx-auto col-sm">
        <div className={`${style.bookingdetail} col-lg-4 mx-auto`}>
          <div className="d-flex mx-3 mb-2 justify-content-between text-white">
            <div className="d-flex   mt-2">
              <ChevronLeft className="mt-1" />
              <p className="mx-3 ">Booking Pass</p>
            </div>
            <div className=" justify-content-end mt-2">
              <BiDotsVerticalRounded />
            </div>
          </div>
          <div className={style.container}>
            <div className={style.background}>
              <section>
                <div className="col-3 mt-5 mb-4 d-flex w-100 justify-content-center">
                  <Image
                    className="d-flex justify-content-center"
                    src="/assets/img/logomaskapai.png"
                    width="70px"
                    height="70px"
                    alt="image"
                  />
                </div>
                <div className="d-flex  justify-content-around ">
                  <div className="d-flex ">
                    <h3 className="p-0 ">IDN</h3>
                    <p className="p-2 mx-3">
                      <Image
                        src="/assets/img/flightlogo.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                      />
                    </p>
                    <h3 className="p-0 ">JPN</h3>
                  </div>
                </div>

                <div className="mx-auto  d-flex justify-content-center">
                  <button type="button" className="btn  btn-success">
                    E-ticket Issue
                  </button>
                </div>
                <hr className="mx-5 mt-5" />
                <div className="d-flex mx-5 justify-content-between ">
                  <div className="">
                    <p>Code</p>
                    <h6 className="p-0">AB-221</h6>
                  </div>
                  <div className=" ">
                    <p>Class</p>
                    <h6 className="p-0 ">Economy</h6>
                  </div>
                  <div className="">
                    <p>Terminal</p>
                    <h6 className="p-0">A</h6>
                  </div>
                  <div className=" ">
                    <p>Gate</p>
                    <h6 className="p-0 ">221</h6>
                  </div>
                </div>
                <div className="mx-5 mt-4">
                  <p>Departure</p>
                  <h6>Monday, 20 July 20 - 12:33</h6>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                <Image
                    className=""
                    src="/assets/img/barcode.png"
                    width="280px"
                    height="70px"
                    alt="image"
                  />
                </div>
                <p className="text-center">1234 5678 90AS 6543 21CV</p>
              </section>
            </div>
          </div>
        </div>
      </container>
    </>
  );
}

export default bookingdetail;
