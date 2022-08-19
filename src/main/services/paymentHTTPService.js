import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllPayment = () => {
    return http.get(`${BASE_URL}/api/payment`)
}
const createPayment = data => {
    return http.post(`${BASE_URL}/api/payment`, data);
};

const editPayment = (id, data) => {
    return http.put(`${BASE_URL}/api/payment/${id}`, data);
};

const removePayment = id => {
    return http.delete(`${BASE_URL}/api/payment/${id}`);
};

export default {
    getAllPayment,
    createPayment,
    editPayment,
    removePayment
};
