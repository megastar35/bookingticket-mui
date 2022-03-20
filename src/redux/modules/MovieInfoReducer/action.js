import api from "../../../utils/api";
import * as ActionType from "./constances"

export const actMovieInfoAPI = (movieId) => {
    return dispatch => {
        dispatch(actMovieInfoRequest());
        api.get("/ api / QuanLyPhim / LayThongTinPhim", movieId)
            .then(rs => {
                dispatch(actMovieInfoSuccess(rs))
            })
            .catch(err => {
                dispatch(actMovieInfoFailed(err))
            })
    }
}
const actMovieInfoRequest = () => {
    return {
        type: ActionType.MOVIEINFO_REQUEST
    }
}

const actMovieInfoSuccess = (data) => {
    return {
        type: ActionType.MOVIEINFO_SUCESS,
        payday: data,
    }
}

const actMovieInfoFailed = (err) => {
    return {
        type: ActionType.MOVIEINFO_FAILED,
        payday: err,
    }
}