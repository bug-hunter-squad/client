import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useRouter } from "next/router";


function Welcomes() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/register");
  };

  const handleSignIn = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="container text-center p-2">
        <div>
          <Carousel>
            {[...new Array(4)].map((item, key) => (
              <Carousel.Item
                key={key}
                interval={1000}
                className="carousel-welcome"
              >
                <div className="h-100 row row-cols-1">
                  <img
                    className="d-block w-100 h-50 mt-5"
                    src="/assets/img/logoLight.svg"
                    alt="First slide"
                  />
                  <div>
                    <Carousel.Caption className="caption">
                      <h3>Get Started</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="container">
            <div className="row row-cols-1 p-2">
              <button
                type="button"
                className="btn btn-primary p-3 col mt-2"
                onClick={handleRegister}
              >
                Create My Account
              </button>
              <button
                type="button"
                className="btn btn-light  p-3 col mt-2"
                onclick={handleSignIn}
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
export default Welcomes;
