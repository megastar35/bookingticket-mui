import { Avatar, Box, Button, Container, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SendIcon from '@mui/icons-material/Send';
export default function LoginPage() {
    return (
        <Container maxWidth="sm" sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column" }} component="form" >
                <Avatar sx={{ bgcolor: "#ef2020" }}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography variant="h4"> Login</Typography>
                <TextField
                    id="outlined-account-input"
                    label="Account"
                    type="text"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    margin="normal"
                    fullWidth
                />
                <Button variant="contained" fullWidth endIcon={<SendIcon />}>
                    <Typography fontWeight="bold" fontSize="24px">
                        Sign In
                    </Typography>
                </Button>
            </Box>
        </Container>

    )
}
