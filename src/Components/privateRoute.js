import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
 const PrivateRoute = ({ children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    try {
        const res = fetch("http://localhost:8080/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            login,
            store,
          }),
        });
        //   if (!res.ok) {
  
        //   }
        const data = res.json();
        const message = data.message;
        if (message) {
          throw new Error(message);
        }
        if(localStorage.getItem("token")!=null)
        {
            setIsAuthenticated(true);
        }
        
        // history("/admin-panel");
      } catch (error) {
        window.alert(error.message);
        // console.log(error.message);
      }
        
    if (isAuthenticated ) {
      return children;
    }
      window.alert("Please Login First");
    return <Navigate to="/login" />
  }

  export default PrivateRoute;