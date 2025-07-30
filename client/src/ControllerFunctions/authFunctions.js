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
    try {
        const response = await axios.post("/api/auth/login", userInfo);
        if (response.data.user) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            return { success: true, data: response.data.user };
        }
        return { success: false, data: "Login failed" };
    } catch (err) {
        const errorMessage = err.response?.data?.message || "Login failed";
        return { success: false, data: errorMessage };
    }
}