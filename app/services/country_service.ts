import axios from "axios";

const API_URL = ' http://localhost:3004';
axios.defaults.baseURL = API_URL;

export const countryService = {
    async getAll() {
        return axios.get('/countries');
    }
}