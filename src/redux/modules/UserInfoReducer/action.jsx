import * as ActionType from "./constances";
import api from "../../../utils/api";

export const actUserInfoAPI = (account) => {
    return dispatch => {
        dispatch(actUserInfoRequest());
        api.post("/QuanLyNguoiDung/ThongTinTaiKhoan", account)
            .then(
                rs => {
                    dispatch(actUserInfoSuccess(rs.data))
                }
            ).catch(
                err=>{
                    dispatch(actUserInfoFailed(err))
                }
            )
    }
}

const actUserInfoRequest = () => {
    return {
        type: ActionType.USERINFO_REQUEST,

    }
}

const actUserInfoSuccess = (data) => {
    return {
        type: ActionType.USERINFO_SUCCESS,
        payday: data,
    }
}

const actUserInfoFailed = (err) => {
    return {
        type: ActionType.USERINFO_FAILED,
        payday: err,
    }

}