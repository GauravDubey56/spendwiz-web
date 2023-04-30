import { useState, useEffect } from "react";
import Router from "next/router";
import { LoginUser } from "../../../api/auth";
import { notification, Col } from "antd";
export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const data = await LoginUser({ email: username, password });
      if (data.success && data.token) {
        if (rememberMe) {
          window.localStorage.setItem("token", data.token);
        } else {
          window.sessionStorage.setItem("token", data.token);
        }
        notification["success"]({
          message: data?.message ? data.message : "Login successful",
        });
        setTimeout(() => {
          Router.push("/dashboard");
        }, 1000);
      } else {
        notification["error"]({
          message: data?.message ? data.message : "Login successful",
        });
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Col span={24}>
      <form onSubmit={handleSubmit} className="mt-5">
        <fieldset>
          <legend className="h1">Login</legend>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="usernameInput"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="RememberMeInput"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="RememberMeInput">
                Remember Me
              </label>
            </div>
          </div>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            Login
          </button>
        </fieldset>
      </form>
    </Col>
  );
}
