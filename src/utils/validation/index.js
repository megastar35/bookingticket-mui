export const checkEmpty = (input) => {
    if(input === ""){
        return "Can't be empty";
    }else{
        return "";
    }
}

export const emailValid = (email) =>{
    const re = /^([\w.%+-]+)@([\w-]+.)+([\w]{2,})$/i;
    if(email.match(re) ){
        return "";
    }
    return "Email not acceptable";
}

export const phoneValid = (phone)=>{
    const matchNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(phone.match(matchNum)){
        return "";
    }
    return "Must be number and at least 10 number";
}