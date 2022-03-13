import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SendIcon from '@mui/icons-material/Send';
import { actionSigninAPI } from '../../redux/modules/SigninReducer/action';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginLayout, renderError } from '../../utils/material-ui';
import { checkEmpty } from '../../utils/validation';


function LoginPage(props) {
    let history = useNavigate();

    const [account, setAccount] = useState({
        taiKhoan: "",
        matKhau: "",
        errors: {
            taiKhoan: "",
            matKhau: "",
        },
        formValid: false,
    })
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setAccount({
            ...account,
            [name]: value,
        },
        )
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.fetchSignin(account, history);
        console.log(props);
    }

    const renderNoti = (event) => {
        const { name, value } = event.target;
        let errorValue = checkEmpty(value);
        setAccount({
            ...account,
            errors: {
                ...account.errors,
                [name]: errorValue,
            },
            formValid: account.errors.taiKhoan === "" && account.errors.matKhau === "",
        })
        console.log(account.formValid);
    }
    // console.log(props);
    const handleError = () => {

        const { errorNoti } = props;

        if (errorNoti && errorNoti.response.status === 500) {
            return <Typography className={classesError.p} sx={{ m: 1 }}> {errorNoti.response.data}</Typography>
        }

    }

    const classes = loginLayout();
    const classesError = renderError();

    return (
        <Box className={classes.loginForm}>
            <Container className={classes.Container} sx={{display: 'flex', alignItems: "center", justifyContent: "center",}} maxWidth="sm" >
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column" }} component="form" onSubmit={handleSubmit}>
                    <Avatar sx={{ m: 2, bgcolor: "#ef2020" }}>
                        <LockOutlinedIcon></LockOutlinedIcon>
                    </Avatar>
                    <Typography variant="h4"> Sign in</Typography>
                    {handleError()}

                    <TextField
                        id="outlined-account-input"
                        name="taiKhoan"
                        label="Account"
                        type="text"
                        margin="normal"
                        fullWidth
                        onChange={handleOnChange}
                        onKeyUp={renderNoti}

                    />
                    <Typography>  {account.errors.taiKhoan} </Typography>
                    <TextField
                        id="outlined-password-input"
                        name="matKhau"
                        label="Password"
                        type="password"
                        margin="normal"
                        fullWidth
                        onChange={handleOnChange}
                        onKeyUp={renderNoti}
        

                    />
                    <Typography> {account.errors.matKhau} </Typography>

                    <Box className='selectDiv' sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}  >
                        <Link to="/register"> Sign up now!</Link>
                        <Button variant="contained" fullWidth endIcon={<SendIcon />} type="submit" disabled={!account.formValid} >
                            <Typography fontWeight="bold" fontSize="24px">
                                Sign In
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSignin: (account, history) => {
            dispatch(actionSigninAPI(account, history))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        errorNoti: state.signinReducer.err,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)