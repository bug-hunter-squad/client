import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { decode} from "jsonwebtoken"

const Navbars = () => {
    const { auth} = useSelector((state) => state)
    const convert = decode(auth?.token)
    const name  = convert?.name
    const picture = convert?.profilePicture
  return (
    <>
      <Navbar bg="light" expand="lg " className="navbar-admin">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          
          <div className="d-flex mt-2">
            <p className="me-2">{name? name : 'uknown'}</p>
            <img
              src={picture !== null ? picture: "/avatar.png"}
              alt="avatar"
              width="100%"
              height="100%"
              className="avatar"
            />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
