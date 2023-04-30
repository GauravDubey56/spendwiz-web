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
import Typography from "@mui/material/Typography";
import { apiCallWithAuth } from "../api/utils";
import { Spin, notification } from "antd";
export default function Dashboard() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState("");
  const [expenseType, setExpenseTypes] = useState("");
  const [recent, setRecent] = useState("");
  // Watchers
  React.useEffect(() => {
    const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
    if (!token) {
      redirectToLogin();
    } else {
      setUser(jwt.decode(token));
      setLoading(true)
      getExpenses();
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
  async function getExpenses() {
    try {
      debugger;
      const res = await apiCallWithAuth({
        method: "get",
        url: "/bot/spend",
      });
      setLoading(false);
      if (!res.status) {
        notification["error"]({
          message: res.message ? res.message : "Could not fetch data",
        });
      } else {
        const { data } = res;
        const { total, types, recent } = data;
        if (total && total.length) {
          setTotal(total[0].amount ? total[0].amount : 0);
        } else {
          setTotal(0);
        }
        console.log({recent, types})
        setRecent(Array.isArray(recent) && recent.length ? recent : "");
        setExpenseTypes(Array.isArray(types) && types.length ? types : "");
      }
    } catch (error) {
      console.error('App Error', error)
      notification["error"]({
        message: "Could not fetch data",
      });
    }
  }
  if (user.hasOwnProperty("username")) {
    return (
      <>
        <MainLayout>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TotalSpent amount={total} loading={loading} />
          </Box>
          <br />
          <Typography variant="h6">Expenses by type</Typography>
          <Box sx={{ height: 300, overflowY: "scroll", justifyContent: "center" }}>
            <Categories loading={loading} list={expenseType}/>
          </Box>
          <Typography variant="h6">Recent Expenses</Typography>
          <Box sx={{ height: 300, overflowY: "scroll", justifyContent: "center" }}>
            <SpendList loading={loading} list={recent}/>
          </Box>
        </MainLayout>
      </>
    );
  }
  return <div>Welcome</div>;
}
