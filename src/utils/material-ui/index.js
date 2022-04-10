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
export const profilePageStyle = makeStyles({
    profileSection: {
        width: "100%",
        height: "100%",
        fontSize: "36px",
        background: "white",
        "&::before":{
            content: "''",
            position: 'absolute',
            width: "280px",
            height: "280px",
            clipPath: "circle(50% at 50% 50%)",
            background: "linear-gradient(to top right, #3251a4 , #b763dc)",
            bottom: "50px",
            left: "20px"
        },
        "&::after":{
            content: "''",
            position: 'absolute',
            width: "320px",
            height: "320px",
            clipPath: "circle(50% at 50% 50%)",
            background: "linear-gradient(to bottom right, #ff213d , #ffa000)",
            top: "15px",
            right: "0",
        },
    },
    profileContent: {
        position: 'relative',
        width: "80%",
        margin: "20px auto",
        background: $colorBackground,
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        zIndex: "200",        
    },
    profileHeader: {
        position: "relative",
        background: "",
        height: "200px",
        "& button": {
            position: "absolute",
            fontSize: "14px",
            bottom: "5px",
            right: "40px",
            zIndex: "110",
            color: "white",
            background: $colorBackground,
            borderRadius: "15px",
            padding: "5px 15px",
            textTransform: "capitalize",
            letterSpacing: "1px",
            border: "1px solid white",
            overflow: "hidden",

            "&::before": {
                content: "''",
                position: "absolute",
                background: "linear-gradient(to bottom right, #741F80, #1D6FA0 )",
                height: "300px",
                width: "300px",
                transform: "translateX(300px)",
                transition: "all .5s",
                zIndex: "-1",
            },
            "&:hover::before":
            {
                transform: "translateX(0)",
            },
            "& svg": {
                fontSize: "16px",
                marginLeft: "5px",
            }
        },
    },
    wave: {
        position: "absolute",
        width: "100%",
        bottom: "-10px",
        left: "0",
        zIndex: "100",
    },
    profileBox: {
        position: 'relative',
        display: 'flex',
        color: "white",
    },
    userInfo: {
        width: "30%",
        position: 'relative',
        borderRight: "1px solid white",

    },
    avatarProfile: {
        transform: "translate(-50%,-50%)",
        position: 'absolute !important',
        left: "50%",
        fontSize: "60px !important",
        // margin: "0 auto",
        height: "100px !important",
        width: "100px !important",
        border: "4px solid white",
        boxShadow: "rgb(91 77 77) 6px 2px 16px 0px, rgb(255 255 255 / 80%) -6px -2px 16px",
        zIndex: "1000",
    },
    textProfile: {
        paddingTop: "52px",
        display: "flex",
        alignItems: "center",
        "& ul ": {
            width: "100%",
            textAlign: "center",
        },
        "& ul li": {
            "& svg": {
                color: "white",

            },
            "& div": {
                flex: "none",
            },
            "& span": {
                fontWeight: 'bold',
            }
        },
    },
    bookingHistory: {
        width: "90%",
        padding: "20px",
        background: "white",
    },
    table:{
        "& th":{
            fontWeight: "bold",
            color: colors.$purple,
            fontSize: "18px",
            borderBottom: "2px solid #000"

        },
        "& td":{
            border: "none",
        },
        "& tr:not(:last-child)":{    
            borderBottom: "1px solid #888"
        }
    }
    
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
    },
    MovieDetailTrailer: {
        maxWidth: "100%",
        position: 'relative',
        overflow: 'hidden',
        "&::before": {
            content: '""',
            display: 'block',
            paddingBottom: "35%",
        },
        "& iframe": {
            position: 'absolute',
            top: 0,
            left: 0,
        }
    },
    MovieDetailContent: {
        maxWidth: "100%",
        background: "green",
        display: "flex",
        borderTop: '2px solid',
        borderColor: colors.$white,
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
            textAlign: "left",
            border: "1px solid white",
            margin: "15px 50px",
            padding: "5px 10px",
            '& span': {
                display: 'inline-block',
                marginRight: '15px',
                fontSize: '18px',
                fontWeight: 'bold',
                width: '20%',
            },
            '& p': {
                width: '70%',
            }
        }
    }
})

