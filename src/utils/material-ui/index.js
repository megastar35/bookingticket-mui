import { makeStyles } from '@mui/styles';
import { colors } from "../../utils/colors"
const $colorBackground = `linear-gradient(to bottom right, ${colors.$ocean}, ${colors.$purple})`;
const $colorButton = "#f8b500";
const $colorButtonHover = "#ffd159";

const glassMorphism = makeStyles({
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

export const CardMovie = makeStyles({
    card: {
        boxShadow: "rgba(255, 255, 255, 0.30)  20px 20px 50px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        borderTop: "1px solid rgba(255,255,255,0.5)",
        borderLeft: "1px solid rgba(255,255,255,0.5)",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(5px)",
    },
    imgBox: {
        position: 'relative',
        overflow: 'hidden',
        "&::before": {
            display: 'block',
            content: "''",
            paddingBottom: "75%",
        }
    },
    rating: {
        position: 'absolute',
        top: 20,
        right: 10,
        background: "#cc2b5e",
        color: "white",
        zIndex: "100",
        padding: "8px 15px",
        fontWeight: "bold",
        "&::before, &::after": {
            display: "block",
            content: "''",
            background: "#cc2b5e",
            width: 40,
            height: 2,
            transform: "translate(10px,-20px) rotate(50deg)"
        },
        "&::after": {
            transform: "translate(-10px,-45px) rotate(-50deg)"
        },
        "& p": {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",

        }
    },
    cardContent: {
        "& div, span": {
            color: "white",
        }
    },
    cardAction: {
        display: 'flex',
        justifyContent: "space-around",
        "& a": {
            textDecoration: "none",
        },
        "& .detailBtn, .trailerBtn": {
            fontWeight: "bold",
            fontSize: "16px",
            color: "white",
            background: " #00c3ff",
            padding: "5px 10px",
            "&:hover": {
                color: "white",
            }
        },
        "& .trailerBtn": {
            background: " #34e89e",
        }
    }
})

export const ListMovieSection = makeStyles({
    MovieList: {
        background: $colorBackground,
        "& h4": {
            borderBottom: "2px solid",
            marginBottom: "10px",
        }
    },
})
export const PopupStyle = makeStyles({
    popup: {
        "& button": {
            position: "absolute",
            top: 0,
            right: 0,
            color: "gray",
            "&:hover": {
                color: "black",
            }
        }
    }
})

export const MovieDetailStyle = makeStyles({
    MovieDetailSection: {
        width: "100%",
        height: "100%",
        fontSize: "36px",
        textAlign: "center",
    },
    DetaiMovielPage: {
        width: "80%",
        margin: "auto",
        background: "red",
    },
    MovieDetailTrailer: {
        maxWidth: "100%",
        height: "60vh",
        background: "orange",
    },
    MovieDetailContent: {
        maxWidth: "100%",
        height: "40vh",
        background: "green",
        display: "flex",
        "& #imgBox": {
            background: "purple",
            maxWidth: "220px",
            height: "250px",
            transform: "translate(20px, -125px)",
            position: 'relative',
            overflow: 'hidden',
            "&::before": {
                display: 'block',
                content: "''",
                paddingBottom: "75%",
            }
        },
        "& #moTaBox": {
            display:"grid",
            textAlign: "left",
            border: "1px solid white",
            margin: "15px 50px",
            padding: "5px 10px",
            
        }
    }
})

