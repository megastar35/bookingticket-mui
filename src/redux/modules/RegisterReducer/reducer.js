import * as ActionType from "./constances"

let intialState = {
    data: null,
    err: null,
}

export const registerReducer = (state = intialState, action) => {
    switch (action.type) {
        case ActionType.REGISTER_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.REGISTER_SUCCESS:
            state.data = action.payday;
            state.err = null;
            return { ...state };
        case ActionType.REGISTER_FAILED:
            state.data = null;
            state.err = action.payday;
            return { ...state };
        default:
            return {...state};
    }
}