import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MdDelete, MdEdit } from "react-icons/md";

function Show({ show, getinfo, data }) {
  const [editshow, setEditShow] = useState(false);
  const initial = { username: "", address: "", contact: "", email: "" };

  const [editformData, setEditformData] = useState(initial);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getinfo();
  }, [show]);

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
    getinfo();
  };
  const setEditHandler = (i) => {
    const { username, address, contact, email, _id } = i;
    setEditformData({ username, address, contact, email, _id });
    handleEditShow();
  };
  const editRequest = () => {
    const body = { ...editformData };
    console.log(body);
    axios
      .put("http://localhost:5000/updateinfo", body)
      .then((res) => {
        handleEditClose();
        getinfo();
      })
      .catch((err) => console.log(err));
    getinfo();
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">USERNAME</th>
            <th scope="col">ADDRESS</th>
            <th scope="col">CONTACT</th>
            <th scope="col">EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((i) => (
                <tr key={i._id}>
                  <td>{i.username}</td>
                  <td>{i.address}</td>
                  <td>{i.contact}</td>
                  <td>{i.email}</td>
                  <td>
                    <MdEdit
                      className="mr-3 text-info"
                      onClick={() => setEditHandler(i)}
                      style={{ fontSize: "1.4rem" }}
                    />
                    <MdDelete
                      onClick={() => {
                        handleDelete(i._id);
                      }}
                      style={{ fontSize: "1.4rem" }}
                      className="text-danger"
                    />
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <div>
        {/* <Button variant="primary" onClick={handleEditShow}>
          Add new User
        </Button> */}

        <Modal show={editshow} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-group">
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  value={editformData.username}
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter Full name"
                  onChange={(e) => {
                    setEditformData({
                      ...editformData,
                      username: e.target.value,
                    });
                  }}
                />
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  value={editformData.address}
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Enter Address"
                  onChange={(e) => {
                    setEditformData({
                      ...editformData,
                      address: e.target.value,
                    });
                  }}
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="contact">Contact</label>
                  <input
                    value={editformData.contact}
                    type="text"
                    class="form-control"
                    id="contact"
                    placeholder="Enter Contact"
                    onChange={(e) => {
                      setEditformData({
                        ...editformData,
                        contact: e.target.value,
                      });
                    }}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input
                    value={editformData.email}
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email"
                    onChange={(e) => {
                      setEditformData({
                        ...editformData,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </form>
            <button
              type="button"
              class="btn btn-primary btn-block"
              onClick={() => editRequest()}
            >
              Save Changes
            </button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
export default Show;
