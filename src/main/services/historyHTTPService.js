import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllHistory = () => {
    return http.get(`${BASE_URL}/api/history`)
}
const createHistory = data => {
    return http.post(`${BASE_URL}/api/history`, data);
};

const editHistory = (id, data) => {
    return http.put(`${BASE_URL}/api/history/${id}`, data);
};

const removeHistory = id => {
    return http.delete(`${BASE_URL}/api/history/${id}`);
};

export default {
    getAllHistory,
    createHistory,
    editHistory,
    removeHistory
};
