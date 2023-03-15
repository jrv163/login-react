import axios from "axios";

const pruebaApi = axios.create({
    baseURL: 'http://localhost:4001/'
});


export default pruebaApi;