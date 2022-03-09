import { makeStyles } from '@mui/styles';

const $colorBackground = "#dad2b4";
const $colorButton = "#f8b500";
const $colorButtonHover = "#ffd159";

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
                background: $colorButton,
                fontSize: "16px",
                "&:hover": {
                    background: $colorButtonHover,
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
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
                        color: "white",
                    },
                    "& fieldset": {

                        borderColor: "white !important",

                    },
                },
            },
            "& .selectDiv": {
                width: "90%",
                "& a": {
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                        textDecoration: "underline",
                    },
                },
                "& button": {
                    width: "40%",
                    background: $colorButton,
                    "&:hover": {
                        background: $colorButtonHover,
                    }
                }
            }
        },
    },
})


// "& #outlined-account-input, #outlined-password-input": {
//     borderRadius: "50px",
//     background: "wheat",
// }