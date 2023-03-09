function validateForm() {
    var date = document.forms["myForm"]["date"].value;
    var email = document.forms["myForm"]["email"].value;
    var mobile = document.forms["myForm"]["mobile"].value;

    var emailRegex = /^\S+@\S+\.\S+$/;
    var mobileRegex = /^[1-9]\d{9}$/;
    var dateRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;

    if (!dateRegex.test(date)) {
        alert("Please enter a valid date in DD-MM-YYYY format.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid mobile number");
        return false;
    }
    return true;
}