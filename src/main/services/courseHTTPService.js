import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllCourse = () => {
    return http.get(`${BASE_URL}/api/course`)
}
const createCourse = data => {
    return http.post(`${BASE_URL}/api/course`, data);
};

const editCourse = (id, data) => {
    return http.put(`${BASE_URL}/api/course/${id}`, data);
};

const removeCourse = id => {
    return http.delete(`${BASE_URL}/api/course/${id}`);
};

export default {
    getAllCourse,
    createCourse,
    editCourse,
    removeCourse
};
