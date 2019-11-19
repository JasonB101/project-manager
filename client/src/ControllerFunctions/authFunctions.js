import axios from "axios";

export function verifyUser(token) {
    return axios.get("/api/auth/verifyUser", { token });
}

export async function login(userInfo) {

    const user = await axios.post("/api/auth/login", userInfo)
        .catch(err => console.log(err.response.data.message));

    if (user) {
        localStorage.setItem("user", JSON.stringify(user.data.user));
        return true;
    }
    return false
}