import axios from "axios";
import { BaseUrl } from "./BaseUrl";

const token = window.localStorage.getItem('token');
const AxiosInstance = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
})

export default AxiosInstance;