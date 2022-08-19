import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllBooking = () => {
    return http.get(`${BASE_URL}/api/booking`)
}
const createBooking = data => {
    return http.post(`${BASE_URL}/api/booking`, data);
};

const editBooking = (id, data) => {
    return http.put(`${BASE_URL}/api/booking/${id}`, data);
};

const removeBooking = id => {
    return http.delete(`${BASE_URL}/api/booking/${id}`);
};

export default {
    getAllBooking,
    createBooking,
    editBooking,
    removeBooking
};
