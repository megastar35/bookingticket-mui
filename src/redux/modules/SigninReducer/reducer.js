import * as actionType from "./constances"

let intialState = {
    data: null,
    err: null,
}

export const signinReducer = (state = intialState, action) => {
    switch (action) {
        case actionType.SIGNIN_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state }
        case actionType.SIGNIN_SUCCESS:
            state.data = action.payday;
            state.err = null;
            return { ...state }
        case actionType.SIGNIN_FAILED:
            state.data = null;
            state.err = action.payday;
            return { ...state }
        default:
            return {...state};
    }
}
