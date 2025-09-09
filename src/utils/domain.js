import axios from "axios";

const domain = axios.create({
  baseURL: "http://localhost:8000",
});

export default domain;
