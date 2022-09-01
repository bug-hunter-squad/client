import React from "react";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import Swal from "sweetalert2";

const Flight = (req, res) => {
  React.useEffect(() => {
    getddata(),
    getCountry()
  },[])
  const getddata  = async (req, res) =>{
    const response = await Axios.get("http://localhost:8500/airlines");
    setReseult(response.data.data);
  }
  const getCountry = async (req, res) => {
    await Axios.get("http://localhost:8500/country").then((res) => {
      setDataCountry(res.data);
    });
  };
  const router = useRouter();
  const {
    query: { flightId },
  } = router;
  const [countryData, setDataCountry] = React.useState([]);
  const [airlinesData, setReseult] = React.useState([])
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
  const [isloading, setisloading] = React.useState(false);

  const handleUpdate = async (req, res) => {
    setisloading(true);
    await Axios.patch(`http://localhost:8500/flight/${flightId}`, {
      airline_id: idAirLine,
      originalId: original,
      destinationId: destination,
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
      .then((response) => {
        const notif = response.data;
        Swal.fire({
          title: notif,
          width: 389,
          icon: "success",
        });
        router.push("/dashboard");
      })
      .catch((error) => {
        const notif = error.response.data;
        Swal.fire({
          title: notif,
          width: 389,
          icon: "error",
        });
      })
      .finally(() => {
        setisloading(false);
      });
  };

  const handleBack =  () =>{
    router.push("/dashboard")
  }

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-2">Edit Flight</h3>
        <div className="row mt-5 p-3 rounded shadow-lg">
          <div className="col-sm-6 d-flex flex-columns justify-content-center align-items-center">
            <Form className="row row-cols-4  p-2">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID Airline</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={idAirLine}
                onChange={(e) => setIdAirLine(e.target.value)}
              >{airlinesData.map((item) =>(
                <option key={item.id} value={item.id}>{item.airline_name}</option>
              ))}
               
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Original</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={original}
                onChange={(e) => setOriginal(e.target.value)}
              
              >
                {countryData?.map((item) => (
                  <>
                    <option key={item.id} value={item.id}>
                      {item.city}
                    </option>
                  </>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Destination</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                
              >
              {countryData?.map((data) => (
                <>
                  <option key={data.id} value={data.id}>
                    {data.city}
                  </option>
                </>
              ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gate</Form.Label>
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
              <Form.Label>Terminal</Form.Label>
              <Form.Control
                type="text"
                placeholder="05/B5"
                autoFocus
                value={terminal}
                onChange={(e) => setTerminal(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="200000"
                autoFocus
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ticket Child</Form.Label>
              <Form.Control
                type="text"
                placeholder="1++"
                autoFocus
                value={childTicket}
                onChange={(e) => setChildTicket(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ticket Adult</Form.Label>
              <Form.Control
                type="text"
                placeholder="1++"
                autoFocus
                value={adultTicket}
                onChange={(e) => setAdultTicket(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Depature Time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="2022-08-24T10:00+7"
                autoFocus
                value={depature}
                onChange={(e) => setDepature(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Arrival Time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="2022-08-24T10:00+7"
                autoFocus
                value={arival}
                onChange={(e) => setArival(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Wifi</Form.Label>
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
              <Form.Label>Meal</Form.Label>
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
              <Form.Label>Luggage</Form.Label>
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
              <div className=" d-flex m-2">
                <button
                  type="button"
                  className="btn btn-success m-2"
                  onClick={handleUpdate}
                >
                  {isloading ? "Loading..." : "Save"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger m-2"
                  onClick={handleBack}
                >
                  Back
                </button>
              </div>
            </Form>
          </div>
          <div className="col-sm-6 overflow-hidden p-2 clr-primer rounded-lg d-flex flex-columns justify-content-center align-items-center">
            <img
              className="d-block w-50 h-50 mt-5 rounded-lg "
              src="/assets/img/bg-logo.svg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Flight;
