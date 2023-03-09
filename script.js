function validateForm() {
    let date = document.forms["myForm"]["date"].value;
    let mobile = document.forms["myForm"]["mobile"].value;

    let mobileRegex = /^[1-9]\d{9}$/;
    let dateRegex = /^[0-9]\d{1,2}\/[0-9]\d{1,2}\/[0-9]\d{4}$/;

    if (!dateRegex.test(date)) {
        alert("Please enter a valid date in DD-MM-YYYY format.");
        return false;
    }
    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid mobile number");
        return false;
    }
    return true;
}