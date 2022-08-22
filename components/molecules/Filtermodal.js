import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/searchFlight/type";

export default function NewContactModal({ closeModal }) {

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(
      idRef.current.value,
      nameRef.current.value,
      priceRef.current.value
    );
    





  }

  return (
    <>
      <Modal.Header closeButton>Filter</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* {["checkbox", "radio"].map((type) => ( */}
          <h6>Transit</h6>
          {["Direct", "Transit", "Transit 2+"].map((item) => (
            <div key={`${item}`} className="mb-3">
              <Form.Check
                type={`checkbox`}
                id={`${item}`}
                label={` ${item}`}
              />
            </div>
          ))}
          <h6>Facilities</h6>
          {["Luggage", "In-flight meal", "Wifi"].map((item) => (
            <div key={`${item}`} className="mb-3">
              <Form.Check
                type={`checkbox`}
                id={`${item}`}
                label={` ${item}`}
              />
            </div>
          ))}
          <h6>Departure Time</h6>
          {[
            "00:00 - 06:00",

            "06:00 - 12:00t",

            "12:00 - 18:00",

            "18:00 - 20:00",
          ].map((item) => (
            <div key={`${item}`} className="mb-3">
              <Form.Check
                type={`checkbox`}
                id={`${item}`}
                label={` ${item}`}
              />
            </div>
          ))}
          <h6>Time Arrived</h6>
          {[
            "00:00 - 06:00",

            "06:00 - 12:00t",

            "12:00 - 18:00",

            "18:00 - 20:00",
          ].map((item) => (
            <div key={`${item}`} className="mb-3">
              <Form.Check
                type={`checkbox`}
                id={`${item}`}
                label={` ${item}`}
              />
            </div>
          ))}
          <h6>Airlines</h6>
          {["Garuda Indonesia", "Air Asia", "Lion Air"].map((item) => (
            <div key={`${item}`} className="mb-3">
              <Form.Check
                type={`checkbox`}
                id={`${item}`}
                label={` ${item}`}
              />
            </div>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
