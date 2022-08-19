import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllExercice = () => {
    return http.get(`${BASE_URL}/api/exercice`)
}
const createExercice = data => {
    return http.post(`${BASE_URL}/api/exercice`, data);
};

const editExercice = (id, data) => {
    return http.put(`${BASE_URL}/api/exercice/${id}`, data);
};

const removeExercice = id => {
    return http.delete(`${BASE_URL}/api/exercice/${id}`);
};

export default {
    getAllExercice,
    createExercice,
    editExercice,
    removeExercice
};
