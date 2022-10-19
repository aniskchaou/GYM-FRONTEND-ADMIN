import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllAtendances = () => {
    return http.get(`${BASE_URL}/api/attendance`)
}

const createtendances = (data) => {
    return http.post(`${BASE_URL}/api/attendance`, data)
}
const getTotalAttendance = () => {
    return http.get(`${BASE_URL}/api/count/attendance/all`)
}

const getTodayAttendance = () => {
    return http.get(`${BASE_URL}/api/count/attendance/today`)
}
export default {
    getAllAtendances,
    createtendances,
    getTotalAttendance,
    getTodayAttendance
};