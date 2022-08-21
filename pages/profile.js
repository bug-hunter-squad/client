import style from "../styles/Profile.module.css";
import Image from "next/image";
import { ChevronRight } from "react-bootstrap-icons";
import { AiFillStar } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Modal,Col } from "react-bootstrap";
import Fixedmenu from "../components/molecules/fixedmenu";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import React ,{useState} from "react";

import AddCard from "../components/molecules/AddCard";

function Profile() {
  const { auth } = useSelector((state) => state);
  const [name, setName] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [profile, setProfile] = React.useState("");
  const [city, setCity] = React.useState("");

  React.useEffect(() => {
    const decodeUser = decode(auth?.token);
    setName(decodeUser?.name);
    setCountry(decodeUser?.country);
    setProfile(decodeUser?.profilePicture);
    setCity(decodeUser?.city);
  });

  const [modalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <>
      <Col className="col-lg-4 mx-auto">
        <div className="d-flex mt-3 mb-2 mx-4 justify-content-between">
          <h1>Profile</h1>
          <a href="#" className="text-decoration-none p-2">
            <p>Edit</p>
          </a>
        </div>
        <div className={style.outline}>
          <div className={style.card}>
            <Image
              className={`${style.imgTopTen} d-flex align-items-center`}
              src={profile ? profile : "/assets/img/image.png"}
              alt=""
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <h3>{name ? name : "guest"}</h3>
          <p>
            {city ? city : "city"}
            {"  "}
            {country ? country : "country"}
          </p>
        </div>
        <div className="d-flex mt-3 mb-2 mx-4 justify-content-between">
          <h4>Cards</h4>
          <a href="#" className="text-decoration-none ">
            <div onClick={() => setModalOpen(true)}>
              <p>+ Add</p>
            </div>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
          }}
        >
          {[...new Array(3)].map((item, key) => (
            <div className="d-flex card text-bg-primary mx-3 mb-3 col-8">
              <div className="card-body">
                <h5 className="card-title">4441 1235 5512 5551</h5>
                <div className="card-text d-flex justify-content-between">
                  <p>X Card</p>
                  <p>$ 1,440.2</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className={style.mobilemenu}>
          <div className="d-flex mx-4  justify-content-between ">
            <div className="d-flex">
              <AiFillStar className={style.icon} />
              <h6 className="p-0 mx-3">My Review</h6>
            </div>
            <div className="">
              <ChevronRight />
            </div>
          </div>
          <div className="d-flex mx-4 mt-3 justify-content-between ">
            <div className="d-flex">
              <IoSettingsSharp className={style.icon} />
              <h6 className="p-0 mx-3">Settings</h6>
            </div>
            <div className="">
              <ChevronRight />
            </div>
          </div>
          <div className="d-flex  mx-4 mt-3 justify-content-between text-danger">
            <div className="d-flex ">
              <FaSignOutAlt className={`${style.icon} ${style.red}`} />
              <h6 className="p-0 mt-1 mx-3">Logout</h6>
            </div>
            <div className="">
              <ChevronRight className="" />
            </div>
          </div>
        </section>
        <Fixedmenu />
      </Col>

      <Modal show={modalOpen} onHide={closeModal}>
        <AddCard closeModal={closeModal} />
      </Modal>{" "}
    </>
  );
}

export default Profile;
