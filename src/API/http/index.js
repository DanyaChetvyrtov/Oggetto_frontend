import axios from "axios";

export const API_URL = `/api/v1/auth`;

const $api = axios.create({
    baseURL: API_URL
});


export default $api;