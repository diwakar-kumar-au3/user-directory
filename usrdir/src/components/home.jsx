import React, { useState } from "react";
import Add from "./add";
import axios from "axios";

import Show from "./show";
function Home() {
  const [data, setdata] = useState();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const getinfo = () => {
    axios
      .get("http://localhost:5000/getinfo")
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="row m-4">
        <div className="col">
          <h4>User Directory</h4>
        </div>
        <div className="col mb-5">
          <Add
            show={show}
            setShow={setShow}
            getinfo={getinfo}
            handleShow={handleShow}
          />
        </div>
      </div>
      <Show show={show} getinfo={getinfo} data={data} />
    </div>
  );
}
export default Home;
