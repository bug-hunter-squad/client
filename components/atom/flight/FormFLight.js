import Axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { ADD_FLIGHT } from "../../../redux/admin";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const FormFLight = () => {
  const dispatch = useDispatch();
  const router= useRouter();
  const { admin } = useSelector((state) => state);
  let valueAdmin;
  if (admin?.addFlight === null) {
    return (valueAdmin = "");
  } else {
    valueAdmin = admin.addFlight;
  }

  const [show, setShow] = React.useState(valueAdmin ? valueAdmin : false);
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
  const [idAirLine, setIdAirLine] = React.useState([]);
  const [airlineData, setDataAirline] = React.useState([]);
  const [countryData, setDataCountry] = React.useState([]);

  const handleSave = async () => {
    await Axios.post('https://bug-hunter-squad.herokuapp.com/flight', {
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
    }).then((response) => {
      const notif = response.data;
      Swal.fire({
        title: notif,
        width: 389,
        icon: "success",
      });
      router.push("/dashboard")
    })
    .catch((error) =>{
      console.log(error)
      const notif = error.response.data;
      Swal.fire({
        title: notif,
        width: 389,
        icon: "error",
      });
    });
  }
  
  const getAirLine = async (req, res) => {
    await Axios.get("https://bug-hunter-squad.herokuapp.com/airlines").then((res) => {
      setDataAirline(res.data.data);
    });
  };
  const getCountry = async (req, res) => {
    await Axios.get("https://bug-hunter-squad.herokuapp.com/country").then((res) => {
      setDataCountry(res.data);
    });
  };

  React.useEffect(() => {
    getAirLine();
    getCountry();
  }, []);

  const handleClose = () => {
    dispatch({
      type: ADD_FLIGHT,
      payload: {
        addFlight: false,
      },
    });
    setShow(false)
  };
  const handleCloses = () => {
    setShow(false)
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
              <Form.Label>ID Airline</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={idAirLine}
                onChange={(e) => setIdAirLine(e.target.value)}
              >
                {airlineData.map((item) => (
                  
                    <option key={item.id} value={item.id}>
                      {item.airline_name}
                    </option>
                  
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
                type="number"
                placeholder="1++"
                min={1}
                autoFocus
                value={childTicket}
                onChange={(e) => setChildTicket(e.target.value)}
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ticket Adult</Form.Label>
              <Form.Control
                type="number"
                placeholder="1++"
                autoFocus
                min={1}
                value={adultTicket}
                onChange={(e) => setAdultTicket(e.target.value)}
            
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Depature</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="2022-08-24T10:00+7"
                autoFocus
                value={depature}
                onChange={(e) => setDepature(e.target.value)}
          
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Arival</Form.Label>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloses}>Close</Button>
          <Button type="submit" variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormFLight;
