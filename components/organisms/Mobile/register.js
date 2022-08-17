import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useRouter } from "next/router";

function Registers() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  const [passwordType, setPasswordType] = React.useState("password");
  const seePassword = () => {
    setPasswordType("text");
  };

  const handleLogin = () => {
    router.push("/login");
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
            <div className="col mt-1">
              <div>
                <p className="fw-bold fs-2">Register</p>
              </div>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className=" input w-100"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className=" input w-100"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type={passwordType}
                    className=" input w-100"
                    placeholder="Password"
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
                  Sign Up
                </button>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label fs-6" for="exampleCheck1">
                    Accept terms and condition
                  </label>
                </div>
              </form>
            </div>
            <div className="col p-2 text-center mb-1">
              <hr />
              <p>Already have an account?</p>
              <button
                onClick={handleLogin}
                type="button"
                className="btn btn-outline-primary w-100 p-2"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registers;
