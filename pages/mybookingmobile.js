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
  };

  return (
    <>
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
                </div>
              </div>
            </div>
          ))}
        </section>
        <FixedMenu />
      </div>
    </>
  );
}

export default MyBooking;
