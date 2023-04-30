import React, { useState } from "react";
import Router from "next/router";
import { whoAmI } from "../lib/auth";
import * as jwt from "jsonwebtoken";
import { removeToken } from "../lib/token";
import Box from "@mui/material/Box";
import MainLayout from "../components/Layout/loggedIn";
import TotalSpent from "../components/Dashboard/totalSpent";
import SpendList from "../components/Dashboard/spendList";
import Categories from "../components/Dashboard/categories";
import Typography from "@mui/material/Typography"
export default function Dashboard() {
  const [user, setUser] = useState({});
  // Watchers
  React.useEffect(() => {
    const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
    if (!token) {
      redirectToLogin();
    } else {
      setUser(jwt.decode(token));
    }
  }, []);

  function redirectToLogin() {
    Router.push("/auth/login");
  }

  function handleLogout(e) {
    e.preventDefault();
    removeToken();
    redirectToLogin();
  }

  if (user.hasOwnProperty("username")) {
    return (
      <>
        <MainLayout>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TotalSpent />
          </Box>
          <br />
          <Typography variant="h6">Expenses by type</Typography>
          <Box sx={{ height: 300, overflowY: "scroll", justifyContent: "center" }}>
            <Categories />
          </Box>
          <Typography variant="h6">Recent Expenses</Typography>
          <Box sx={{ height: 300, overflowY: "scroll", justifyContent: "center" }}>
            <SpendList />
          </Box>
        </MainLayout>
      </>
    );
  }
  return <div>Welcome</div>;
}
