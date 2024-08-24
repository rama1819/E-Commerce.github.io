let login = document.querySelector("#right1");
console.log(login);
let particularUSer = JSON.parse(localStorage.getItem("particularUSer"));
console.log(particularUSer);

let malecont = document.querySelector("#male_cont");
let femalecont = document.querySelector("#female_cont");
let popup = document.querySelector("#popup");
let kids = document.querySelector("#kids_cont");
let elec = document.querySelector("#electronics_cont");
let x = document.querySelector("#x");
let dynmaic = document.querySelector("#dynmaic");

console.log(dynmaic)
let cartStorage = [];

x.addEventListener("click", () => {
    popup.style.right = "-100%";
});

console.log(malecont, femalecont, elec, kids)
if (particularUSer) {
    login.innerHTML = `<span>${particularUSer.first}</span>
    <a href="./Ecommrce.html" id="logout"><button>logout</button></a>`;

    let logout = document.querySelector("#logout");
    logout.addEventListener("click", () => {
        localStorage.removeItem("particularUSer");
    });

};

async function fetchData() {
    let DataFromInterNet = await fetch("https://www.shoppersstack.com/shopping/products/alpha");

    let allData = await DataFromInterNet.json();

    console.log(DataFromInterNet)
    console.log(allData.data);

    let maleData = allData.data.filter((e) => {
        if (e.category == "men") {
            return e;
        }
    });
    console.log(maleData);


    maleData.map((e) => {
        malecont.innerHTML += `<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="">
        <h2>Name: ${e.name}</h2>
        <h3>Price: ${e.price}</h3>
        <h4>Rating: ${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`
    });

    let femaleData = allData.data.filter((e) => {
        if (e.category == "women") {
            return e;
        }
    });

    console.log(femalecont);

    femaleData.map((e) => {
        femalecont.innerHTML += `<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="">
        <h2>Name: ${e.name}</h2>
        <h3>Price: ${e.price}</h3>
        <h4>Rating: ${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`
    });

    let kidsData = allData.data.filter((e) => {
        if (e.category == "kids") {
            return e;
        }
    });

    console.log(kids);

    kidsData.map((e) => {
        kids.innerHTML += `<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="">
        <h2>Name: ${e.name}</h2>
        <h3>Price: ${e.price}</h3>
        <h4>Rating: ${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`
    });

    let Elc = allData.data.filter((e) => {
        if (e.category == "electronics") {
            return e;
        }
    });

    console.log(Elc);

    Elc.map((e) => {
        elec.innerHTML += `<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="">
        <h2>Name: ${e.name}</h2>
        <h3>Price: ${e.price}</h3>
        <h4>Rating: ${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`
    });

    let btn = document.querySelectorAll(".btn");
    btn.forEach((e) => {
        e.addEventListener("click", () => {
            popup.style.right = "0";
            if (particularUSer) {
                let parentElement = e.parentElement.id;
                console.log(parentElement)
                let oneProduct = allData.data.find((e) => {
                    if (e.productId == parentElement) {
                        return e;
                    }
                })
                cartStorage.push(oneProduct)
                console.log(cartStorage);
                print();
                subTotal();
                del();
                GrandTotal();
                payment();
            } else {
                dynmaic.innerHTML = `<a href="./loginFrom.html">login frist</a>`
            }

        })
    })

}
fetchData();

function print() {
    dynmaic.innerHTML = "";
    cartStorage.map((e) => {
        dynmaic.innerHTML += `<div class="cart-design" id="${e.productId}">
                    <div >
                        <img src="${e.productImageURLs[0]}" alt="">
                    </div>
                    <div>
                        <h3>${e.name}</h3>
                        <input type="number"></div>
                    <div>
                        <h4 class="price">${e.price}</h4>
                    </div>
                    <div>
                        <h4 class="sub">${e.price}</h4>\
                        <i class="fa-duotone fa-trash"></i>
                    </div>
                </div>`
    });
    del();
}

function del() {
    let deletbtn = document.querySelectorAll(".fa-trash");
    deletbtn.forEach((e) => {
        e.addEventListener("click", () => {
            let parentElement = e.parentElement.parentElement;
            console.log(parentElement);
            cartStorage = cartStorage.filter((e) => {
                if (parentElement.id != e.productId) {
                    return e;
                }
            });
            print();
            GrandTotal();
        });
    });
}

function subTotal() {
    let sub = document.querySelectorAll(".sub");
    console.log(sub);
    let quantiyt = document.querySelectorAll("input");
    quantiyt.forEach((e) => {
        e.addEventListener("input", () => {
            if (e.value < 1) {
                e.value = 1;
            }
            let parentElement = e.parentElement.parentElement;
            let price = parentElement.querySelector(".price");
            let sub = parentElement.querySelector(".sub");


            sub.innerHTML = e.value * price.innerHTML;
            GrandTotal();
        });

    });
}

function GrandTotal() {
    let gt = document.querySelector("#gt");
    let sub = document.querySelectorAll(".sub");
    let sum = 0;
    sub.forEach((e) => {
        let total = parseInt(e.innerHTML);
        sum = sum + total;
    })
    gt.innerHTML = sum;

}

function payment() {
    let payBtn = document.querySelector("#payBtn");
    let num;
    payBtn.addEventListener("click", () => {
        if (cartStorage.length != 0) {
            let a = Math.floor(Math.random()*(9999-1111))+1111;
            num = a;
            alert("Your One time password is : " + num);
            console.log(cartStorage); 
            console.log(num);
        }else{
            alert("Please add some items to cart!");
        }
    })
}