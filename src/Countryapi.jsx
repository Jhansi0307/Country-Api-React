import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "reactstrap";
function Country() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const data = await axios.get(
        `https://613476997859e700176a38af.mockapi.io/api/v1/user`
      );
      setArray(data.data);
      // console.log(data.data);
    };
    loadData();
  }, []);
  // console.log(array);

  return (
    <div className="m-2 text-center">
      <Table>
        <thead>
          <tr>
          <th>S.No</th>

            <th>Name</th>
            <th>Email_id</th>
            <th>Mobile_number</th>
            <th>City</th>
            <th>Address</th>
            <th>Age</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {array.map((i,j)=> i.age>=18 ? <tr key={i.id}>
            <td>{j+1}</td>
            <td>{i.name}</td>
            <td>{i.email_id}</td>
            <td>{i.mobile_number}</td>
            <td>{i.city}</td>
            <td>{i.address}</td>
            <td>{i.age}</td>
            <td>{i.id}</td>
          </tr> : null
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Country;
