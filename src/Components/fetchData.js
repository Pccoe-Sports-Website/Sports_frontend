import React, { useEffect, useState } from "react";
import styles from "./adminpanel.module.css"
import PersonRemoveIcon from "@mui/icons-material/PersonRemoveAlt1Rounded";

export default function Fetchdata() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [deletemsg, setDeletemsg] = useState(null);
  const [deleteMsg, setDeleteMsg] = useState("");

  const fetchData = async () => {
    setError("");
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/data", {
        method: "GET",
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const message = data.message;
      if (message) {
        setError(message);
      }
      setUsers(data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const removeUser = async (event) => {
    // console.log(event.currentTarget.id);
    const token = localStorage.getItem("token");
    const userId = event.currentTarget.id;
    console.log(userId);
    const url = `http://localhost:8080/student/${userId}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }
      const data = await response.json();
      const message = data.errorMessage;
      if (message) {
        throw new Error(message);
      }
    } catch (error) {
      setDeletemsg(error.message);
    }
    window.location.reload(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div >
      <table>
        <tr className={styles.tableContent}>
          <th rowSpan={2}>Sr no.</th>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>Email</th>
          <th rowSpan={2}>Phone</th>
          <th rowSpan={2}>PRN</th>
          <th rowSpan={2}>Department</th>
          <th rowSpan={2}>Division</th>
          <th rowSpan={2}>Gender</th>
          <th colSpan={2}>Games</th>
          <th rowSpan={2}><PersonRemoveIcon/></th>
        </tr>
        <tr className={styles.tableContent}>
            <th>Indoor</th>
            <th>Outdoor</th>
        </tr>
        {users.map((user, index) => (
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.prn}</td>
            <td>{user.department}</td>
            <td>{user.division}</td>
            <td>{user.gender}</td>
            <td>{user.indoor.map((games) => " " + games + ",")}</td>
            <td>{user.outdoor.map((games) => " " + games + ",")}</td>
            <td>
              <button onClick={removeUser} id={user._id}>
                <PersonRemoveIcon />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
