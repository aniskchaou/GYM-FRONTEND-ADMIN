import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllGroupe = () => {
    return http.get(`${BASE_URL}/api/groupe`)
}
const createGroupe = data => {
    return http.post(`${BASE_URL}/api/groupe`, data);
};

const editGroupe = (id, data) => {
    return http.put(`${BASE_URL}/api/groupe/${id}`, data);
};

const removeGroupe = id => {
    return http.delete(`${BASE_URL}/api/groupe/${id}`);
};
const getCountGroup = () => {
    return http.get(`${BASE_URL}/api/count/group`)
}

export default {
    getAllGroupe,
    createGroupe,
    editGroupe,
    removeGroupe,
    getCountGroup
};
