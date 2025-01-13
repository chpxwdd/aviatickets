
export const BASEURL = "https://api-dev.myagent.online/api"
export const AUTH_LOGIN = "andrew_api@sodis.ru"
export const AUTH_PASSWORD = "9wtjO50rl7"
export default defineEventHandler(async (event) => {
    
    const res = await $fetch(BASEURL + "/user/login", {
        method: "POST",
        body: {
            login: AUTH_LOGIN,
            password: AUTH_PASSWORD
        }
    });

    return { ...res.data }

})