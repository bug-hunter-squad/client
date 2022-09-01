import style from "../styles/Profile.module.css";
import Image from "next/image";
import { ChevronRight } from "react-bootstrap-icons";
import { AiFillStar } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Modal, Col } from "react-bootstrap";
import Fixedmenu from "../components/molecules/fixedmenu";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import React, { useState } from "react";
import useSWR from "swr";
import AddCard from "../components/molecules/AddCard";
import Axios from "axios"
import Swal from "sweetalert2";
import { useDispatch} from "react-redux"
import * as Type from "../redux/auth/type"
import { useRouter} from "next/router"

function Profile() {
  const router = useRouter()
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const decodeUser  = decode(auth?.token);
  const userId = decodeUser?.id

  const [modalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }
  const fetchUser = async () => {
    const response = await Axios.get(
      `http://localhost:8500/profile/${userId}`
    );
    return response.data;
  };
  const { data } = useSWR("User", fetchUser);
  const name  = data?.name;
  const city = data?.city;
  const country = data?.country;
  const images = data?.profilePicture;

const handleLogout = async (req, res) => {
  dispatch({
    type: Type.SET_AUTH,
    payload: {
      token: null,
    }
  })
  Swal.fire({
    title: "Do you really want to go out?",
    width: 389,
    icon: "success",
    });
}
const hanldeDisable =(e) =>{
  e.preventDefault();
  Swal.fire({
      title: 'Sorry features will be coming soon',
      width: 389,
      icon: "info",
    });
}

const handleMyReview = (e) =>{
  e.preventDefault();
  router.push("/review")
}

  return (
    <>
      <Col className="col-lg-4 mx-auto">
        <div className="d-flex mt-3 mb-2 mx-4 justify-content-between">
          <h1>Profile</h1>
          <a href="/editprofile" className="text-decoration-none p-2">
            <p>Edit</p>
          </a>
        </div>
        <div className={style.outline}>
          <div className={style.card}>
            <img
              className={`${style.imgTopTen} d-flex align-items-center`}
              src={images? images : "/assets/img/image.png"}
              alt=""
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <h3>{name ? name : "guest"}</h3>
          <p>
            {city ? city : "City"}{" - "}
            {country ? country : "Country"}
          </p>
        </div>
        <div className="d-flex mt-3 mb-2 mx-4 justify-content-between">
          <h4>Cards</h4>
          <div onClick={() => setModalOpen(true)}>
            <p className="text-primary">+ Add</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
          }}
        >
          {[...new Array(3)].map((item, index) => (
            <div className="d-flex card text-bg-primary mx-3 mb-3 col-8" key={index}>
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
          <div className="d-flex mx-4  justify-content-between " onClick={handleMyReview}>
            <div className="d-flex">
              <AiFillStar className={style.icon} />
              <h6 className="p-0 mx-3">My Review</h6>
            </div>
            <div className="">
              <ChevronRight />
            </div>
          </div>
          <div className="d-flex mx-4 mt-3 justify-content-between " onClick={hanldeDisable}>
            <div className="d-flex">
              <IoSettingsSharp className={style.icon} />
              <h6 className="p-0 mx-3">Settings</h6>
            </div>
            <div className="">
              <ChevronRight />
            </div>
          </div>
          <div className="d-flex  mx-4 mt-3 justify-content-between text-danger" onClick={handleLogout}>
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
      </Modal>
    </>
  );
}

export default Profile;
