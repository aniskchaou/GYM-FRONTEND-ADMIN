import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllRevenue = () => {
    return http.get(`${BASE_URL}/api/revenue`)
}
const getAllRevenueByDate = () => {
    return http.get(`${BASE_URL}/api/incomebydate`)
}

const createRevenue = data => {
    return http.post(`${BASE_URL}/api/revenue`, data);
};

const editRevenue = (id, data) => {
    return http.put(`${BASE_URL}/api/revenue/${id}`, data);
};

const removeRevenue = id => {
    return http.delete(`${BASE_URL}/api/revenue/${id}`);
};

const getTotalIncome = () => {
    return http.get(`${BASE_URL}/api/count/income/all`)
}

const getTodayIncome = () => {
    return http.get(`${BASE_URL}/api/count/income/today`)
}

export default {
    getAllRevenue,
    createRevenue,
    editRevenue,
    removeRevenue,
    getAllRevenueByDate,
    getTotalIncome,
    getTodayIncome
};
