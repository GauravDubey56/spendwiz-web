import { ApiCallWithoutAuth } from "./utils";
import axios from "axios";

const baseApi = "http://localhost:4001/api";
export const RegisterUser = async (payload) => {
  debugger;
  console.log({ payload });
  let resp = await axios
    .request({
      data: payload,
      method: "post",
      url: baseApi + "/auth/signup",
    })
    .then((res) => res.data)
    .catch((err) => err.response);
  if (resp.success) {
    return {
      message: resp?.message ? resp.message : "Signup successful. Proceed to login",
      success: true,
    };
  } else {
    return {
      message: resp?.message ? resp.message : "Could not sign up at the moment",
      success: false,
    };
  }
};

export const LoginUser = async (payload) => {
  debugger;
  console.log({ payload });
  let resp = await axios
    .request({
      data: payload,
      method: "post",
      url: baseApi + "/auth/login",
    })
    .then((res) => res.data)
    .catch((err) => err.response);
  console.log(resp)
  if (resp.success && resp?.data?.token) {
    return {
      message: resp?.message ? resp.message : "Login successful",
      success: true,
      token: resp.data.token,
    };
  } else {
    return {
      message: resp?.message ? resp.message : "Could not sign up at the moment",
      success: false,
    };
  }
};
