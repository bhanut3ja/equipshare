import axios from "axios";
import AxiosInstance from "../../Services/AxiosInstance";
import { BaseUrl } from "../../Services/BaseUrl";
import { authConstants } from "./Constants"

export const login = (user) => {

    console.log("LOGIN CREDENTIALS:", user);
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`${BaseUrl}/api/companyUser/login`, { ...user });
        // const res = await AxiosInstance.post("/api/companyUser/login", { ...user });

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAIL,
                    payload: { error: res.data.error }
                })
            }
        }
    }
}

// Kept data after Reloading

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = JSON.parse(localStorage.getItem("user"));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            dispatch({
                type: authConstants.LOGIN_FAIL,
                payload: { error: "Failed to login" }
            })
        }
    }
}
