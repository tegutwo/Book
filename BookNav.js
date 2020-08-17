let client = "";
let hairChoice = "";
let dateChoice = "";
//Hair
let hButtonBack = document.querySelector("a.btn_back--hair");
console.log(hButtonBack);
hButtonBack.addEventListener("click", goToContacts);
let hButtonNext = document.querySelector("a.btn_next--hair");
//BOOKER
let bButtonBack = document.querySelector("a.btn_Booker--back");
//contact
cButtonNext = document.querySelector("a.btn_contact--next");
cButtonBack = document.querySelector("a.btn_contact--back");
cButtonNext.addEventListener("click", goToHair);
console.log(cButtonNext);

function dayDetails(day, month, year, time) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.time = time;
}

function clientDetails(name, number, email, location) {
    this.name = name;
    this.number = number;
    this.email = email;
    this.location = location;
}
bButtonBack.addEventListener("click", goToHair);

function goToHair(event) {
    console.log(this);
    if (this == bButtonBack) {
        console.log("Page: BOOKER");
        let sHair = document.querySelector("section#Hair");
        let sBook = document.querySelector("section.BOOKER");
        sHair.classList.remove("hide");
        sBook.classList.add("hide");
    } else if (this == cButtonNext) {
        if (validate()) {
            console.log("Page: Contacts");
            let sHair = document.querySelector("section#Hair");
            let sContacts = document.querySelector("section#contacts");
            sHair.classList.remove("hide");
            sContacts.classList.add("hide");
            let clientName = document.querySelector("input#FullName");
            console.log(clientName);
            let clientNumber = document.querySelector("input#Number");
            console.log(clientNumber);
            let clientEmail = document.querySelector("input#Email");
            console.log(clientEmail);
            let clientLocation = document.querySelector("input#location");
            client = new clientDetails(clientName.value, clientNumber.value, clientEmail.value, clientLocation.value);
            console.log(client);
        }


    }

}

function goToContacts() {
    let sHair = document.querySelector("section#Hair");
    let sContacts = document.querySelector("section#contacts");
    sHair.classList.add("hide");
    sContacts.classList.remove("hide");
}
hButtonNext.addEventListener("click", goToBook);

function goToBook() {
    let sHair = document.querySelector("section#Hair");
    let sBook = document.querySelector("section.BOOKER");
    sHair.classList.add("hide");
    sBook.classList.remove("hide");
    let style = document.querySelector("select#style");
    let length = document.querySelector("select#length");
    let Color = document.querySelector("select#Color");
    console.log(Color.value);
    hairChoice = new hair(style.value, length.value, Color.value);
    console.log(hairChoice);
}

function hair(style, Length, color) {
    this.style = style;
    this.Length = Length;
    this.color = color;
}


//last page
let finish = document.querySelector("a.btn_Booker--next");
finish.addEventListener("click", goToFinish);

function goToFinish() {
    console.log(time);
    let monthChoice = document.querySelector("span.span_month").innerHTML;
    let yearChoice = document.querySelector("span.span_year").innerHTML;
    if (DayChoice != null && !isNaN(DayChoice)) {
        let dialog = document.querySelector("section.dialog");
        dateChoice = new dayDetails(DayChoice, monthChoice, yearChoice, time);
        console.log(dateChoice);
        let sDialog = document.querySelector("section#dialog");
        let sBook = document.querySelector("section.BOOKER");
        sDialog.classList.remove("hide");
        sBook.classList.add("hide");
        let dialogBox = document.querySelector("a.btn_dialog--Back");
        let list = document.createElement("ul");
        let dateArray = ["Name: " + client.name + ", " + "Number: " + client.number + " " + "Email: " + client.email + ", " + "Location: " + client.location, "Day:" + " " + dateChoice.day + " " + "Month:" + " " + dateChoice.month + " " + "Time:" + " " + dateChoice.time];
        let HairArray = ["Style:" + " " + hairChoice.style + ", " + "Length:" + " " + hairChoice.Length + ", " + "Color:" + " " + hairChoice.color];
        console.log(dateArray);
        for (let i = 0; i < dateArray.length; i++) {
            let listItem = document.createElement("li");
            let text = document.createTextNode(dateArray[i]);
            listItem.classList.add("dialog_listItem")
            listItem.appendChild(text);
            list.appendChild(listItem);
            list.before
        }
        for (let i = 0; i < HairArray.length; i++) {
            let listItem = document.createElement("li");
            let text = document.createTextNode(HairArray[i]);
            listItem.classList.add("dialog_listItem")
            listItem.appendChild(text);
            list.appendChild(listItem);
        }
        dialogBox.before(list);

    }

}
//Contact Extras
let phone = document.querySelector("input#Number");
console.dir(phone)
phone.addEventListener("click", addValue);

function addValue() {
    console.dir(this);
    if (phone.value == "") {
        phone.value = "+254 ";
    }

}

function validate() {
    let name = document.querySelector("input#FullName");
    let number = document.querySelector("input#Number");
    let email = document.querySelector("input#Email");
    let location = document.querySelector("input#location");
    const re = /.+\@+.+\.com/g;
    console.log(re.test(email.value));

    if (name.value == "") {
        console.log("Validate 2");
        alert("Please provide your name!");
        name.focus();
        return false;
    } else if (number.value == "" || number.value.length < 10 || number.value.length > 15) {
        console.log("Validate 3");
        alert("Please provide your number");
        number.focus();
        return false;
    } else if (email.value == "" || re.test(email.value)) {
        console.log("Validate 3");
        alert("Please Check Your Email");
        number.focus();
        return false;
    } else if (location.value == "") {
        console.log("Validate 4");
        alert("Please Enter a Location");
        number.focus();
        return false;
    }
    // alert( "Please provide your name!" );
    //    document.querySelector("input#FullName").focus() ;
    //    return false;
    return (true);
}
/******** Price Display and Change Functionality********** */
let hStyle = document.querySelector("select#style").addEventListener("click", getPrice);
let hLength = document.querySelector("select#length").addEventListener("click", getPrice);

function getPrice() {
    let midBack = document.querySelector("option[value = 'Mid-Back']");
    let hStyle = document.querySelector("select#style");
    let hLength = document.querySelector("select#length");
    let price = document.querySelector("p#price");
    price.style.color = "Green";
    if (hStyle != "Bohemian Goddess Locs") {
        midBack.style.display = "inherit";
    }
    if (hStyle.value == "Faux Locs") {
        if (hLength.value == "Short") {
            price.innerHTML = " Price: 2700/=";
        } else if (hLength.value == "Mid-Back") {
            price.innerHTML = " Price: 3000/=";
        } else if (hLength.value == "Long") {
            price.innerHTML = " Price: 3200/=";
        }

    } else if (hStyle.value == "Faux Goddess Locs") {
        if (hLength.value == "short") {

        } else if (hLength.value == "Mid-Back") {

        } else if (hLength.value == "Long") {

        }
    } else if (hStyle.value == "Bohemian Locs") {
        if (hLength.value == "short") {

        } else if (hLength.value == "Mid-Back") {

        } else if (hLength.value == "Long") {

        }
    } else if (hStyle.value == "Bohemian Goddess Locs") {

        if (midBack.style.display != "none") {
            midBack.style.display = "none";
            if (hLength.value == "Mid-Back") {
                console.dir(hLength);
                hLength.value = hLength.options[0].value;
            }
        }
        if (hLength.value == "short") {

        } else if (hLength.value == "Long") {

        }
    } else if (hStyle.value == "super-dread") {
        if (hLength.value == "short") {

        } else if (hLength.value == "Mid-Back") {

        } else if (hLength.value == "Long") {

        }
    } else if (hStyle.value == "kinky-wavy") {
        if (hLength.value == "short") {

        } else if (hLength.value == "Mid-Back") {

        } else if (hLength.value == "Long") {

        }
    } else if (hStyle.value == "Reggae Locs") {
        if (hLength.value == "short") {

        } else if (hLength.value == "Mid-Back") {

        } else if (hLength.value == "Long") {

        }

    } else if (hStyle.value == "Distress Locs") {
        if (hLength.value == "short") {

        } else if (hLength.value == "Mid-Back") {

        } else if (hLength.value == "Long") {

        }

    }

}
getPrice();




let confirm = document.querySelector("a.btn_dialog--confirm");
confirm.addEventListener('click', writeBookingData);
let fDatabase = firebase.database().ref('BOOKER');

function writeBookingData(userId, year, month, day, time, details) {
    userId = "Tegutwo Culture";
    year = dateChoice.year;
    month = dateChoice.month;
    day = dateChoice.day;
    time = dateChoice.time;
    details = {
        client: JSON.stringify(client),
        hair: JSON.stringify(hairChoice)
    }

    firebase.database().ref('BOOKER/' + userId + "/" + year + "/" + month + "/" + day + "/" + time).set({
        details: details
    });

}
// let backs = document.querySelector("a.btn_dialog--Back");
// backs.addEventListener("click",readBookingData);
function readBookingData(userId, year, month) {
    userId = "Tegutwo Culture";
    year = year;
    month = month;
    let ref = `BOOKER/${userId}/${year}/${month}/`;
    console.log(ref);
    let data = firebase.database().ref(ref);
    data.on("value", (snapshot) => {
        return snapshot.val();
    })
}