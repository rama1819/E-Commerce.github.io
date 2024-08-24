let form = document.querySelector("form");
let userName = document.querySelectorAll("input")[0];
let Password = document.querySelectorAll("input")[1];
let euser = document.querySelectorAll("span")[0];
let epass = document.querySelectorAll("span")[1];
let esub = document.querySelectorAll("span")[2];
console.log(euser, epass, esub)
console.log(form, userName, Password);

let localData = JSON.parse(localStorage.getItem('data'));
console.log(localData);

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(userName.value);
//     if (userName.value == "" && Password.value == "") {
//         alert("userName is requird");
//         alert("Password requird");
//     } else if (userName.value == "") {
//         alert("Please enter your Username!");
//     }
//     else if (Password.value == "") {
//         alert("Please enter your password!");
//     }
//     else if (userName.value == "arun" && Password.value == "123456") {

//         alert("Boss welcom to the page")
//     } else {
//         alert("Invalid Username or Password");
//     }
// });

form.addEventListener("submit", (e) => {
    euser.innerHTML = "";
    epass.innerHTML = "";
    esub.innerHTML = "";
    let matching = localData.find((e) => {
        if (userName.value == e.emal && Password.value == e.pass){
            return e;
        }
    });
    console.log(matching);


    if (userName.value == "" && Password.value == "") {
        epass.innerHTML = "please type password";
        euser.innerHTML = "please type username";
        e.preventDefault()
    } else if (userName.value == "") {
        euser.innerHTML = "Please enter your Username";
        e.preventDefault();
    } else if (Password.value == "") {
        epass.innerHTML = "password should be 6 character long.";
        e.preventDefault();
    } else if (matching) {
        alert("Boss welcom to the page");
        localStorage.setItem("particularUSer",JSON.stringify(matching));
    } else {
        esub.innerHTML = "Wrong password";
        e.preventDefault();
    }

})
