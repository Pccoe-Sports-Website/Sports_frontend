import * as React from 'react';
import{ useEffect, useState } from "react";
import styles from "./adminpanel.module.css"
export default function NativeSelectDemo() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  // const fetchList = async (event) => {
  //   const token = localStorage.getItem("token");
  //   const userId = event.currentTarget.id;
  //   const dpt = event.currentTarget.dpt;
  //   console.log(userId);
  //   const url = `http://localhost:8080/query/${year}/${dpt}/${gender}/${type}/${game}`;
  //   try {
  //     const response = await fetch(url, {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: `bearer ${token}`,
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!!!");
  //     }
  //     const data = await response.json();
  //     const message = data.errorMessage;
  //     if (message) {
  //       throw new Error(message);
  //     }
  //   } catch (error) {
  //     setDeletemsg(error.message);
  //   }
  //   window.location.reload(false);
  // };
  return (
    <div className={styles.list}>
      <div>
      <select>
      <option value="" disabled selected style={{ color: "grey" }}>
                  Select Department
                </option>
          <option value="all">all</option>
          <option value="Comp">Computer-Science</option>
          <option value="IT">Information-Technology</option>
          <option value="Entc">Electronics-Telecommunication</option>
          <option value="Civil">Civil</option>
          <option value="Mech">Mechanical</option>
        </select>
      </div>
        <div>
      <select>
      <option value="" disabled selected style={{ color: "grey" }}>
                  Select Gender
                </option>
         <option value="all">all</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        </div>
      <div>
      <select placeholder="Select Games">
      <option value="" disabled selected style={{ color: "grey" }}>
                  Select Type
                </option>
          <option value="all">all</option>
          <option value="all">Indoor</option>
          <option value="Comp">Outdoor</option>
        </select>
      </div>
      <div>
      <select>
      <option value="" disabled selected style={{ color: "grey" }}>
                 Select Year
                </option>
          <option value="all">all</option>
          <option value="twenty">2020</option>
          <option value="twenty-one">2021</option>
          <option value="twenty-two">2022</option>
        </select>
      </div>
      {/* <UserList/> */}
       </div> 
  );
}