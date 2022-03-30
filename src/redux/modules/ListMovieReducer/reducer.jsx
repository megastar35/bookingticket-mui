import * as ActionType from "./constances"

let initialState = {
    data: null,
    err: null,
}

export const listMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LISTMOVIE_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.LISTMOVIE_SUCCESS:
            state.data = action.payday;
            state.err = null;
            return { ...state };
        case ActionType.LISTMOVIE_FAILED:
            state.data = null;
            state.err = action.payday;
            return { ...state };
        default:
            return {...state};      
    }
}