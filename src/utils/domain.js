import axios from "axios";

const domain = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default domain;
