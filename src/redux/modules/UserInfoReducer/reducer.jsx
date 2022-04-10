import * as ActionType from "./constances"

let initialState = {
    data: null,
    err: null,
}

export const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.USERINFO_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.USERINFO_SUCCESS:
            state.data = action.payday;
            state.err = null;
            return { ...state };
        case ActionType.USERINFO_FAILED:
            state.data = null;
            state.err = action.payday;
            return{...state};
        default:
            return{...state};
    }
}