import React from 'react'
import Swal from "sweetalert2";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import FormData from "form-data";
import Image from 'next/image';
import { useRouter } from 'next/router';


const CountryId = () => {
    const {
        query: { id: id },
      } = useRouter();
      const router = useRouter();
      
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [images, setImages] = React.useState("");
  const [preview, setImagePreview] = React.useState();
  const [isloading, setIsLoading] = React.useState(false);

    const handleUploadChange = (e) => {
        let uploaded = e.target.files[0];
        setImages(uploaded);
        setImagePreview(URL?.createObjectURL(uploaded));
      };
    const handleUpdate = async (req, res) =>{
        setIsLoading(true);
        const data = new FormData();
        data.append("city", city),
        data.append("country", country),
        data.append("countryImage", images),
        Axios.patch(`https://bug-hunter-squad.herokuapp.com/country/${id}`, data, {
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
          router.push("/dashboard")
        })
        .catch((error) => {
            console.log(error);
          const notif = error?.response?.data?.message;
          Swal.fire({
            title: notif,
            width: 389,
            icon: "error",
          });
        }).finally(()=>{
            setIsLoading(false);
        })
      }

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
  )
}

export default CountryId;