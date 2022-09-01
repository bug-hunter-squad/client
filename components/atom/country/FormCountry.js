import React from 'react'
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FormData from "form-data";
import { useSelector } from "react-redux";
import Image from 'next/image';
import Swal from "sweetalert2";

const FormCountry = () => {
  const { admin } = useSelector((state) => state);
  let valueAdmin;
  if (admin?.addCountry === null) {
    return (valueAdmin = "");
  } else {
    valueAdmin = admin.addCountry;
  }


  const [show, setShow] = React.useState(valueAdmin ? valueAdmin : false);
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [images, setImages] = React.useState("");
  const [preview, setImagePreview] = React.useState();


  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImages(uploaded);
    setImagePreview(URL?.createObjectURL(uploaded));
  };
  const handleSaveChange = async (req, res) =>{
    const data = new FormData();
    data.append("city", city),
    data.append("country", country),
    data.append("countryImage", images),
    Axios.post("https://bug-hunter-squad.herokuapp.com/country", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      const notif = response?.data?.message;
      Swal.fire({
        title: notif,
        width: 389,
        icon: "success",
      });
    })
    .catch((error) => {
      const notif = error?.response?.data?.message;
      Swal.fire({
        title: notif,
        width: 389,
        icon: "error",
      });
    });
  }

  const handleClose = () => {
    setShow(false);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Country</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="New York City"
                autoFocus
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="USA etc.."
                autoFocus
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="file"
                placeholder="image.png | jpg | webp max 1mb"
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
  )
}

export default FormCountry