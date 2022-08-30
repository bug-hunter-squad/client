import React from "react";
import FixedMenu from "../components/molecules/fixedmenu";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/BookingDetailmobile.module.css";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import axios from "axios";
import Nav from "../components/molecules/NavBooking";

function MyBooking() {
  const { auth } = useSelector((state) => state);
  const [data, setData] = React.useState([]);
  // const [id, setId] = React.useState("");
  const [isloading, setLoading] = React.useState(false);

  React.useEffect(() => {
    handleData();
  }, []);

  React.useEffect(() => {});

  const handleData = (req, res) => {
    setLoading(true);
    const decodeUser = decode(auth?.token);
    const id = decodeUser?.id;
    setTimeout(() => {
      axios
        .get(`https://bug-hunter-squad.herokuapp.com/profile/${id}/booking`)
        .then((response) => {
          console.log(response);
          setData(response.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  };
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="col-lg-4 mx-auto mt-2">
          <Nav />
        </div>
        <section className="col-lg-4 mx-auto">
          {data?.map((item) => (
            <div className={style.card} key={item.bookingId}>
              <div className="mx-3 mt-3">
                <div className="row"></div>
                <div className="d-flex justify-content-between">
                  <p className="mt-3">
                    {item?.departureTime} - {item?.arrivalTime}
                  </p>
                  <Link
                    href={`/ticket/${item.bookingId}`}
                    className="text-decoration-none"
                  >
                    <a className="text-decoration-none">
                      <p
                        className="bg-primary p-1"
                        style={{ borderRadius: "5px", color: "white" }}
                      >
                        See Detail
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="col-6">
                  <div className="d-flex">
                    <h6 className=" col-5">{item?.flightOriginal}</h6>
                    <div className="col-2  d-flex justify-content-center">
                      <Image
                        className=""
                        src="/assets/img/flightlogo.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                      />
                    </div>
                    <h6 className="col-5 text-end"> {item?.flightDestination}</h6>
                  </div>
                </div>
                <p style={{ marginTop: "-5px", fontSize: "12px" }}>
                  {item?.airlineName}, {item?.gate}-{item?.terminal}
                </p>
                <hr className=" " />
                <div className="d-flex justify-content-between">
                  <p>status</p>
                  <div className="d-flex">
                    <p
                      className="bg-warning p-1 mx-2"
                      style={{ borderRadius: "5px" }}
                    >
                      {item?.bookingStatus}
                    </p>

                    {item?.bookingStatus === "waiting" ? (
                      <Link
                        href={`${item.paymentUrl} `}
                        className="text-decoration-none"
                      >
                        <a className="text-decoration-none">
                          <p
                            className="bg-success p-1"
                            style={{ borderRadius: "5px", color: "white" }}
                          >
                            Ready to payment
                          </p>
                        </a>
                      </Link>
                    ) : (
                      <Link
                        href={`/ticket/${item.bookingId}`}
                        className="text-decoration-none"
                      >
                        <a className="text-decoration-none">
                          <p
                            className="bg-success p-2"
                            style={{ borderRadius: "10px", color: "white" }}
                          >
                            E-Ticket
                          </p>
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="mb-5"></div>
        <FixedMenu />
      </div>
    </>
  );
}

export default MyBooking;
