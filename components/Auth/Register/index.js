import { useState } from "react";
import { RegisterUser } from "../../../api/auth";
import Router from "next/router";
import { Col, Divider, Row, notification } from "antd";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
  });

  async function handleSubmit(e) {
    debugger;
    e.preventDefault();
    try {
      const data = await RegisterUser(formData);
      debugger;
      if (data.success) {
        notification["success"]({
          message: data.message,
        });
        Router.push("/auth/login");
      } else {
        notification["error"]({
          message: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="h1">Register</legend>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="emailInput"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Name
          </label>
          <Row span={24}>
            <Col span={11}>
              <input
                type="text"
                id="fname"
                className="form-control"
                placeholder="First name"
                onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
              />
            </Col>
            <Col span={2} />
            <Col span={11}>
              <input
                type="text"
                id="lname"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
              />
            </Col>
          </Row>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}
