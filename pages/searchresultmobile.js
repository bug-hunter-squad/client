import style from "../styles/SearchResultmobile.module.css";
import Image from "next/image";
import { ArrowLeftRight } from "react-bootstrap-icons";
import { ArrowDownUp } from "react-bootstrap-icons";
import React, {useState} from "react";
import Filter from "../components/molecules/Filtermodal";
import { Container,Modal } from "react-bootstrap";

function searchresult() {
  const [show, setShow] = React.useState(true);
  const handleShow = () => setShow(true);
  // const handleClose=()=>setClose(false)

  const [filter, setFilter] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <>
      <Container>
        <div className="col-lg-4 mx-auto col-sm">
          <div className={style.container}>
            <section>
              <div className="d-flex  justify-content-between">
                <div className="p-2 mx-3 mt-5">
                  <Image
                    src="/assets/img/btnback.svg"
                    alt="Logo"
                    height={18}
                    width={18}
                  />
                </div>
                <div className="p-2 mx-3 justify-content-end mt-5">
                  <p className={style.text}>Monday, 20 July 20</p>
                </div>
              </div>
              <div className="col-lg-4 mx-auto">
                <div className="d-flex mx-4  justify-content-between text-white">
                  <div className="">
                    <p className="p-0">From</p>
                    <h5 className="p-0">Medan</h5>
                    <p className="p-0">Indonesia</p>
                  </div>
                  <div className="d-flex ">
                    <p className="p-0 d-flex align-items-center">
                      <ArrowLeftRight />
                    </p>
                  </div>
                  <div className=" text-end">
                    <p className="p-0">To</p>
                    <h5 className="p-0 ">Jakarta</h5>
                    <p className="p-0  text-end">Indonesia</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={style.container2}>
            <div className="COL-12 mx-4 d-flex ">
              <div className="col-8">
                <p className="mt-4">Passanger</p>
                <h5 className="p-0">2 Child 4 Adults</h5>
              </div>
              <div className="col-4 text-start">
                <p className="mt-4">Class</p>
                <h5 className="p-0 ">Economy</h5>
              </div>
            </div>
          </div>
          <div className="d-flex mx-4 mt-3 justify-content-between ">
            <div className="">
              <p className="p-0">5 Flight Found</p>
            </div>
            <div className="d-flex text-end" style={{cursor:"pointer"}} onClick={() => setModalOpen(true)}>
              <p className=" mx-1 ">Filter</p>
              <div>
                <ArrowDownUp />
              </div>
            </div>
            {/* <div
              className="d-flex text-end"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFilter(true);
              }}
            >
              <p className=" mx-1 ">Filter</p>
              <div>
                <ArrowDownUp />
              </div>
            </div> */}
          </div>
          {filter && <Filter setFilter={setFilter} />}
          <div className={style.result}>
            {[...new Array(4)].map((item, index) => (
              <div
                className="card col-11 mx-auto"
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
                  <div className="col-9">
                    <div>
                      <section>
                        <div className="d-flex mx-4 justify-content-between ">
                          <div className="">
                            <h4 className="p-0">IDN</h4>
                            <p className="p-0">12:33</p>
                          </div>
                          <div className=" ">
                            <p className="p-2">
                              <Image
                                src="/assets/img/flightlogo.svg"
                                alt="Logo"
                                width="25"
                                height="25"
                                style={{ marginLeft: "-15px" }}
                              />
                            </p>
                          </div>
                          <div className=" text-end">
                            <h4 className="p-0 ">JPN</h4>
                            <p className="p-0  text-end">15:21</p>
                          </div>
                        </div>
                        <div className="d-flex mx-4 justify-content-between ">
                          <div className="">
                            <p className={style.fontsixe}>3 hours 11 minutes</p>
                          </div>
                          <div className=" text-end">
                            <h6 className="p-0  text-end text-primary">
                              $ 221
                            </h6>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Modal show={modalOpen} onHide={closeModal}>
        <Filter closeModal={closeModal} />
      </Modal>{" "}
    </>
  );
}

export default searchresult;
