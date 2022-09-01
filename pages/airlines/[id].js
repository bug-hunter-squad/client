import React from "react";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import FormData from "form-data";
import Image from "next/image";
import Swal from "sweetalert2";

const airlines = () => {
  const {
    query: { id: id },
  } = useRouter();
  const router = useRouter();

  const [nameAirline, setNameAirline] = React.useState("");
  const [images, setImages] = React.useState("");
  const [picAirline, setPic] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [picNumber, setPicNumber] = React.useState("");
  const [preview, setImagePreview] = React.useState();
  const [isloading, setIsLoading] = React.useState(false);

  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImages(uploaded);
    setImagePreview(URL?.createObjectURL(uploaded));
  };

  const handleUpdate = async () => {
    setIsLoading(true)
    const data = new FormData();
      data.append("airline_name", nameAirline),
      data.append("airline_logo", images),
      data.append("airline_pic", picAirline),
      data.append("airline_pic_phone_number", picNumber);
      data.append("airline_status", status),
      await Axios.patch(`https://bug-hunter-squad.herokuapp.com/airlines/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        Swal.fire({
          title: "Update success",
          width: 389,
          text: `You see in dashboard`,
          icon: "success",
        });
        router.push("/dashboard")
        })
        .catch((err) => {
          Swal.fire({
            title: "Error updates",
            width: 389,
            text: "Please try again",
            icon: "error",
          });

        }).finally(() =>{
          setIsLoading(false);
        })
  };
  const handleBack = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5 p-3 rounded shadow-lg">
          <div className="col-sm-6 d-flex flex-columns justify-content-center align-items-center">
            <Form className="row row-cols-2 p-2">
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
                <Form.Label>PIC Number</Form.Label>
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
                <Image
                  src={preview ? preview : "/assets/img/airasia.png"}
                  width={100}
                  height={100}
                  alt={"preview images"}
                  className="mt-2"
                />
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

export default airlines;
