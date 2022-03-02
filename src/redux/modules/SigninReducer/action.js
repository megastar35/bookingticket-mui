import * as ActionType from "./constances"
import api from "../../../utils/api"

export const actionSigninAPI = (user) => {
    return dispatch => {
        dispatch(actSigninRequest());
        api.post("/QuanLyNguoiDung/DangNhap", user)
            .then(rs => {
                dispatch(actSiginSuccess(rs.data))
                if (rs.data.maLoaiNguoiDung === "KhachHang") {
                    alert("welcome mc")
                } else if (rs.data.maLoaiNguoiDung === "QuanTri") {
                    alert("welcome db")
                }
            })
            .catch(err => {
                dispatch(actSigninFailed(err))
                alert("Sai kia ml")
            })
    }
}
const actSigninRequest = () => {
    return {
        type: ActionType.SIGNIN_REQUEST,
    }
}

const actSiginSuccess = (data) => {
    return {
        type: ActionType.SIGNIN_SUCCESS,
        payday: data,
    }
}

const actSigninFailed = (err) => {
    return {
        type: ActionType.SIGNIN_FAILED,
        payday: err,
    }
}

