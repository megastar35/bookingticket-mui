import api from "../../../utils/api";
import * as ActionType from "./constances"

export const actMovieInfoAPI = (movieId) => {
    return dispatch => {
        dispatch(actMovieInfoRequest());
        api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`)
            .then(rs => {
                dispatch(actMovieInfoSuccess(rs.data))
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
        type: ActionType.MOVIEINFO_SUCCESS,
        payday: data,
    }
}

const actMovieInfoFailed = (err) => {
    return {
        type: ActionType.MOVIEINFO_FAILED,
        payday: err,
    }
}