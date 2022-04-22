import { Avatar, List, ListItem, ListItemIcon, ListItemText, Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { profilePageStyle } from '../../utils/material-ui'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { actUserInfoAPI } from "../../redux/modules/UserInfoReducer/action";
import { connect } from 'react-redux';
import { convertDate } from '../../utils/convertDate';
import BookingHistory from '../../components/BookingHistory'
function ProfilePage(props) {

    let account = {
        taiKhoan: ""
    }
    let accLocal = JSON.parse(localStorage.getItem("userInfo"))
    account.taiKhoan = accLocal.taiKhoan
    useEffect(() => {
        props.fetchUserInfo(account)
    }, [])


    const classes = profilePageStyle();
    const { accountInfo } = props;

    const renderProfilePage = () => {
        if (accountInfo) {
            return <Box className={classes.profileContent}>
                <Box className={classes.profileHeader}>
                    <Button>Edit profile<BorderColorIcon /></Button>
                    <Box className={classes.wave}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="0.5" d="M0,192L30,213.3C60,235,120,277,180,288C240,299,300,277,360,245.3C420,213,480,171,540,176C600,181,660,235,720,240C780,245,840,203,900,192C960,181,1020,203,1080,192C1140,181,1200,139,1260,144C1320,149,1380,203,1410,229.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                    </Box>
                </Box>

                <Box className={classes.profileBox}>
                    <Box className={classes.userInfo}>
                        <Avatar className={classes.avatarProfile} alt={accountInfo ? accountInfo.hoTen : ""} src="/static/images/avatar/1.jpg"></Avatar>
                        <Box className={classes.textProfile}>
                            <List>
                                <ListItem >
                                    <ListItemIcon ><AssignmentIndIcon /></ListItemIcon>
                                    <ListItemText sx={{ fontSize: '50px' }} primary={accountInfo.hoTen} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><EmailIcon /></ListItemIcon>
                                    <ListItemText primary={accountInfo.email} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PhoneAndroidIcon /></ListItemIcon>
                                    <ListItemText primary={accountInfo.soDT} />
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Box className={classes.bookingHistory}>
                        <BookingHistory bookedData={accountInfo.thongTinDatVe}></BookingHistory>
                    </Box>
                </Box>

            </Box>
        }
    }
    return (
        <Box className={classes.profileSection}>
            {renderProfilePage()}
        </Box>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserInfo: (account) => {
            dispatch(actUserInfoAPI(account))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        accountInfo: state.userInfoReducer.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)