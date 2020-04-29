import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function Add({
  show,
  setShow,
  formData,
  setformData,
  handleClick,
  handleClose,
  handleShow,
  editMode,
  editRequest,
}) {
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      {console.log(show)}
      <Button variant="primary" onClick={handleShow}>
        Add new User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-group">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                value={formData.username}
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter Full name"
                onChange={(e) => {
                  setformData({ ...formData, username: e.target.value });
                }}
              />
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input
                value={formData.address}
                type="text"
                class="form-control"
                id="address"
                placeholder="Enter Address"
                onChange={(e) => {
                  setformData({ ...formData, address: e.target.value });
                }}
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="contact">Contact</label>
                <input
                  value={formData.contact}
                  type="text"
                  class="form-control"
                  id="contact"
                  placeholder="Enter Contact"
                  onChange={(e) => {
                    setformData({ ...formData, contact: e.target.value });
                  }}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="email">Email</label>
                <input
                  value={formData.email}
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setformData({ ...formData, email: e.target.value });
                  }}
                />
              </div>
            </div>
          </form>
          <button
            type="button"
            class="btn btn-primary btn-block"
            onClick={() => {
              editMode ? editRequest() : handleClick();
            }}
          >
            Add new User
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Add;
