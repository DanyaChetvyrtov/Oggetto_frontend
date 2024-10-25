import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(username, password) {
        try {
            const response = await AuthService.login(username, password);
            console.log("RESPONSE:", response);
            localStorage.setItem('tokenA', response.data.accessToken);
            localStorage.setItem('tokenR', response.data.refreshToken);
            localStorage.setItem('username', response.data.username);
            this.setAuth(true);
            this.setUser(response.data);
        } catch (e) {
            // Логируем полную ошибку
            console.log("Ошибка при авторизации:", e);

            // Проверяем, есть ли e.response
            if (e.response) {
                console.log("Ответ сервера:", e.response);
                console.log("Сообщение об ошибке:", e.response.data ? e.response.data.message : 'Нет сообщения');
            } else {
                console.log("Ошибка сети или сервер не отвечает:", e.message);
            }
        }
    }


    async registration(name,username, password, passwordConfirmation) {
        try {
            const response = await AuthService.registration(name,username, password, passwordConfirmation);
            console.log(response);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }


    async logout() {
        try {
            localStorage.removeItem('tokenA');
            localStorage.removeItem('tokenR');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/refresh`, {refreshToken: localStorage.getItem('tokenR')});
            console.log(response);
            localStorage.setItem('tokenA', response.data.accessToken);
            localStorage.setItem('tokenR', response.data.refreshToken);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}

