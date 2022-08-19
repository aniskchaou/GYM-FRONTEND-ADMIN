import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllProduct = () => {
    return http.get(`${BASE_URL}/api/product`)
}
const createProduct = data => {
    return http.post(`${BASE_URL}/api/product`, data);
};

const editProduct = (id, data) => {
    return http.put(`${BASE_URL}/api/product/${id}`, data);
};

const removeProduct = id => {
    return http.delete(`${BASE_URL}/api/product/${id}`);
};

export default {
    getAllProduct,
    createProduct,
    editProduct,
    removeProduct
};
