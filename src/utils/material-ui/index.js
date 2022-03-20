import { makeStyles } from '@mui/styles';

const $colorBackground = "linear-gradient(to right bottom, #c0392b, #8e44ad)";
const $colorButton = "#f8b500";
const $colorButtonHover = "#ffd159";

const glassMorphism = makeStyles({
    background: $colorBackground,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
})
export const registerForm = makeStyles({
    registerPage: {
        height: "100vh",
        background: $colorBackground,
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Container: {
        "& form": {
            maxWidth: '500px',
            background: "rgba(255,255,255,0.1)",
            boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
            padding: "20px",
            borderRadius: "15px",
            borderTop: "1px solid rgba(255,255,255,0.5)",
            borderLeft: "1px solid rgba(255,255,255,0.5)",
            backdropFilter: "blur(5px)",
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

        },
        "& .divSelection": {
            marginTop: "20px",
            "& button": {
                background: $colorButton,

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
                color: "white",
                "&:hover": {
                    textDecoration: "underline",
                }
            }
        },

    }
});

export const loginLayout = makeStyles({
    loginForm: {
        height: "100vh",
        background: $colorBackground,
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Container: {
        "& form": {
            width: "350px",
            height: "60vh",
            background: "rgba(255,255,255,0.1)",
            boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
            padding: "20px",
            borderRadius: "15px",
            borderTop: "1px solid rgba(255,255,255,0.5)",
            borderLeft: "1px solid rgba(255,255,255,0.5)",
            backdropFilter: "blur(5px)",

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
                marginTop: "20px",
                "& a": {
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                        textDecoration: "underline",
                    },
                },
                "& button": {
                    width: "40%",
                    padding: "16px 6px",
                    "& p": {
                        fontSize: "16px",
                    },

                    background: $colorButton,
                    "&:hover": {
                        background: $colorButtonHover,
                    }
                }
            }
        },
    },
})

export const renderError = makeStyles({
    p: {
        color: "#f36f6f",
        background: "white",
        padding: "12px",
        borderRadius: '15px',
    },

})
export const StyledInputBase = makeStyles({
    InputBase: {
        color: 'inherit',
        '& .MuiInputBase-input': {
            // padding: theme.spacing(1, 1, 1, 0),
            // // vertical padding + font size from searchIcon
            // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            // transition: theme.transitions.create('width'),
            width: '100%',

        },
    },
},
)

export const MovieCard = makeStyles({
    
})

