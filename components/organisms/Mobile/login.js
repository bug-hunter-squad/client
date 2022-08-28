import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { useDispatch } from "react-redux";
import * as Type from "../../../redux/auth/type";
import Axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";


const logins = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [passwordType, setPasswordType] = React.useState("password");
  const [isloading, setIsloading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const seePassword = () => {
    setPasswordType("text");
  };
  const handleBack = () => {
    router.push("/");
  };

  const handleLogin = () => {
    setIsloading(true);
    setTimeout(() => {
      Axios.post("http://localhost:8500/auth/login",{
        email: email,
        password: password
      })
        .then((res) => {
          dispatch({
            type: Type.SET_AUTH,
            payload: {
              token: res.data.token,
            },
          });
          const falseResponse = res.data.message;
          Swal.fire({
            title: falseResponse,
            width: 389,
            text: `Welcomes back `,
            icon: "success",
          });
          router.replace("/");
        })
        .catch((err) => {
          const message = err.response.data.message;
          Swal.fire({
            title: message,
            width: 389,
            text: `Recheck your email & password`,
            icon: "error",
          });
        })
        .finally(() => {
          setIsloading(false);
        });
    }, 3000);
  };

  return (
    <>
      <div className="container p-2 h-100">
        <div className="container h-100">
          <div className="row row-cols-1 p-2">
            <div className="col w-100">
              <div className="row row-cols-2">
                <div className="col-sm-8 fw-semibold back-button">
                  <IoChevronBack onClick={handleBack} />
                </div>
                <div className="col-sm-4 p-2">
                  <p className="guest">Continue as Guest</p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div>
                <p className="fw-bold fs-2">Login</p>
              </div>
              <form     onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}>
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
                    type={passwordType}
                    className=" input w-100"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="see-password">
                    {passwordType === "password" ? (
                      <AiOutlineEyeInvisible onClick={seePassword} />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 p-2 clr-primer "
                >
                  {isloading ? "Loading..." : "Sign In"}
                </button>
              </form>
              <div className="text-center p-2">
                <p>Did you forgot your password?</p>
                <a href="/forgot" className="link">
                  Tap here for reset
                </a>
              </div>
            </div>
            <div className="col p-2 text-center">
              <hr />
              <p>or sign in with</p>
              <div className="row row-cols-3 gap-1 d-flex flex-rows justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-primary col auth"
                >
                  <FcGoogle />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary col auth"
                >
                  <BsFacebook />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary col auth"
                >
                  <FaFingerprint />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default logins;
