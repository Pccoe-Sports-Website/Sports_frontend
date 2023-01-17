import React, { useRef } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
function Register() {
  const INITIAL_STATE = {
    fname: "",
    mname: "",
    lname: "",
    email: "",
    phone: "",
    prn: "",
    dpt: "",
    div: "",
    gen: "",
  };
  const [user, setuser] = useState(INITIAL_STATE);
  const [Outdoor, setOutdoor] = useState([]);
  const [Indoor, setIndoor] = useState([]);
  const navigate = useNavigate();
  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    // console.log(fref.current.value);
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const OutdoorSubmit = (e) => {
    value = e.target.value;

    setOutdoor([...Outdoor, value]);
  };
  const IndoorSubmit = (e) => {
    value = e.target.value;

    setIndoor([...Indoor, value]);
  };
  const PostData = async (e) => {
    alert("Submitted");
    e.preventDefault();
    const { fname, mname, lname, email, phone, prn, dpt, div, gen } = user;
    const res = await fetch("http://localhost:8080/student/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: fname,
        middleName: mname,
        lastName: lname,
        email: email,
        phone: phone,
        prn: prn,
        department: dpt,
        division: div,
        gender: gen,
        indoor: Indoor,
        outdoor: Outdoor,
      }),
    });
    const data = await res.json();
    if (data.statusCode === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("valid Registration");
      console.log("valid Registration");
      navigate("/thank-you");
    }
    // useForm(INITIAL_STATE);
  };
  return (
    <div className="register">
      <div className="header">
        <h3 className="heading">Student Registration Form</h3>
      </div>
      <hr className="line" />
      <Form className="form" method="POST" onSubmit={PostData}>
        <div className="formDiv">
          <label for="fname" class="label-title Full">
            Full Name :
          </label>
          <div className="name">
            <Form.Field>
              <div></div>
              <div className="infoName">
                <input
                  type="text"
                  name="fname"
                  value={user.fname}
                  class="form-input"
                  // placeholder="enter your first name"
                  required="required"
                  onChange={handleInput}
                  // {...register("firstName", { required: true, maxLength: 10 })}
                />
                <label for="fname" class="label-title">
                  First name
                </label>
              </div>
            </Form.Field>
            {/* {errors.firstName && <p>Please check the First Name</p>} */}
            <Form.Field>
              <div className="infoName">
                <input
                  type="text"
                  name="mname"
                  value={user.mname}
                  class="form-input"
                  // placeholder="enter your Middle name"
                  onChange={handleInput}
                  // {...register("midName", { required: false})}
                  required
                />
                <label for="mname" class="label-title">
                  Middle name
                </label>
              </div>
            </Form.Field>
            {/* {errors.lastName && <p>Please check the Last Name</p>} */}
            <Form.Field>
              <div className="infoName">
                <input
                  type="text"
                  name="lname"
                  value={user.lname}
                  class="form-input"
                  // placeholder="enter your Last name"
                  required="required"
                  onChange={handleInput}
                  // {...register("lastName")}
                />
                <label for="lname" class="label-title">
                  Last name
                </label>
              </div>
            </Form.Field>
          </div>

          <Form.Field>
            <div className="info">
              <label for="email" class="label-title">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                class="form-input"
                // placeholder="enter your Email"
                required="required"
                onChange={handleInput}
                // {...register("email", {
                // required: true,
                // pattern:
                // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                // })}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div className="info">
              <label for="phone" class="label-title">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={user.phone}
                class="form-input"
                // placeholder="enter your Phone Number(WhatsApp)"
                required="required"
                onChange={handleInput}
                // {...register("phone")}
              />
            </div>
          </Form.Field>

          <Form.Field>
            <div className="info">
              <label for="prn" class="label-title">
                PRN
              </label>
              <input
                type="text"
                name="prn"
                value={user.prn}
                class="form-input"
                // placeholder="enter your college PRN"
                required="required"
                onChange={handleInput}
                // {...register("prn")}
              />
            </div>
          </Form.Field>

          <Form.Field>
            <div className="info">
              <label for="dpt" class="label-title">
                Department
              </label>
              <select value={user.dpt} name="dpt" onChange={handleInput}>
                <option value="" disabled selected style={{ color: "grey" }}>
                  --Select--
                </option>
                <option value="Computer-science">Computer-science</option>
                <option value="Information-Technology">
                  Information-Technology
                </option>
                <option value="Electronics-Telecommunication">
                  Electronics-Telecommunication
                </option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil">Civil</option>
              </select>
            </div>
          </Form.Field>

          <Form.Field>
            <div className="info">
              <label for="div" class="label-title">
                Division
              </label>
              <input
                type="text"
                name="div"
                value={user.div}
                class="form-input"
                // placeholder="enter your Division"
                required="required"
                onChange={handleInput}
                // {...register("div")}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div className="info">
              <label for="gen" class="label-title">
                Gender
              </label>
              <select value={user.gen} name="gen" onChange={handleInput}>
                <option value="" disabled selected>
                  --Select--
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </Form.Field>
          <div className="field">
            <p class="door">Outdoor Sports</p>
            <div className="games">
              <div className="game">
                <input
                  name="Outdoor"
                  value="kabaddi"
                  onChange={OutdoorSubmit}
                  type="checkbox"
                />
                <p>kabaddi</p>
              </div>
              <div className="game">
                <input
                  name="Outdoor"
                  value="kho kho"
                  onChange={OutdoorSubmit}
                  type="checkbox"
                />
                <p>Kho Kho</p>
              </div>
              <div className="game">
                <input
                  name="Outdoor"
                  value="Basketball"
                  onChange={OutdoorSubmit}
                  type="checkbox"
                />
                <p>BasketBall</p>
              </div>
              <div className="game">
                <input
                  name="Outdoor"
                  value="VolleyBall"
                  onChange={OutdoorSubmit}
                  type="checkbox"
                />
                <p>VolleyBall</p>
              </div>
            </div>
          </div>
          <div className="field">
            <p class="door">Indoor Sports</p>
            <div class="games">
              <div className="game">
                <input
                  name="Indoor"
                  value="Table-Tennis"
                  onChange={IndoorSubmit}
                  type="checkbox"
                />
                <p>Table Tennis</p>
              </div>
              <div className="game">
                <input
                  name="Indoor"
                  value="Carrum"
                  onChange={IndoorSubmit}
                  type="checkbox"
                />
                <p>Carrum</p>
              </div>
              <div className="game">
                <input
                  name="Indoor"
                  value="Chess"
                  onChange={IndoorSubmit}
                  type="checkbox"
                />
                <p>Chess</p>
              </div>
            </div>
        <div className="submit">
        <Button type="submit" className="submit" onClick={PostData}>
          Submit
        </Button>
        </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default Register;
