import * as ActionType from './constances';
import api from '../../../utils/api'

export const actRegisterAPI = (info) => {
    return dispatch => {
        dispatch(actRegisterRequest());
        api.post("/QuanLyNguoiDung/DangKy", info)
            .then(rs => {
                dispatch(actRegisterSuccess(rs.data))
            }
            )
            .catch(
                err => {
                    dispatch(actRegisterFailed(err))
                }
            )
    }
}
const actRegisterRequest = () => {
    return {
        type: ActionType.REGISTER_REQUEST,
    }
}
const actRegisterSuccess = (data) => {
    return {
        type: ActionType.REGISTER_SUCCESS,
        payday: data,
    }
}
const actRegisterFailed = (err) => {
    return {
        type: ActionType.REGISTER_FAILED,
        payday: err,
    }
}
