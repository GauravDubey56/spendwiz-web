import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { decode } from "jsonwebtoken";
const Homepage = () => {
  const router = useRouter();
  const styles = {
    width: "40%",
    justifyContent: "center",
    margin: "100px auto",
    padding: "40px",
    backgroundColor: "",
    boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.02)",
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, []);
  return (
    <div className="card" style={styles}>
      <div className="card-body">
        <h5 className="card-title">Welcome Soldier!</h5>
        <Link href="auth/login">
          <a className="btn btn-primary" style={{ marginRight: "30px" }}>
            Login
          </a>
        </Link>
        <Link href="auth/register">
          <a className="btn btn-primary">Register</a>
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
