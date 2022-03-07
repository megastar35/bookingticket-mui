import { makeStyles } from '@mui/styles';

const $colorBackground = "#dad2b4";

export const registerForm = makeStyles({
    registerPage: {
        height: "100vh",
        background: $colorBackground,
        width: "100%",
    },
    Container: {
        "& form": {
            maxWidth: '500px',
            background: "white",
            padding: "30px",
            borderRadius: "15px",


        },
        "& .divSelection": {
            marginTop: "20px",
            "& button": {
                background: "#f8b500",
                fontSize: "16px",
                "&:hover": {
                    background: "#ffd159",
                },
                "& p": {
                    fontSize: "16px",
                }
            },
            "& a": {
                margin: "10px",
                textDecoration: "none",
                "&:hover": {
                    textDecoration: "underline",
                }
            }
        },

    }
});

export const loginForm = makeStyles({
    loginForm: {
        height: "100vh",
        background: $colorBackground,
        width: "100%",
    },
    Container: {
        "& form": {
            width: "450px",
            background: "linear-gradient(to right bottom, #c0392b, #8e44ad)",
            padding: "20px",
            borderRadius: "15px",

            "& .MuiFormControl-root": {
                borderRadius: "50px",
                "& label": {
                    color: "white",

                },

                "& .MuiInputBase-root": {
                    borderRadius: "50px",
                    
                    "& input": {
                        borderRadius: "50px",
                        borderColor: "white",

                        "&:focus": {
                            borderColor: "white",
                        }
                    },
                },

            },
            "& .MuiFormControl-root:focus": {
                background: "white",
            },


        },
    },
})


// "& #outlined-account-input, #outlined-password-input": {
//     borderRadius: "50px",
//     background: "wheat",
// }