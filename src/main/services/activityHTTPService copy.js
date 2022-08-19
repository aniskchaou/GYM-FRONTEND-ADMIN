import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getCountActivity = () => {
    return http.get(`${BASE_URL}/api/count/activity`)
}

const getAllActivity = () => {
    return http.get(`${BASE_URL}/api/activity`)
}
const getAllActivityByDate = () => {
    return http.get(`${BASE_URL}/api/activitybydate`)
}
const createActivity = data => {
    return http.post(`${BASE_URL}/api/activity`, data);
};

const editActivity = (id, data) => {
    return http.put(`${BASE_URL}/api/activity/${id}`, data);
};

const removeActivity = id => {
    return http.delete(`${BASE_URL}/api/activity/${id}`);
};

export default {
    getAllActivity,
    createActivity,
    editActivity,
    removeActivity,
    getAllActivityByDate,
    getCountActivity
};
