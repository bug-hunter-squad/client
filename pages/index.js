import Logo from "../components/atom/splashLogo";
import styleSplash from "../styles/Splash.module.css";

function App() {
  return (
    <>
      <div className="d-flex">
        <div className="col-lg-7 ">
          <div className={`${styleSplash.container} container-fluid`}>
            <Logo />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="container">
            <div className="col-lg-8 mx-auto mt-5 ">
              <div className="mt-5 mb-5">
                <p className="fw-bold fs-2 ">Login</p>
              </div>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control-lg input w-100"
                    id="InputEmail1"
                    aria-describedby="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control-lg input w-100"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 btn-lg">
                  Sign In
                </button>
              </form>
              <div className="text-center p-2">
                <p>Did you forgot your password?</p>
                <a href="/forgot" className="link">
                  Tap here for reset
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* register */}
        {/* <div className="col-lg-5">
          <div className="container">
            <div className="col-lg-8 mx-auto mt-5 ">
              <div className="mt-5 mb-5">
                <p className="fw-bold fs-2 ">Register</p>
              </div>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control-lg input w-100"
                    id="InputUsername"
                    aria-describedby="username"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control-lg input w-100"
                    id="InputEmail1"
                    aria-describedby="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control-lg input w-100"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 btn-lg">
                  Sign Up
                </button>
              </form>
              <div className="text-center p-2">
                <p>Did you forgot your password?</p>
                <a href="/forgot" className="link">
                  Tap here for reset
                </a>
                <button type="submit" className="btn btn-primary w-100 btn-lg">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
