import axios from "axios";

const API_URL = ' http://localhost:3004';
axios.defaults.baseURL = API_URL;

export interface ICountry {
    id: number
    title: string
    population: string
    image: string
}

export const countryService = {
    getAll: async () => {
        return axios.get<ICountry[]>('/countries').then(res => res.data);
    },
    getCountry: async (id: string) => {
        return axios.get<ICountry>(`/countries/${id}`).then(res => res.data);
    },
    create: async (data: ICountry) => {
        return axios.post(`/countries`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}