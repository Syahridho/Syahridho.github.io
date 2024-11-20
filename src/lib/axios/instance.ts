import axios from "axios";

// const headers = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   "Cache-Control": "no-cache",
//   Exprires: 0,
// };

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export default instance;
