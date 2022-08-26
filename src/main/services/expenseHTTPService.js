import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllExpense = () => {
    return http.get(`${BASE_URL}/api/expense`)
}
const createExpense = data => {
    return http.post(`${BASE_URL}/api/expense`, data);
};

const editExpense = (id, data) => {
    return http.put(`${BASE_URL}/api/expense/${id}`, data);
};

const removeExpense = id => {
    return http.delete(`${BASE_URL}/api/expense/${id}`);
};

const getExpenseByDate = () => {
    return http.get(`${BASE_URL}/api/expensebydate`)
}

export default {
    getAllExpense,
    createExpense,
    editExpense,
    removeExpense,
    getExpenseByDate
};
