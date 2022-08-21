import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import * as Type from "../../../redux/auth/type";
import Axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";
const logins = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [passwordType, setPasswordType] = React.useState("password");
  const [isloading, setIsloading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setaAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postCode, setPostCode] = React.useState("");

//   const handleBack = () => {
//     router.push("/profile");
//   };

  const handleUpdate = () => {
    setIsloading(true);
    setTimeout(() => {
      Axios.patch("http://localhost:8500/auth/login", {
        email: email,
        password: password,
        name: name,
        phoneNumber:phoneNumber,
        address:address,
        city:city,
        postCode:postCode,
      })
        .catch((err) => {
          const message = err.response.data.message;
        })
        .finally(() => {
          setIsloading(false);
        });
    }, 3000);
  };

  return (
    <>
      <div className="container p-2 h-100 col-lg-4 mx-auto">
        <div className="container h-100">
          <div className="row row-cols-1 p-2">
            <div className="col w-100">
              <div className="row row-cols-2">
                <Link href="/profile">
                  <div className="col-sm-8 fw-semibold back-button">
                    <IoChevronBack />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col mt-3">
              <div>
                <p className="fw-bold fs-4">Edit Profile</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdate();
                }}
              >
                <div className="mb-3">
                  <input
                    type="email"
                    className=" input w-100"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className=" input w-100"
                    placeholder="Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type={passwordType}
                    className=" input w-100"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="phoneNumber"
                    className=" input w-100"
                    placeholder="Phone Number"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className=" input w-100"
                    placeholder="City"
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className=" input w-100"
                    placeholder="Address"
                    required
                    onChange={(e) => setaAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className=" input w-100"
                    placeholder="Post Code"
                    required
                    onChange={(e) => setPostCode(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 p-2 clr-primer "
                >
                  {isloading ? "Updating" : "Update"}
                </button>
              </form>
              <div className="text-center p-2">
                <a href="/forgot" className="link">
                  Reset Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default logins;
