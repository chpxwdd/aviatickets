import { defineStore } from 'pinia';
import nuxtStorage from 'nuxt-storage';

export const BASEURL = "https://api-dev.myagent.online/api"
export const AUTH_LOGIN = "andrew_api@sodis.ru"
export const AUTH_PASSWORD = "9wtjO50rl7"

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        auth_token: ''
    }),
    // methods: {

    // },
    getters: {
        getToken: () => state.auth_token,
    },
    actions: {
        // getToken() {
        //     // nuxtStorage.localStorage.setData('auth_token', 'res.data.auth_token');
        //     this.auth_token = nuxtStorage.localStorage.getData('auth_token');

        //     if (nuxtStorage.localStorage.getData('auth_token') !== null ||
        //         nuxtStorage.localStorage.getData('auth_token') !== "") {
        //     }


        // },
        async fetch() {

            // const res = await $fetch(BASEURL + "/user/login", {
            //     method: "POST",
            //     body: {
            //         login: AUTH_LOGIN,
            //         password: AUTH_PASSWORD
            //     }
            // });

            this.auth_token = nuxtStorage.localStorage.getData('auth_token');
            // this.auth_token = res.data.auth_token;
        }
    }
});