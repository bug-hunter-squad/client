import React from "react";
import FixedMenu from "../components/molecules/fixedmenu";
import { BsEnvelope, BsBell } from "react-icons/bs";
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

  React.useEffect(() => {

  });

  const handleData = (req, res) => {
    setLoading(true);
    const decodeUser = decode(auth?.token);
    const id = decodeUser.id
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

  return (
    <>
      <div className="container">
        <div className="col-lg-4 mx-auto mt-2">
        <Nav />
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
                  <Link href={item.paymentUrl} className="text-decoration-none">
                  <a className="text-decoration-none" >
                      <p
                    className="bg-success p-2"
                    style={{ borderRadius: "10px", color: "white" }}
                  >
                    Ready to payment
                  </p>
                  </a>
                 
                  </Link>
                 

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
