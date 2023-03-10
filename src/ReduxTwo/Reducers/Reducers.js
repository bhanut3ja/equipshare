import { authConstants } from "../Actions/Constants"

const initialState = {
    token: null,
    user: {
        email: "",
        password: ""
    },
    authenticate: false,
    authenticating: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;

    }

    return state;
}