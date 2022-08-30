import React from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SET_BTN_AIRLINE,ADD_AIRLINE} from "../../../redux/admin";
import { useRouter } from "next/router";
import Image from "next/image";
import Swal from "sweetalert2";
import FormData from "form-data";

const FormAirline = () => {
  const dispatch = useDispatch();
  const router= useRouter();
  const { admin } = useSelector((state) => state);
  let valueAdmin;
  if (admin?.addAirline === null) {
    return (valueAdmin = "");
  } else {
    valueAdmin = admin.addAirline;
  }

  const [show, setShow] = React.useState(valueAdmin ? valueAdmin : false);
  const [nameAirline, setNameAirline] = React.useState("");
  const [images, setImages] = React.useState("");
  const [picAirline, setPic] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [picNumber, setPicNumber] = React.useState("");
  const [preview, setImagePreview] = React.useState();

  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImages(uploaded);
    setImagePreview(URL?.createObjectURL(uploaded));
  };

  const handleSaveChange = () => {
    const data = new FormData();
      data.append("airline_name", nameAirline),
      data.append("airline_logo", images),
      data.append("airline_pic", picAirline),
      data.append("airline_pic_phone_number", picNumber);
      data.append("airline_status", status),
      Axios.post("http://localhost:8500/airlines", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          const notif = response.data;
          Swal.fire({
            title: notif,
            width: 389,
            icon: "success",
          });
          router.push("/dashboard")
        })
        .catch((error) => {
          const notif = error.response.data;
          Swal.fire({
            title: notif,
            width: 389,
            icon: "error",
          });
        });
  };

  const handleClose = () => {
    setShow(false)
    // dispatch({
    //   type: ADD_AIRLINE,
    //   payload: {
    //     buttonAirline: false,
    //   },
    // });
  };



  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Airline</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Airlines Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Garuda Indonesia etc"
                autoFocus
                value={nameAirline}
                onChange={(e) => setNameAirline(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Logo Airline</Form.Label>
              <Form.Control
                type="file"
                placeholder="AirAsia.png | jpg | webp max 1mb"
                autoFocus
                onChange={handleUploadChange}
              />
              <Image
                src={preview ? preview : "/placeholder.png"}
                width={100}
                height={100}
                alt={"preview images"}
                className="mt-2"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Airline Pic</Form.Label>
              <Form.Control
                type="email"
                placeholder="Admin Wings Air"
                autoFocus
                value={picAirline}
                onChange={(e) => setPic(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>airline_pic_phone_number</Form.Label>
              <Form.Control
                type="email"
                placeholder="021-000-003"
                autoFocus
                value={picNumber}
                onChange={(e) => setPicNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormAirline;
