import api from "../../../utils/api"
import * as ActionType from "./constances"

export const actListMovieAPI = () => {
    return dispatch => {
        dispatch(actListMovieRequest())
        api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP05")
            .then(rs => {
                dispatch(actListMovieSuccess(rs))
            })
            .catch(err => {
                dispatch(actListMovieFailed(err))
            }
            )
    }
}

const actListMovieRequest = () => {
    return {
        type: ActionType.LISTMOVIE_REQUEST

    }
}

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.LISTMOVIE_SUCCESS,
        payday: data
    }

}
const actListMovieFailed = (err) => {
    return {
        type: ActionType.LISTMOVIE_FAILED,
        payday: err
    }
}