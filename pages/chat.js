import { FiSearch } from "react-icons/fi";
import styleHome from "../styles/Home.module.css";
import { ChevronLeft } from "react-bootstrap-icons";
import { BsCheck2All } from "react-icons/bs";
import Contacts from "../components/molecules/Contacts";
import ChatContainer from "../components/organisms/ChatContainer";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";


function Chat() {
  // const navigate = useNavigate();
  // const socket = useRef();
  // const [contacts, setContacts] = useState([]);
  // const [currentChat, setCurrentChat] = useState(undefined);
  // const [currentUser, setCurrentUser] = useState(undefined);
  // useEffect(async () => {
  //   if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //     navigate("/login");
  //   } else {
  //     setCurrentUser(
  //       await JSON.parse(
  //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //       )
  //     );
  //   }
  // }, []);
  // useEffect(() => {
  //   if (currentUser) {
  //     socket.current = io(host);
  //     socket.current.emit("add-user", currentUser._id);
  //   }
  // }, [currentUser]);

  // useEffect(async () => {
  //   if (currentUser) {
  //     if (currentUser.isAvatarImageSet) {
  //       const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
  //       setContacts(data.data);
  //     } else {
  //       navigate("/setAvatar");
  //     }
  //   }
  // }, [currentUser]);
  // const handleChatChange = (chat) => {
  //   setCurrentChat(chat);
  // };
  return (
    <>
      <container>
        <div className="row">
          <div className="col-lg-4 ">
            <div className="d-flex mx-3  justify-content-between">
              <div className="p-2 mt-2">
                <ChevronLeft />
              </div>
              <div className="p-2 justify-content-end mt-2">
                <p>Filter</p>
              </div>
            </div>
            <h2 className="mx-4">Chat</h2>
            <div className="row mx-2 justify-content-lg-center px-1">
              <div className="col">
                <div className={`${styleHome.search} mb-2 mt-1`}>
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Where you want to go?"
                      required
                    />
                    <FiSearch className={styleHome.icon} />{" "}
                  </form>
                </div>
              </div>
            </div>
            {[...new Array(4)].map((item, index) => (
              <div
                className=" col-11 mx-auto"
                style={{
                  borderRadius: "15px",
                  padding: "10px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
                key={index}
              >
                <div className="row ">
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <img
                      src="/assets/img/logomaskapai.png"
                      width="70px"
                      height="70px"
                      alt="image"
                    />
                  </div>
                  <div className="col-6">
                    <div>
                      <h2>User Name</h2>
                      <p>I have no Idea</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <p>00:22</p>
                      <BsCheck2All />
                    </div>
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
          </div>
          <div className="col-lg-4 ">
          <form className="input-container" >
        <input
          type="text"
          placeholder="type your message here"
        //   onChange={(e) => setMsg(e.target.value)}
        //   value={msg}
        />

        <button type="submit">
          <IoMdSend />
        </button>
      </form>
          </div>
        </div>
      </container>
    </>
  );
}

export default Chat;
