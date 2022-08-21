import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
// import { useContacts } from '../contexts/ContactsProvider'

export default function NewContactModal({ closeModal }) {
  const idRef = useRef()
  const nameRef = useRef()
  const priceRef = useRef()
//   const { createContact } = useContacts()

  function handleSubmit(e) {
    e.preventDefault()

    createContact(idRef.current.value, nameRef.current.value, priceRef.current.value)
    closeModal()
  }

  return (
    <>
      <Modal.Header closeButton>Create Card</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="number" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="price" ref={priceRef} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}