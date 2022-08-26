import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllEvent = () => {
    return http.get(`${BASE_URL}/api/event`)
}
const createEvent = data => {
    return http.post(`${BASE_URL}/api/event`, data);
};

const editEvent = (id, data) => {
    return http.put(`${BASE_URL}/api/event/${id}`, data);
};

const removeEvent = id => {
    return http.delete(`${BASE_URL}/api/event/${id}`);
};

export default {
    getAllEvent,
    createEvent,
    editEvent,
    removeEvent
};
