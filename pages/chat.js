import { FiSearch } from "react-icons/fi";
import styleHome from "../styles/Home.module.css";
import { ChevronLeft } from "react-bootstrap-icons";
import { BsCheck2All } from "react-icons/bs";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

function Chat() {
  return (
    <>
      <container>
        <div className="row">
          <div className="col-lg-4 mx-auto ">
            <div className="d-flex mx-3  justify-content-between">
              <div className="p-2 mt-2">
                <ChevronLeft />
              </div>
              <div className="p-2 justify-content-end mt-2">
                <p>Filter</p>
              </div>
            </div>
            <h2 className="mx-4">Chat</h2>
            <div className="row mx-2 justify-content-lg-center px-1">
              <div className="col">
                <div className={`${styleHome.search} mb-2 mt-1`}>
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Where you want to go?"
                      required
                    />
                    <FiSearch className={styleHome.icon} />{" "}
                  </form>
                </div>
              </div>
            </div>
            {[...new Array(2)].map((item, index) => (
              <div
                className=" col-11 mx-auto"
                style={{
                  borderRadius: "15px",
                  padding: "10px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
                key={index}
              >
                <div className="row ">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <img
                      src="/assets/img/logomaskapai.png"
                      width="70px"
                      height="70px"
                      alt="image"
                    />
                  </div>
                  <div className="col-6">
                    <div>
                      <h5>User Name</h5>
                      <p>I have no Idea</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <p>00:22</p>
                      <BsCheck2All />
                    </div>
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
            <div className="row mx-auto col-10">
              <div className="col-3  d-flex justify-content-center align-items-center">
                <div
                  style={{
                    backgroundImage: `url(/assets/img/logomaskapai.png)`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
                    height: "70px",
                    width: "70px",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "green",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "10px",
                      width: "10px",
                      display: "flex",
                      justifyContent:"flex-end",
                      alignItems:"flex-end",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <h5>User Name</h5>
                  <p>I have no Idea</p>
                </div>
              </div>
              <div className="col-3">
                <div>
                  <p>00:22</p>
                  <BsCheck2All className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </container>
    </>
  );
}

export default Chat;
