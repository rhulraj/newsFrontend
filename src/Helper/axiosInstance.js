import axios from "axios";

const axiosInstanse = axios.create(); //Create a new instance of axios

axiosInstanse.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; //Set the base URL


axiosInstanse.defaults.withCredentials = true //Allow cookies to be sent with requests

export default axiosInstanse;