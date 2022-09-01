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

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .post("https://bug-hunter-squad.herokuapp.com/auth/register", {
          name: name,
          email: email,
          password: password,
          role: role,
        })
        .then((response) => {
          const falseResponse = response.data.message;
          Swal.fire({
            title: falseResponse,
            width: 389,
            text: `Nice to meet you ${name}`,
            icon: "success",
          });
          router.replace("/login");
        })
        .catch(() => {
          Swal.fire({
            title: "Sorry",
            width: 389,
            text: "Check the password and email again",
            icon: "error",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };

  const handleBack = () => {
    router.push("/");
  };
  const [passwordType, setPasswordType] = React.useState("password");
  const seePassword = () => {
    setPasswordType("text");
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
                >  {isLoading ? "loading ••••" : "Sign Up"}
               
                </button>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label fs-6" for="exampleCheck1" required>
                    Accept terms and condition
                  </label>
                </div>
              </form>
            </div>
            <div className="col p-2 text-center mb-1">
              <hr />
              <p>Already have an account?</p>
              <button
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
