import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllTypeSubs = () => {
    return http.get(`${BASE_URL}/api/typesubs`)
}
const createTypeSubs = data => {
    return http.post(`${BASE_URL}/api/typesubs`, data);
};

const editTypeSubs = (id, data) => {
    return http.put(`${BASE_URL}/api/typesubs/${id}`, data);
};

const removeTypeSubs = id => {
    return http.delete(`${BASE_URL}/api/typesubs/${id}`);
};

export default {
    getAllTypeSubs,
    createTypeSubs,
    editTypeSubs,
    removeTypeSubs
};
