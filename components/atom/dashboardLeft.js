import React from "react";
import { MdOutlineFlight, MdSignalWifiStatusbarNull } from "react-icons/md";
import { SiEthiopianairlines } from "react-icons/si";
import { TbView360 } from "react-icons/tb";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/admin/type";
import {SET_AUTH} from "../../redux/auth/type";
import { useRouter} from "next/router"
import Swal from "sweetalert2";


const dashboardLeft = () => {
const router = useRouter();

  const dispatch = useDispatch();

  const handleFlight =(e) =>{
    e.preventDefault();
    dispatch({
      type: Type.SET_BTN_FLIGHT,
      payload: {
        buttonFlight: true,
      },
    })
    dispatch({
      type: Type.SET_BTN_AIRLINE,
      payload: {
        buttonAirline: false,
      },
    })
    dispatch({
      type: Type.SET_BTN_COUNTRY,
      payload: {
        buttonCountry: false,
      },
    })
  }
  const handleAirline =(e) =>{
    e.preventDefault();
    dispatch({
      type: Type.SET_BTN_AIRLINE,
      payload: {
        buttonAirline: true,
      },
    })
    dispatch({
      type: Type.SET_BTN_FLIGHT,
      payload: {
        buttonFlight: false,
      },
      })
      dispatch({
        type: Type.SET_BTN_COUNTRY,
        payload: {
          buttonCountry: false,
        },
      })
  }
  const handleCountry =(e) =>{
    e.preventDefault();
    dispatch({
      type: Type.SET_BTN_COUNTRY,
      payload: {
        buttonCountry: true,
      },
    })
    dispatch({
      type: Type.SET_BTN_FLIGHT,
      payload: {
        buttonFlight: false,
      },
      })
      dispatch({
        type: Type.SET_BTN_AIRLINE,
        payload: {
          buttonAirline: false,
        },
      })

  }

  const handleLogout =()=>{
    dispatch({
      type: SET_AUTH,
      payload: {
        token: null,
      },
    });
    Swal.fire({
      title: 'Logout berhasil',
      width: 389,
      icon: "success",
    });
    router.push("/")
  }

  return (
    <>
      <nav className="navbar  rounded">
        <div className="container-fluid overflow-hidden">
          <a className="navbar-brand d-flex navbar-expand" href="/dashboard">
            <img
              src="/logos.png"
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            <p className="d-inline ms-4 bar-brand text-center  fw-bold p-1">
              DASBOARD
            </p>
          </a>
        </div>
      </nav>
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="mt-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <MdOutlineFlight />Flight 
          </Accordion.Header>
          <Accordion.Body>
            <div className="container text-center">
              <div className="row row-cols-1">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={handleFlight}
                  >
                     Flight Information
                  </button>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <SiEthiopianairlines /> Airlines
          </Accordion.Header>
          <Accordion.Body>
            <div className="container text-center">
              <div className="row row-cols-1">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={handleAirline}
                  >
                    Airlines Workspaces
                  </button>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <TbView360 />Country
          </Accordion.Header>
          <Accordion.Body>
            <div className="container text-center">
              <div className="row row-cols-1">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={handleCountry}
                  >
                    Country
                  </button>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <button type="button" className="btn btn-light mt-5 p-2" onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default dashboardLeft;
