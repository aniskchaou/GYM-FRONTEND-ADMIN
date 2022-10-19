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

const getTotalEvent = () => {
    return http.get(`${BASE_URL}/api/count/event/all`)
}

const getTodayEvent = () => {
    return http.get(`${BASE_URL}/api/count/event/today`)
}

const getEventByDate = () => {
    return http.get(`${BASE_URL}/api/count/event/eventbydate`)
}
export default {
    getAllEvent,
    createEvent,
    editEvent,
    removeEvent,
    getTotalEvent,
    getTodayEvent,
    getEventByDate
};
