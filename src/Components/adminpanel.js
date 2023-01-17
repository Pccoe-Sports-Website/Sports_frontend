import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import List from "./List"
import Header from "./Header";
import styles from "./adminpanel.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Fetchdata from "./fetchData";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
function AdminPanel() {
  return (<div>
      {/* <Header/> */}
      <div className={styles.header}>
        <div>
        <img
          src="https://o.remove.bg/downloads/8fdc9e04-632b-41f4-900c-8a20dd33e0fb/pccoe-logo-new-removebg-preview.png"
          className={styles.logo}
          alt=""
        />
        </div>
        <div className={styles.adminName}>
          <p className={styles.name}>Mr. Santosh Pacharne</p>
          < span className={styles.icon} >
             <AccountCircleIcon/>
             <ArrowDropDownIcon/>
          </span>
        </div>
      </div>
      
      <div className={styles.heading} >
        <MenuIcon className={styles.menu}/>
        <h2>Admin Panel</h2>
      </div>
      <List/>
      <Fetchdata/>
      </div>
  );
}

export default AdminPanel;
