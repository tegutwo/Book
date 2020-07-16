let client = "";
let hairChoice = "";
let dateChoice = "";
//Hair
let hButtonBack = document.querySelector("a.btn_back--hair");
console.log(hButtonBack);
hButtonBack.addEventListener("click",goToContacts);
let hButtonNext = document.querySelector("a.btn_next--hair");
//BOOKER
let bButtonBack = document.querySelector("a.btn_Booker--back");
//contact
cButtonNext = document.querySelector("a.btn_contact--next");
cButtonBack = document.querySelector("a.btn_contact--back");
cButtonNext.addEventListener("click",goToHair);
console.log(cButtonNext);

function dayDetails(day,month,year,time){
    this.day = day;
    this.month = month;
    this.year = year;
    this.time = time;
}
function clientDetails(name,number,email){
        this.name = name;
        this.number = number;
        this.email = email;
}
bButtonBack.addEventListener("click",goToHair);
function goToHair(event){
    console.log(this);
    if(this == bButtonBack){
        console.log("Page: BOOKER");
        let sHair = document.querySelector("section#Hair");
    let sBook = document.querySelector("section.BOOKER");
    sHair.classList.remove("hide");
    sBook.classList.add("hide");
    }
    else if(this == cButtonNext){
        if(validate()){
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
            client = new clientDetails(clientName.value,clientNumber.value,clientEmail.value);
            console.log(client);
        }
       

    }
    
}
function goToContacts(){
        let sHair = document.querySelector("section#Hair");
        let sContacts = document.querySelector("section#contacts");
        sHair.classList.add("hide");
        sContacts.classList.remove("hide");
}
hButtonNext.addEventListener("click",goToBook);
function goToBook(){
    let sHair = document.querySelector("section#Hair");
    let sBook = document.querySelector("section.BOOKER");
    sHair.classList.add("hide");
    sBook.classList.remove("hide");
    let style = document.querySelector("select#style");
    let length = document.querySelector("select#length");
    let Color = document.querySelector("select#Color");
    console.log(Color.value);
    hairChoice = new hair(style.value,length.value,Color.value);
    console.log(hairChoice);
} 
function hair(style, Length,color){
     this.style = style;
     this.Length = Length;
     this.color = color;
}


//last page
let finish = document.querySelector("a.btn_Booker--next");
finish.addEventListener("click",goToFinish);

 function goToFinish(){
    console.log(time);
    let monthChoice = document.querySelector("span.span_month").innerHTML;
    let yearChoice = document.querySelector("span.span_year").innerHTML;
    if(DayChoice!= null && !isNaN(DayChoice)){
        let dialog = document.querySelector("section.dialog");
        dateChoice = new dayDetails(DayChoice,monthChoice,yearChoice,time);
     console.log(dateChoice);
     let sDialog = document.querySelector("section#dialog");
    let sBook = document.querySelector("section.BOOKER");
    sDialog.classList.remove("hide");
    sBook.classList.add("hide");
    let dialogBox = document.querySelector("a.btn_dialog--Back");
    let list = document.createElement("ul");
    let dateArray = ["Name: " +client.name+" "+"Number: "+ client.number + " " + "Email: " + client.email ,"Day:"+" "+dateChoice.day + " "+"Month:"+" "+dateChoice.month+" "+"Time:"+" "+ dateChoice.time];
    let HairArray = ["Style:"+" "+hairChoice.style + ", "+"Length:"+" "+hairChoice.Length + ", " + "Color:"+" "+ hairChoice.color];
    console.log(dateArray);
        for(let i = 0; i<dateArray.length;i++){
            let listItem = document.createElement("li");
            let text = document.createTextNode(dateArray[i]);
            listItem.classList.add("dialog_listItem")
            listItem.appendChild(text);
            list.appendChild(listItem);
            list.before
        }
        for(let i = 0; i<HairArray.length;i++){
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
 phone.addEventListener("click" ,addValue);
 function addValue(){
        console.dir(this);
        if(phone.value == ""){
            phone.value = "+254 ";
        }
    
 }
 function validate() {
      let name =document.querySelector("input#FullName");
        let number = document.querySelector("input#Number");
        let email = document.querySelector("input#Email");
        const re = /.+\@+.+\.com/g;
       console.log(re.test(email.value));
     
    if( name.value == "" ) {
        console.log("Validate 2");
        alert( "Please provide your name!" );
           name.focus() ;
           return false;
    }
    else if( number.value == "" || number.value.length <=10 ||  number.value.length >15 ) {
        console.log("Validate 3");
        alert( "Please provide your number" );
           number.focus() ;
           return false;
    }
    else if(email.value == "" || re.test(email.value) ){
        console.log("Validate 3");
        alert( "Please Check Your Email" );
           number.focus() ;
           return false;
    }
    // alert( "Please provide your name!" );
    //    document.querySelector("input#FullName").focus() ;
    //    return false;
    return( true );
 }

