import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import Axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const RegisterAdmin = () => {
    const router = useRouter();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("admin");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      Axios
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
          router.replace("/superadmin");
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
  const [passwordType, setPasswordType] = React.useState("password");
  const seePassword = () => {
    setPasswordType("text");
  };

    const hanldeDisable =() =>{
        Swal.fire({
            title: 'Sorry features will be coming soon',
            width: 389,
            icon: "info",
          });
      }
  return (
    <>
     <div className="container-fluid border">
      <div className="row row-cols-2">
        <div className="col p-5 clr-primer">
          <img
            className="d-block w-100 h-50 mt-5"
            src="/assets/img/bg-logo.svg"
            alt="First slide"
          />
        </div>
        <div className="col p-5">
          <div className="ms-5 mobile p-3">
                  <div className="col mt-3">
            <div>
              <p className="fw-bold fs-2">Registers Superadmin 🔑</p>
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
                onClick={hanldeDisable}
              >
                <FcGoogle />
              </button>
              <button
                type="button"
                className="btn btn-outline-primary col auth"
                onClick={hanldeDisable}
              >
                <BsFacebook />
              </button>
              <button
                type="button"
                className="btn btn-outline-primary col auth"
                onClick={hanldeDisable}
              >
                <FaFingerprint />
              </button>
            </div>
          </div>  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RegisterAdmin