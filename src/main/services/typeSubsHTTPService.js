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

const getAllCount = () => {
    return http.get(`${BASE_URL}/api/count/all`)
}

const getSilver = () => {
    return http.get(`${BASE_URL}/api/count/silver`)
}

const getGold = () => {
    return http.get(`${BASE_URL}/api/count/gold`)
}

const getPremium = () => {
    return http.get(`${BASE_URL}/api/count/premium`)
}

const getSubsByCategory = () => {
    return http.get(`${BASE_URL}/api/analytics/category`)
}
export default {
    getAllCount,
    getSilver,
    getGold,
    getPremium,
    getAllTypeSubs,
    createTypeSubs,
    editTypeSubs,
    removeTypeSubs,
    getSubsByCategory
};
