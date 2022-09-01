import React from "react";
import style from "../../styles/BookingDetailmobile.module.css";
import Image from "next/image";
import useSWR from "swr";
import { ChevronLeft } from "react-bootstrap-icons";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import axios from "axios";
import QRCoderReact from "qrcode.react";

function bookingdetail() {
  const router = useRouter();
  const {
    query: { bookingId },
  } = router;
  React.useEffect(() => {
    handleData();
  }, []);
  const { auth } = useSelector((state) => state);
  const [data, setData] = React.useState([]);
  const [idFlight, setDataFlight] = React.useState();
  const [detail , setDetail] = React.useState([]);
  const [isloading, setLoading] = React.useState(false);
 


  const handleData = async (req, res) => {
    setLoading(true);
    const decodeUser = decode(auth?.token);
    const id = decodeUser.id;
    await axios
      .get(`http://localhost:8500/profile/${id}/booking/${bookingId}`)
      .then((response) => {
        setData(response.data);
        setDataFlight(response?.data?.flightId);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  if (idFlight) {
    const response = async (req, res) => {
      await axios.get(`http://localhost:8500/flight/${idFlight}`)
      .then((response) => {
        setDetail(response?.data?.DetailFlightInformation);
      });
    };
    response();
   
  }

  const result = [data];
  return (
    <>
      <Container className={style.bookingdetail}>
        <div className="row  mx-auto col-sm">
          <div className={`col-lg-4 mx-auto`}>
            <div className="d-flex mx-3 mb-2 justify-content-between text-white">
              <div className="d-flex   mt-2">
                <a href="/mybooking">
                  <ChevronLeft className="mt-1 fs-3 text-white" />
                </a>
                <p className="mx-3 fs-4">Booking Pass</p>
              </div>
              <div className=" justify-content-end p-2 mt-1">
                <BiDotsVerticalRounded className="fs-3" />
              </div>
            </div>
            <div className={style.container}>
              {result?.map((item) => (
                <div className={style.background} key={item?.bookingId}>
                  <section>
                    <div className="col-3  mt-5 mb-4 d-flex w-100 justify-content-center">
                      <img
                        className="d-flex justify-content-center"
                        src={item.airlineLogo}
                        width="70px"
                        height="60px"
                        alt="image"
                      />
                    </div>
                    <div className="row  mx-5 ">
                      <div className="col-4 ">
                        <h3 className="p-0 ">{item.flightOriginal}</h3>
                      </div>
                      <div className="col-4 text-center mt-2">
                        <Image
                          src="/assets/img/flightlogo.svg"
                          alt="Logo"
                          width="20"
                          height="20"
                        />
                      </div>
                      <div className="col-4 ">
                        <h3 className="p-0 ">{item.flightDestination}</h3>
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
                        <h6 className="p-0">
                          {item.gate}-{item.terminal}
                        </h6>
                      </div>
                      <div className=" ">
                        <p>Class</p>
                        <h6 className="p-0 ">{item.flightClass}</h6>
                      </div>
                      <div className="">
                        <p>Terminal</p>
                        <h6 className="p-0">{item.gate}</h6>
                      </div>
                      <div className=" ">
                        <p>Gate</p>
                        <h6 className="p-0 ">{item.terminal}</h6>
                      </div>
                    </div>

                    <div className="mx-5 d-flex mt-4">
                      <div className="col-6">
                        <p>Departure</p>
                        <h6>{item.departureTime}</h6>
                      </div>
                      <div className="col-6">
                        <p>Total Passanger</p>
                        <h6>
                          {item.totalAdultPassenger} Adult,{" "}
                          {item.totalChildPassenger} Child
                        </h6>
                      </div>
                    </div>
                    {item.bookingStatus === "paid" ? (
                      <div className="mt-5 d-flex justify-content-center">
                        <QRCoderReact
                          className="d-flex justify-content-center"
                          value={item.paymentId ? "SUKSES" : null}
                          size={100}
                        ></QRCoderReact>
                      </div>
                    ) : null}
                  </section>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default bookingdetail;
