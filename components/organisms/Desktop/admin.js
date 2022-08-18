import React from "react";
import { MdOutlineFlight } from "react-icons/md";
import { SiEthiopianairlines } from "react-icons/si";
import { IoTicket } from "react-icons/io5";
import { TbView360 } from "react-icons/tb";
import { AiOutlineEdit } from "react-icons/ai";

const admin = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row border">
          <div className="col-3 border section clr-primer">
            <div className="container">
              <div className="row row-cols-1 gap-2">
                <div className="col p-2">
                  <nav className="navbar bg-danger container-fluid rounded">
                    <div className="container-fluid">
                      <span className="navbar-brand mb-0 h1">Bug Hunter</span>
                    </div>
                  </nav>
                </div>
                <div className="col ">
                  <button type="button" className="btn btn-light w-100">
                    <MdOutlineFlight className="icons-dasboard"/> Flight
                  </button>
                </div>
                <div className="col ">
                  <button type="button" className="btn btn-light w-100">
                    <SiEthiopianairlines className="icons-dasboard"/> Airlines
                  </button>
                </div>
                <div className="col ">
                  <button type="button" className="btn btn-light w-100">
                    <IoTicket className="icons-dasboard"/> Tiket
                  </button>
                </div>
                <div className="col ">
                  <button type="button" className="btn btn-light w-100">
                    <TbView360 className="icons-dasboard"/> Overview
                  </button>
                </div>
                <div className="col ">
                  <button type="button" className="btn btn-light w-100">
                    <AiOutlineEdit className="icons-dasboard"/> Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 border h-100">
            <nav className="navbar bg-light container-fluid m-0">
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default admin;
