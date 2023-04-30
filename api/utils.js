import axios from "axios";
const baseApi = "http://localhost:4001/api";
export const ApiCallWithoutAuth = async ({ payload, method, url, baseurl, query }) => {
  try {
    console.log({payload});
    let res = await axios.request({
      method,
      ...(payload && { data: payload }),
      ...(query && { params: query }),
      url: (baseurl ? baseurl : baseApi) + url,
    });
    return {
      success: res?.status ? res.status === 200 : false,
      data: res.data ? res.data : "",
    };
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status,
      data: error?.response?.data,
    };
  }
};

