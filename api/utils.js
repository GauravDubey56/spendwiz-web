import axios from "axios";
const baseApi = "http://localhost:4001/api";
export const ApiCallWithoutAuth = async ({ payload, method, url, baseurl, query }) => {
  try {
    console.log({ payload });
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

export const apiCallWithAuth = async ({ payload, method, url, baseurl, query }) => {
  try {
    console.log({ payload });
    let res = await axios
      .request({
        method,
        ...(payload && { data: payload }),
        ...(query && { params: query }),
        url: (baseurl ? baseurl : baseApi) + url,
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data)
      .catch((err) => err.response.data);
    let { meta, data } = res;
    return {
      status: meta?.status ? meta.code === 200 : false,
      data: data ? data : "",
      message: meta.message ? meta.message : "",
    };
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status,
      data: error?.response?.data,
    };
  }
};
