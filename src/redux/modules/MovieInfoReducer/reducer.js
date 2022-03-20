import * as ActionType from "./constances"

let initialState = {
    data: null,
    err: null,
}

export const movieInfoReduer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.MOVIEINFO_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.MOVIEINFO_SUCCESS:
            state.data = action.payday;
            state.err = null;
            return { ...state };
        case ActionType.MOVIEINFO_FAILED:
            state.data = null;
            state.err = action.payday;
            return{...state};
        default:
            return{...state};
    }
}