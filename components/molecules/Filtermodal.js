import axios from "axios";
import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import * as Type from "../../redux/filter/type";

export default function NewContactModal() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state);
  let value;
  if (filter === null) {
    return (value = "");
  } else {
    value = filter?.filter?.filter;
  }
  const [show, setShow] = React.useState(value ? value : false);
  const [airlinesData, setAirlinesData] = React.useState([]);
  const [typeClass, setTypeClass] = React.useState("");
  const [airlinesId, setAirlinesId] = React.useState("");
  const [arrivalTime, setArrivalTime] = React.useState("");
  const [departureTime, setDepatureTime] = React.useState("");
 

  const handleClose = () => setShow(false);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: Type.SET_MEAL,
      payload: {
        meal: true,
      },
    });
  }
  const hanldeDisable = () => {
    Swal.fire({
      title: "Sorry features will be coming soon",
      width: 389,
      icon: "info",
    });
  };
  const handleTypeClass = (e) => {
    e.preventDefault();
    setTypeClass(e.target.value);
  };
  const handleTimeDepature = (e) => {
    e.preventDefault();
    setDepatureTime(e.target.value);
  };
  const handleTimeArrived = (e) => {
    e.preventDefault();
    setArrivalTime(e.target.value);
  };
  const handleAirlines = (e) => {
    e.preventDefault();
    setAirlinesId(e.target.value);
  };

  React.useEffect(() => {
    getAirlines();
  }, []);
  const getAirlines = async (req, res) => {
    await axios
      .get("https://bug-hunter-squad.herokuapp.com/airlines")
      .then((res) => {
        setAirlinesData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>Filter</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <h6>Transit</h6>
            {["Direct", "Transit", "Transit 2+"].map((item) => (
              <div key={`${item}`} className="">
                <Form.Check
                  type={`radio`}
                  id={`${item}`}
                  label={` ${item}`}
                  onClick={hanldeDisable}
                />
              </div>
            ))}
            <h6>Facilities</h6>
            <div className=" mb-3 col-12 justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="Luggage"
                  // onChange={handleClassType}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Luggage
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="Meal"
                  // onChange={handleClassType}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Meal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="Wifi"
                  // onChange={handleClassType}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Wifi
                </label>
              </div>
            </div>
            <h6>Departure Time</h6>
            <div className=" mb-3 col-12 justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="00:00 - 06:00"
                  onChange={handleTimeDepature}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  00:00 - 06:00
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="06:00 - 12:00"
                  onChange={handleTimeDepature}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  06:00 - 12:00
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="18:00 - 20:00"
                  onChange={handleTimeDepature}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  18:00 - 20:00
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="12:00 - 18:00"
                  onChange={handleTimeDepature}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  12:00 - 18:00
                </label>
              </div>
            </div>
            <h6>Time Arrived</h6>
            <div className=" mb-3 col-12 justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="00:00 - 06:00"
                  onChange={handleTimeArrived}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  00:00 - 06:00
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="06:00 - 12:00"
                  onChange={handleTimeArrived}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  06:00 - 12:00
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="18:00 - 20:00"
                  onChange={handleTimeArrived}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  18:00 - 20:00
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="12:00 - 18:00"
                  onChange={handleTimeArrived}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  12:00 - 18:00
                </label>
              </div>
            </div>
            <h6>Airlines</h6>
            {airlinesData.map((item) => (
              <div key={`${item.id}`} className="mb-3">
                <Form.Check
                  type={`checkbox`}
                  id={`${item}`}
                  label={` ${item.airline_name}`}
                  value={`${item.id}`}
                  onChange={handleAirlines}
                />
              </div>
            ))}
            <Button type="submit">Create</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
