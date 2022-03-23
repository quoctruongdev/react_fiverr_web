import axios from "axios";
// const TOKEN_CYBERSOFTs =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTk4MDgwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjUwMTI4NDAwfQ.43sCqLD_V6VUJP8qZLQSWO07uCIDI7bS5MGR92deYb8";

// const TOKEN_CYBERSOFT =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20";

const apiClient = axios.create({
  baseURL: "https://fiverr.cybersoft.edu.vn/api/",
});
const apiAdmin = axios.create({
  baseURL: "https://fiverr.cybersoft.edu.vn/api/",
});

apiClient.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      tokenByClass: TOKEN_CYBERSOFT,
      token: localStorage.getItem("UserClient")
        ? JSON.parse(localStorage.getItem("UserClient")).token
        : "",
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);

apiAdmin.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      tokenByClass: TOKEN_CYBERSOFT,
      token: localStorage.getItem("UserAdmin")
        ? JSON.parse(localStorage.getItem("UserAdmin")).token
        : "",
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);

export { apiClient, apiAdmin };
