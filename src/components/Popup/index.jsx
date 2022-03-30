import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { PopupStyle } from '../../utils/material-ui';

export default function Popup(props) {
    const { open, onClose, movieInfo } = props

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const classes = PopupStyle();

    return (
        <Dialog
        className={classes.popup}
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullScreen={fullScreen}
        >
            <DialogTitle id="alert-dialog-title">
                {movieInfo.tenPhim} Trailer

            </DialogTitle>
            <Button autoFocus onClick={onClose}>
                    <CloseIcon/>
                </Button>

            <DialogContent  >
                <DialogContentText sx={{ width: "65vh", height: '50vh ' }} id="alert-dialog-description">
                    <iframe width="100%" height="100%" src={movieInfo.trailer}></iframe>
                </DialogContentText>
            </DialogContent>

        </Dialog>
    )
}
