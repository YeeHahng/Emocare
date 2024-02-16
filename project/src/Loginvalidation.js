function validation(values) {
    let error = {}
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,})/;

    if(values.email === ""){
        error.email = "Email should not ne empty"
    }
    else if(!emailPattern.test(values.email)){
        error.email = "Email didnt match"
    }
    else{
        error.email = ""
    }

    if(values.password ===""){
        error.password = "Password should not be empty"
    }
    else if(!passwordPattern.test(values.password)){
        error.password = "password didnt match"
    }
    else {
        error.password = ""
    }
    return error;
}

export default validation;