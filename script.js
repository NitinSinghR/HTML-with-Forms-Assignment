const validateForm=()=> {
    let name = document.forms["myForm"]["name"].value;
    let username = document.forms["myForm"]["username"].value;
    let date = document.forms["myForm"]["date"].value;
    let email = document.forms["myForm"]["email"].value;
    let mobile = document.forms["myForm"]["mobile"].value;

    let emailRegex = /^\S+@\S+\.\S+$/;
    let mobileRegex = /^[1-9]\d{9}$/;

    if(name=="" || name.length<4){    
        alert("Enter the name");
        return false;
    }
    if(username=="" || username.length<4){    
        alert("Enter the username");
        return false;
    }
    if (date=="") {
        alert("Please enter date of birth in DD-MM-YYYY format.");
        return false;
    }
    if (!emailRegex.test(email)||email=="") {
        alert("Please enter a valid email address");
        return false;
    }
    if (!mobileRegex.test(mobile) || mobile=="") {
        alert("Please enter a valid mobile number");
        return false;
    }
    return true;
}