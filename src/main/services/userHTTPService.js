import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";


const login = data => {
    return http.post(`${BASE_URL}/api/user/login`, data);
};

const updateUser = (id, data) => {
    return http.put(`${BASE_URL}/api/user/${id}`, data);
};
const getUser = id => {
    return http.get(`${BASE_URL}/api/user/${id}`);
};
export default {
    login,
    updateUser,
    getUser
};
