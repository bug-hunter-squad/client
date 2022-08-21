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
  const [id, setId] = React.useState([]);
  const [listUsers, setListUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);


  React.useEffect(() => {
    const decodeUser = decode(auth?.token);
    console.log(decodeUser.id)
    setId(decodeUser.id)
    // setName(decodeUser?.name);
    // setCountry(decodeUser?.country);
    // setProfile(decodeUser?.profilePicture);
    // setCity(decodeUser?.city);
  });

  console.log(id)


  React.useEffect((id) => {
    axios.get(`http://localhost:8500/profile/${id}`).then((res) => {
      setListUsers(res?.data ?? []);
      console.log(res)
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    });
  }, []);

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
              <Link href="/notification">
                <BsBell className="" />
              </Link>
            </div>
          </div>
        </div>
        <section className="col-lg-4 mx-auto">
          {[...new Array(2)].map((item, index) => (
            <div className={style.card} key={index}>
              <div className="mx-3 mt-3">
                <div className="row"></div>
                <p className="mt-3">Monday, 20 July ‘20 - 12:33</p>
                <div className="">
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
                <p style={{ marginTop: "-15px" }}>Garuda Indonesia, AB-221</p>
                <hr className=" " />
                <div className="d-flex justify-content-between">
                  <p>status</p>
                  <p
                    className="bg-warning p-2"
                    style={{ borderRadius: "10px" }}
                  >
                    Waiting for payment
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
