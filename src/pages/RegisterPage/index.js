import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { connect } from 'react-redux';
import { actRegisterAPI } from '../../redux/modules/RegisterReducer/action';
import { registerForm } from '../../utils/material-ui/index'
import { Link } from 'react-router-dom';
import { checkEmpty, emailValid, phoneValid } from '../../utils/validation';
function RegisterPage(props) {
    const [userInfo, setUserInfo] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP05",
        maLoaiNguoiDung: "KhachHang",
        hoTen: "",
        notices: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            hoTen: "",
        },
        formValid: false,
    })

    const handleOnChange = (event) => {
        const { value, name } = event.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.dispatchRegister(userInfo);
    }

    const handleError = () => {
        const { errorData } = props;
        if (errorData && errorData.response.status === 500) {
            return <Typography> {errorData.response.data} </Typography>
        }
    }
    const renderNoti = (event) => {
        const { name, value } = event.target;
        let messNoti = checkEmpty(value);

        switch (name) {
            case "email":
                if (value !== "") {
                    messNoti = emailValid(value)
                }
                break;
            case "soDt":
                if (value !== "") {
                    messNoti = phoneValid(value)
                }
                break;
            default:
                break;
        }
        setUserInfo({
            ...userInfo,
            notices: {
                ...userInfo.notices,
                [name]: messNoti,
            }
        });

    }
    const classname = registerForm();

    return (
        <Box className={classname.registerPage}>
            <Container className={classname.Container} sx={{ display: 'flex', alignItems: "center", justifyContent: "center", mt: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} component="form" onSubmit={handleSubmit}>
                    <Avatar sx={{ m: 2, bgcolor: "#ef2020" }}>
                    </Avatar>
                    {handleError()}
                    <Typography variant="h4"> Sign Up</Typography>

                    <TextField id="outlined-account-input" name="taiKhoan" label="Account" type="text" margin="normal" fullWidth
                        onChange={handleOnChange} onBlur={renderNoti}
                    />
                    <Typography color="#ff7f7f"> {userInfo.notices.taiKhoan}</Typography>

                    <TextField id="outlined-password-input" name="matKhau" label="Password" type="password" margin="normal" fullWidth
                        onChange={handleOnChange} onBlur={renderNoti}
                    />
                    <Typography color="#ff7f7f"> {userInfo.notices.matKhau}</Typography>

                    <TextField name="email" label="Email" type="email" margin="normal" fullWidth onChange={handleOnChange} onBlur={renderNoti}
                    />
                    <Typography color="#ff7f7f"> {userInfo.notices.email}</Typography>


                    <TextField name="soDt" label="Phone number" type="tel" margin="normal" fullWidth
                        onChange={handleOnChange} onBlur={renderNoti}
                    />
                    <Typography color="#ff7f7f"> {userInfo.notices.soDt}</Typography>


                    <TextField name="hoTen" label="Full name" type="text" margin="normal" fullWidth
                        onChange={handleOnChange} onBlur={renderNoti}
                    />
                    <Typography color="#ff7f7f"> {userInfo.notices.hoTen}</Typography>

                    <Box className='divSelection' sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: 'space-around' }}>
                        <Link to='/login'> You already have an account! </Link>
                        <Button sx={{ width: '40%' }} variant="contained" fullWidth endIcon={<SendIcon />} type="submit">
                            <Typography fontWeight="bold" fontSize="24px">
                                Sign Up
                            </Typography>
                        </Button>
                    </Box>


                </Box>
            </Container>
        </Box>
    )
}
const mapStateToProps = (state) => {
    return {
        errorData: state.registerReducer.err
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchRegister: (user) => {
            dispatch(actRegisterAPI(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
