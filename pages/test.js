
import { Button,Modal } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import AddCard from "../components/molecules/AddCard";

function Profile() {

  const [modalOpen, setModalOpen] = useState(false)
  function closeModal() {
    setModalOpen(false)
  }

  return (
    <>
      <Button onClick={() => setModalOpen(true)} className="rounded-0">
        New Contact
      </Button>

      <Modal show={modalOpen} onHide={closeModal}>
      <AddCard closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default Profile;
