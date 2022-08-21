import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

import { useRouter } from "next/router";

function Registers() {
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("customer");
  const [isLoading, setIsLoading] = React.useState("");


  const handleBack = () => {
    router.push("/");
  };
  const [passwordType, setPasswordType] = React.useState("password");
  const seePassword = () => {
    setPasswordType("text");
  };

  return (
    <>
      <div className="container col-lg-4 mx-auto">
        <div className="container h-100">
          <div className="row row-cols-1 p-2">
            <div className="col w-100">
              <div className="row row-cols-2">
                <div className="col-sm-8 fw-semibold back-button">
                  <IoChevronBack onClick={handleBack} />
                </div>
              </div>
            </div>
            <div className="col mt-1">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className=" input w-100"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className=" input w-100"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type={passwordType}
                    className=" input w-100"
                    placeholder="Password"
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
                  {" "}
                  {isLoading ? "loading ••••" : "Sign Up"}
                </button>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label fs-6"
                    for="exampleCheck1"
                    required
                  >
                    Accept terms and condition
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registers;
