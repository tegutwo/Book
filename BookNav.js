let hairChoice = "";
let dateChoice = "";
let hButtonNext = document.querySelector("a.btn_next--hair");
let bButtonNext = document.querySelector("a.btn_Booker--back");
console.log(bButtonNext);
function dayDetails(day,month,year,time){
    this.day = day;
    this.month = month;
    this.year = year;
    this.time = time;

}
bButtonNext.addEventListener("click",goToHair);
function goToHair(){
    let sHair = document.querySelector("section#Hair");
    let sBook = document.querySelector("section.BOOKER");
    sHair.classList.remove("hide");
    sBook.classList.add("hide");
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
    let dateArray = ["Day:"+" "+dateChoice.day,"Month:"+" "+dateChoice.month,"Time:"+" "+ dateChoice.time];
    let HairArray = ["Style:"+" "+hairChoice.style,"Lenght:"+" "+hairChoice.Length,"Color:"+" "+ hairChoice.color];
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