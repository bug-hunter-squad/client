import React from "react";
import { MdOutlineFlight } from "react-icons/md";
import { SiEthiopianairlines } from "react-icons/si";
import { IoTicket } from "react-icons/io5";
import { TbView360 } from "react-icons/tb";
import { AiOutlineEdit } from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import Link from "next/link";
import FormData from "form-data";
import Swal from "sweetalert2";

const admin = () => {
  const { mutate } = useSWRConfig();
  const [display, setDisplay] = React.useState(false);
  const [displayAirlines, setDisplayAirlines] = React.useState(false);
  const [displayTicket, setDisplayTicket] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [idAirLine, setIdAirLine] = React.useState("");
  const [original, setOriginal] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [gate, setGate] = React.useState("");
  const [terminal, setTerminal] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [childTicket, setChildTicket] = React.useState("");
  const [adultTicket, setAdultTicket] = React.useState("");
  const [depature, setDepature] = React.useState("");
  const [arival, setArival] = React.useState("");
  const [wifi, setWiFi] = React.useState("");
  const [meal, setmeal] = React.useState("");
  const [lugage, setLugage] = React.useState("");

  const [nameAirline, setNameAirline] = React.useState("");
  const [images, setImages] = React.useState("");
  const [picAirline, setPic] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [picNumber, setPicNumber] = React.useState("");

  const [shows, setShows] = React.useState(false);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  const handleCloser = () => setShow(false);

  const fetcher = async () => {
    const response = await Axios.get("https://bug-hunter-squad.herokuapp.com/flight");
    return response.data.flightInformation;
  };


  const DeleteFlight = async (flightId) => {
    await Axios.delete(`https://bug-hunter-squad.herokuapp.com/flight/${flightId}`);
    mutate("flight");
  };
  const { data } = useSWR("flight", fetcher);
  if (!data)
    return (
      <div className="spinner-border text-primary position-absolute top-50 start-50" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );



  const handleClose = async () => {
    await Axios.post("https://bug-hunter-squad.herokuapp.com/flight", {
      airline_id: idAirLine,
      original: original,
      destination: destination,
      gate: gate,
      terminal: terminal,
      price: price,
      total_child_ticket: childTicket,
      total_adult_ticket: adultTicket,
      departure_time: depature,
      arrival_time: arival,
      wifi: wifi,
      meal: meal,
      luggage: lugage,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.err)
      .finally(() => {
        setShow(false);
      });
  };

  const handleShow = () => setShow(true);

  const handleFlight = (e) => {
    e.preventDefault();
    setDisplay(true);
    setDisplayAirlines(false);
    setDisplayTicket(false);
  };

  const handleAirlines = (e) => {
    e.preventDefault();
    setDisplayAirlines(true);
    setDisplay(false);
    setDisplayTicket(false);
  };

  const handleTicket = (e) => {
    e.preventDefault();
    setDisplayTicket(true);
    setDisplayAirlines(false);
    setDisplay(false);
  };
  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImages(uploaded);
    setImagePreview(URL.createObjectURL(uploaded));
  };

  const handleSaveChange = () => {
    const data = new FormData();
    data.append("airline_name", nameAirline),
    data.append("airline_logo", images),
    data.append("airline_pic", picAirline),
    data.append("airline_pic_phone_number", picNumber);
    data.append("airline_status", status), 

      Axios.post("https://bug-hunter-squad.herokuapp.com/airlines", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(() => {
          Swal.fire({
            title: "Images successfully uploaded",
            text: "refresh your browser",
            width: 389,
            icon: "success",
          });
          router.push("/dashboard");
        })
        .catch((err) => {
          Swal.fire({
            title: "Something went wrong",
            text: "Check the your input",
            width: 389,
            icon: "error",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Input Flight</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>airline_id</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={idAirLine}
                onChange={(e) => setIdAirLine(e.target.value)}
              >
                <option></option>
                <option value="1">One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>original</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jakarta"
                autoFocus
                value={original}
                onChange={(e) => setOriginal(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Medan"
                autoFocus
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>gate</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={gate}
                onChange={(e) => setGate(e.target.value)}
              >
                <option></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>terminal</Form.Label>
              <Form.Control
                type="text"
                placeholder="05/B5"
                autoFocus
                value={terminal}
                onChange={(e) => setTerminal(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="200000"
                autoFocus
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>total_child_ticket</Form.Label>
              <Form.Control
                type="text"
                placeholder="1++"
                autoFocus
                value={childTicket}
                onChange={(e) => setChildTicket(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>total_adult_ticket</Form.Label>
              <Form.Control
                type="text"
                placeholder="1++"
                autoFocus
                value={adultTicket}
                onChange={(e) => setAdultTicket(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>departure_time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="2022-08-24T10:00+7"
                autoFocus
                value={depature}
                onChange={(e) => setDepature(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>arrival_time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="2022-08-24T10:00+7"
                autoFocus
                value={arival}
                onChange={(e) => setArival(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>wifi</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={wifi}
                onChange={(e) => setWiFi(e.target.value)}
              >
                <option></option>
                <option value="true">true</option>
                <option value="false">false</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>meal</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={meal}
                onChange={(e) => setmeal(e.target.value)}
              >
                <option></option>
                <option value="true">true</option>
                <option value="false">false</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>luggage</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={lugage}
                onChange={(e) => setLugage(e.target.value)}
              >
                <option></option>
                <option value="true">true</option>
                <option value="false">false</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloser}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container-fluid text-center ">
        <div className="row">
          <div className="col-sm-3 col-left top-0 start-0 ">
            <nav className="navbar bg-light rounded">
              <div className="container-fluid overflow-hidden">
                <a
                  className="navbar-brand d-flex navbar-expand"
                  href="/dashboard"
                >
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/124_Fantasy_Flight_Games-256.png"
                    alt=""
                    width="40"
                    height="40"
                    className="d-inline-block align-text-top"
                  />
                  {"  "}
                  <p className="d-inline ms-2text-center .fs2 fw-bold p-1">
                    {" "}
                    DASBOARD
                  </p>
                </a>
              </div>
            </nav>
            <Accordion defaultActiveKey={["0"]} alwaysOpen className="mt-2">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <MdOutlineFlight /> Flight
                </Accordion.Header>
                <Accordion.Body>
                  <div className="container text-center">
                    <div className="row row-cols-1">
                      <div className="col">
                        {" "}
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
                        {" "}
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={handleAirlines}
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
                  <IoTicket /> Ticket
                </Accordion.Header>
                <Accordion.Body>
                  <div className="container text-center">
                    <div className="row row-cols-1">
                      <div className="col">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={handleTicket}
                        >
                          Ticket Information
                        </button>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <TbView360 /> Overview
                </Accordion.Header>
                <Accordion.Body>
                  <div className="container text-center">
                    <div className="row row-cols-1">
                      <div className="col">
                        {" "}
                        <button type="button" className="btn btn-light">
                          Workspaces Settings
                        </button>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <AiOutlineEdit /> Edit Profile Admin
                </Accordion.Header>
                <Accordion.Body>
                  <div className="container text-center">
                    <div className="row row-cols-1">
                      <div className="col">
                        {" "}
                        <button type="button" className="btn btn-light">
                          Information Overview
                        </button>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>{" "}
          <div className="col-sm-9 col-right">
          
            <div className={display ? "d-block" : "d-none"}>
              <h3 className="text-center position-relative">
                Flight Information
              </h3>{" "}
              <button
                type="button"
                className="btn btn-warning btn-add"
                onClick={handleShow}
              >
                ADD
              </button>
              <div className="container table-flight">
                <table className="table table-striped table-inverse  p-2 table-responsive table-bordered ">
                  <thead className="thead-inverse">
                    <tr>
                      <th>flightId</th>
                      <th>original</th>
                      <th>destination</th>
                      <th>gate</th>
                      <th>terminal</th>
                      <th>price</th>
                      <th>Time</th>
                      <th>total_child_ticket</th>
                      <th>total_adult_ticket</th>
                      <th>departure_time</th>
                      <th>arrival_time</th>
                      <th>wifi</th>
                      <th>meal</th>
                      <th>luggage</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((flight, index) => (
                      <tr key={index}>
                        <td>{flight.flightId}</td>
                        <td>{flight.flightOriginal}</td>
                        <td>{flight.flightDestination}</td>
                        <td>{flight.flightGate}</td>
                        <td>{flight.flightTerminal}</td>
                        <td>{flight.flightPrice}</td>
                        <td>{flight.flightTime}</td>
                        <td>{flight.totalChildTicket}</td>
                        <td>{flight.totalAdultTicket}</td>
                        <td>{flight.flightDeparture}</td>
                        <td>{flight.flightArrival}</td>
                        <td>{flight.wifi ? "true" : "false"}</td>
                        <td>{flight.meal ? "true" : "false"}</td>
                        <td>{flight.luggage ? "true" : "false"}</td>
                        <td className="d-flex gap-2">
                          <Link href={`/flight/${flight.flightId}`}>
                            <a>
                              {" "}
                              <button type="button" className="btn btn-danger">
                                update
                              </button>
                            </a>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => DeleteFlight(flight.flightId)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>{" "}
            </div>
            <Modal show={shows} onHide={handleCloses}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Airlines Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Garuda Indonesia etc"
                      autoFocus
                      value={nameAirline}
                      onChange={(e) => setNameAirline(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Logo Airline</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="AirAsia.png | jpg | webp max 1mb"
                      autoFocus
                      onChange={handleUploadChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Airline Pic</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Admin Wings Air"
                      autoFocus
                      value={picAirline}
                      onChange={(e) => setPic(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>airline_pic_phone_number</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="021-000-003"
                      autoFocus
                      value={picNumber}
                      onChange={(e) => setPicNumber(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Airline Status </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option></option>
                      <option value="active">Active</option>
                      <option value="deactive">Deactive</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloses}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSaveChange}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <div className={displayAirlines ? "d-block" : "d-none"}>
              <h2 className="text-center">Airlines Workspaces</h2>
              <button
                type="button"
                className="btn btn-warning btn-add"
                onClick={handleShows}
              >
                ADD
              </button>
              <div className="container table-flight border">
                <table className="table table-striped table-inverse table-responsive table-bordered ">
                  <thead className="thead-inverse">
                    <tr>
                      <th>airline_name</th>
                      <th>airline_logo</th>
                      <th>airline_pic</th>
                      <th>airline_pic_phone_number</th>
                      <th>airline_status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">demo</td>
                      <td>demo</td>
                      <td>demo</td>
                      <td>demo</td>
                      <td>demo</td>
                      <td className="d-flex gap-2">
                        <Link href="#">
                          <a>
                            {" "}
                            <button type="button" className="btn btn-danger">
                              Update
                            </button>
                          </a>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => DeleteFlight(flight.flightId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>{" "}
            </div>
            <div className={displayTicket ? "d-block" : "d-none"}>
              <h2 className="text-center">Ticket Information</h2>
              <div className="container table-flight border ">
                <table className="table table-striped table-inverse table-responsive table-bordered ">
                  <thead className="thead-inverse">
                    <tr>
                      <th>Ticket Id</th>
                      <th>Jumlah Tiket anak</th>
                      <th>Jumlah tiket dewasa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">demo</td>
                      <td>demo</td>
                      <td>demo</td>
                    </tr>
                    <tr>
                      <td scope="row">demo</td>
                      <td>demo</td>
                      <td>demo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default admin;
