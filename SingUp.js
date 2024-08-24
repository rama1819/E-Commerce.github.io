let fristName = document.querySelectorAll("input")[0];
// let lastName = document.querySelectorAll("input")[1];
let phoneNumber = document.querySelectorAll("input")[1];
let email = document.querySelectorAll("input")[2];
let password = document.querySelectorAll("input")[3];
let RepeatPassword = document.querySelectorAll("input")[4];
// let efirst = document.querySelectorAll("span")[0]
// let elast = document.querySelectorAll("span")[1];
let efrist = document.querySelectorAll("span")[0];
let ePhone = document.querySelectorAll("span")[1];
let eemail = document.querySelectorAll("span")[2];
let epass = document.querySelectorAll("span")[3];
let eRpas = document.querySelectorAll("span")[4];
let storge = [];
console.log(storge);

let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData);

if(localData){
    storge=localData;
    console.log(storge)
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {

    let regx = /^[a-zA-Z]{2,15}$/;
    let regx1 = /^[6-9][0-9]{9}$/;//For Mobile
    let regx2 = /^[a-zA-Z0-9]{8,15}$/; // For Password
    let flag = true;
    e.preventDefault();


    //Frist Name
    if (fristName.value == "") {
        efrist.innerHTML = "First name is required <br>";
        e.preventDefault();
        flag = false;
    }
    else if (regx.test(fristName.value)) {
        efrist.innerHTML = "";
    } else {
        efrist.innerHTML = "Invalid first name <br>"
        e.preventDefault();
        flag = false;

    }

    //Phoone Numbwer
    if (phoneNumber.value == "") {
        ePhone.innerHTML = "number is required <br>";
        e.preventDefault();
        flag = false;
    }
    else if (regx1.test(phoneNumber.value)) {
        ePhone.innerHTML = "";
    } else {
        ePhone.innerHTML = "Invalid  Phone number <br>"
        e.preventDefault();
        flag = false;

    }
    // checkEmail()
    if (email.value == "") {
        eemail.innerHTML = "Email repuired <br>";
        e.preventDefault();
        flag = false;
    }
    else {
        eemail.innerHTML = "";
    }

    // Passowrd
    if (password.value == "") {
        epass.innerHTML = "Enter the Password <br>";
        e.preventDefault();
        flag = false;
    } else if (regx2.test(password.value)) {
        epass.innerHTML = "";
    }
    else {
        epass.innerHTML = "Passwords  Invalid<br>";
        e.preventDefault();
        flag = false;

    }

    //Repeat Password

    if (RepeatPassword.value == "") {
        eRpas.innerHTML = "Plz Repeat Password <br>";
        e.preventDefault();
        flag = false;

    }
    else if (RepeatPassword.value == password.value) {
        eRpas.innerHTML = ""
    }
    else {
        eRpas.innerHTML = " Passwords do not match <br>";
        e.preventDefault();
        flag = false;

    }

    if (flag) {
        let obj = {
            first: fristName.value,
            phone: phoneNumber.value,
            emal: email.value,
            pass: password.value,
        };
        storge.push(obj);
        console.log(storge);
        localStorage.setItem("data", JSON.stringify(storge));


    }


})




// console.log(eemail, password, RepeatPassword, email, eRpas, epass, form)