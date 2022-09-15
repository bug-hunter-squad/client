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
            <Carousel.Item interval={1000} className="carousel-welcome">
              <div className="h-100 row row-cols-1">
                <img
                  className="d-block w-100 h-50 mt-5"
                  src="/assets/img/logoLight.svg"
                  alt="First slide"
                />
                <div>
                  <Carousel.Caption className="caption">
                    <h3>Search Your Flight</h3>
                    <p>Start your search by filling in the flight details.</p>
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item interval={1000} className="carousel-welcome">
              <div className="h-100 row row-cols-1">
                <img
                  className="d-block w-100 h-50 mt-5"
                  src="/assets/img/logoLight.svg"
                  alt="First slide"
                />
                <div>
                  <Carousel.Caption className="caption">
                    <h3>Choose and Book Flight</h3>
                    <p>
                      Airline name, flight schedule, and ticket price will be
                      shown on the search results page. Choose and book the best
                      flight for you.
                    </p>
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1000} className="carousel-welcome">
              <div className="h-100 row row-cols-1">
                <img
                  className="d-block w-100 h-50 mt-5"
                  src="/assets/img/logoLight.svg"
                  alt="First slide"
                />
                <div>
                  <Carousel.Caption className="caption">
                    <h3>Fill In Contact Information and Passenger Details</h3>
                    <p>
                      After choosing your flight, fill in the contact
                      information and passenger details.
                    </p>
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
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
                onClick={handleSignIn}
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
