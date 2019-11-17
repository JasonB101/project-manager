import axios from "axios";

export function verifyUser(token){
   return axios.get("/api/auth/verifyUser", {token});
}

export function login(userInfo){
    return axios.post("/api/auth/login", userInfo);
}