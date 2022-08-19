import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getFrontOffice = () => {
    return http.get(`${BASE_URL}/api/frontoffice`)
}



const editFrontOffice = (id, data) => {
    return http.put(`${BASE_URL}/api/frontoffice/${id}`, data);
};



export default {
    getFrontOffice,
    editFrontOffice
};
