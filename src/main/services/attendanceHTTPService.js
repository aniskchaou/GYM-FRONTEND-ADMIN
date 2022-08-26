import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllAtendances = () => {
    return http.get(`${BASE_URL}/api/attendance`)
}

const createtendances = (data) => {
    return http.post(`${BASE_URL}/api/attendance`, data)
}

export default {
    getAllAtendances,
    createtendances
};