import axios from "axios";

//use this instead of having to manually send token
// savedAxios.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token");
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// })

export function verifyUser(token) {
    return axios.get("/api/auth/verifyUser", { token });
}

export async function login(userInfo) {
    let error;
    const user = await axios.post("/api/auth/login", userInfo)
        .catch(err => error = err.response.data.message);
    if (error) return { success: false, data: error }
    if (user) {
        localStorage.setItem("user", JSON.stringify(user.data.user));
        return { success: true, data: user.data.user };
    }
}