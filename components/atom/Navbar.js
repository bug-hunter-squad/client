import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { decode} from "jsonwebtoken"
import useSWR from "swr";
import Axios from "axios";

const Navbars = () => {
    const { auth} = useSelector((state) => state)
    const convert = decode(auth?.token)
    const userId  = convert?.id
    const fetcher = async () => {
      const response = await Axios.get(
        `https://bug-hunter-squad.herokuapp.com/profile/${userId}`
      );
      return response?.data;
    };

    const { data } = useSWR("user", fetcher);
    const result = [data]
  return (
    <>
      <Navbar bg="light" expand="lg " className="navbar-admin">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          {result.map((item) => (
              <div className="d-flex mt-2" key={item?.id}>
            <p className="me-2">{item?.name? item?.name : 'uknown'}</p>
            <img
              src={item?.profilePicture? item?.profilePicture   : "/avatar.png"}
              alt="avatar"
              width="100%"
              height="100%"
              className="avatar"
            />
          </div>
          ))}
        
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
