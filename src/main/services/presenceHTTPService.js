import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllPresence = () => {
    return http.get(`${BASE_URL}/api/presence`)
}
const createPresence = data => {
    return http.post(`${BASE_URL}/api/presence`, data);
};

const editPresence = (id, data) => {
    return http.put(`${BASE_URL}/api/presence/${id}`, data);
};

const removePresence = id => {
    return http.delete(`${BASE_URL}/api/presence/${id}`);
};

export default {
    getAllPresence,
    createPresence,
    editPresence,
    removePresence
};
