import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class Store {
    user = {};
    isAuth = true; // ! Убрать!!!
    isLoading = false;
    isAdmin = true


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


    async registration(name, username, password, passwordConfirmation) {
        try {

            console.log(`name ${name}\nusername ${username} \npassword ${password}passwordConf ${passwordConfirmation}`)
            const response = await AuthService.registration(name, username, password, passwordConfirmation);

            console.log(response.data);
            await this.login(username, password);
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
            console.log("ВСЕ четко вышло")
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

    cachedUser() {
        console.log(localStorage.getItem('user'))
        const cachedUserData = JSON.parse(localStorage.getItem('user'))

        this.setUser(cachedUserData)
        this.setAuth(true);

        return JSON.parse(localStorage.getItem('user'))
    }

    async challenges(id) {
        try {
            // Получаем токен из localStorage
            const accessToken = localStorage.getItem('tokenA');

            // Устанавливаем заголовок с токеном
            const response = await axios.get(`/api/v1/users/challenges/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}` // Добавляем заголовок Authorization с токеном
                }
            });

            console.log(response.data);
        } catch (e) {
            // Обработка ошибок
            console.log(e.response?.data?.message || 'Произошла ошибка при получении данных');
        }
    }



}

