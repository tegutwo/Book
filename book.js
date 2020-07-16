
    //Calendar Initialisation
    let date = new Date();                                
    let currentMonth = date.getMonth();
    let time = getTime();
    let DayChoice =  null;
    let currentYear = date.getFullYear();
    let daysOfWeek = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    let months = ["January","February","March","April","May","June","July","August","September","October","Novemeber","December"];
    let dataBase =["{\"day\":24,\"month\":6,\"year\":2020,\"time\":\"Morning\"}","{\"day\":6,\"month\":6,\"year\":2020,\"time\":\"Evening\"}","{\"day\":27,\"month\":6,\"year\":2020,\"time\":\"Evening\"}","{\"day\":8,\"month\":6,\"year\":2020,\"time\":\"Evening\"}","{\"day\":11,\"month\":6,\"year\":2020,\"time\":\"Morning\"}","{\"day\":30,\"month\":6,\"year\":2020,\"time\":\"Morning\"}","{\"day\":16,\"month\":6,\"year\":2020,\"time\":\"Morning\"}","{\"day\":21,\"month\":6,\"year\":2020,\"time\":\"Evening\"}"];
    // console.log(dataBase);
    // dataBase = JSON.parse(dataBase[0]); 
    let DOW = "Choose A date";
    //Calendar Initialisation Functions
    function DisplayCalendar(month,year){
        let header = document.getElementById("table_header");
        let monthName = months[month];
        header.innerHTML = monthName +"  "+ year;
        let day = new Date(year,month).getDay();
        let currentDate = new Date().getDate();
        daysInMonth = 32 - new Date(year,month,32).getDate();
        let body = document.querySelector("tbody");
        body.innerHTML = "";
        let date = 1;
        for(i=0;i<6;i++){
            let tr = document.createElement("tr");
            for(j=0;j<7;j++){
                if(i === 0 && day > j){
                    let cell = document.createElement("td");
                    let text = document.createTextNode("");
                    cell.appendChild(text);
                    tr.appendChild(cell);
                }
                else if(date > daysInMonth){
                    break;
                }
                else{
                    let cell = document.createElement("td");
                     let title= new dayDetails(date,month,year,["Morning","Evening"]);
                    cell.title = JSON.stringify(title);
                    let text = document.createTextNode(date);
                    
                    cell.appendChild(text);
                    cell.classList.add("column--cells");
                    
                    if(date === currentDate){
                        cell.classList.add("current_date");
                    }
                    if (date < currentDate){
                        cell.classList.add("past_date");
                    }
                    if(date >= currentDate){

                    }
                    tr.appendChild(cell);
                    date++;
                }
            }
            body.appendChild(tr);
        }

    
    } 
    //Calendar Functionality
//     var db = firebase.database().ref().child("2020");
//  let year = new Date().getFullYear();
//   for(let i=0;i<months.length;i++){
//       db.child(months[i]).push();
//   }
//   db.child("January").child(1).child("Morning").set("false");
//   db.child("January").child(1).child("Evening").set("false");
    function setDate(){ 
        DayChoice = this.innerHTML;
       setBookOptions(this.innerHTML);
        let classes= document.querySelectorAll("td.column--cells");
        for( let i=0; i<classes.length;i++){
            if(classes[i].classList.contains("selected")){
                classes[i].classList.toggle("selected");
            }
        }
        this.classList.toggle("selected");
        getTime();
        
            formatDayInput(getDayOfWeek(this.innerHTML),this.innerHTML,time);
            let gDOW = new booked(getDayOfWeek(this.innerHTML),this.innerHTML);
            DOW = gDOW;
            console.log()
            let ob = JSON.parse(this.title);
            let  fInput = document.querySelector("input#date");
            fInput.focus();
            // db.child(months[ob.month]).child(this.innerHTML).child("Morning").set("true");
        }
        
        function controlBooking(cDate){
                let Morning = document.querySelector("label[for='Morning']");
                let Evening = document.querySelector("label[for='Evening']");
                let i = 0;
                for( i= 0;i<dataBase.length;i++){
                    let oDay = JSON.parse(dataBase[i]);
                    if(cDate == oDay.day && oDay.time == "Morning"){
                        return Morning;
                    }
                    else if(cDate == oDay.day && oDay.time == "Evening") {
                        return Evening;
                    }
                    else{
                       
                    }
                }
        }
        function setBookOptions(dayToCheck){
            let month = document.querySelector("span.span_month");

            if(isBooked(dayToCheck,month.innerHTML)){
                let bData = controlBooking(dayToCheck).htmlFor;
                let Morning = document.querySelector("label[for='Morning']");
                let Evening = document.querySelector("label[for ='Evening']");
                let MorningChecked = document.querySelector("input#Morning");
                let EveningChecked = document.querySelector("input#Evening");
            if( bData =="Morning"){
                EveningChecked.checked = true;
                Morning.classList.add("hide");
                if(Evening.classList.contains("hide")){
                        Evening.classList.remove("hide");
                    }
                if(Morning.classList.contains("show")){
                    Morning.classList.remove("show");
                }
            
                time = getTime();
            }
            else if(bData =="Evening"){
                MorningChecked.checked = true;
               Evening.classList.add("hide");
               if(Morning.classList.contains("hide")){
                Morning.classList.remove("hide");
                    }
                    if(Evening.classList.contains("show")){
                        Evening.classList.remove("show");
                    }
            time = getTime();
            }
            else{
              time = getTime();
            }
            }
            else{
                let Morning = document.querySelector("label[for='Morning']");
                let Evening = document.querySelector("label[for ='Evening']");
                let MorningChecked = document.querySelector("input#Morning");
                MorningChecked.checked = true;
                Morning.classList.add("show");
                Evening.classList.add("show");
                if(Morning.classList.contains("hide")){
                    Morning.classList.remove("hide");
                }
                else if(Evening.classList.contains("hide")){
                    Evening.classList.remove("hide");
                }
                time = getTime();
            }
        }
        function isBooked(day, month){
            console.log(month);
            for( i= 0;i<dataBase.length;i++){
                let oDay = JSON.parse(dataBase[i]);
                console.log(months[oDay.month]);
                if(day == oDay.day && month == months[oDay.month]){
                    return true;
                }
            }
        }
       
       
    function populateForm(currentYear,currentMonth){
        let year = document.querySelector("span.span_year");
        year.innerHTML= currentYear;
        let Cmonth = document.querySelector("span.span_month");  
        Cmonth.innerHTML = months[currentMonth];
        let days = document.querySelectorAll("td.column--cells");
        for(let i=0;i<days.length; i++){
            days[i].addEventListener("click", setDate);
        }
    }
   

   
    //Form Functions
    function InputListener(){
        let tOfDay= document.querySelectorAll("input.radio");
        for(let i = 0; i<tOfDay.length;i++){
            tOfDay[i].addEventListener("click",updateInput);
        }
    }
    function updateInput(){
        if(DOW.date != null){
            time = this.id;
            formatDayInput(DOW.date,DOW.nDAY,this.id);
            DayChoice = DOW.nDAY;
        }
        else{
            time = this.id;
            formatDayInput("Pick a date","",this.id);
        }
        
    }
        // Helper Functions
        function booked(day,nDAY){
            this.date = day;
            this.nDAY = nDAY;
        }
        function formatDayInput(DayOfWeek,nDay,nTime){

        let dayInput = document.querySelector("input#date");
        console.dir(dayInput);
        dayInput.value = `${DayOfWeek}  ${nDay} / ${nTime}`;
        }  
        function getTime(){
            let tOfDay= document.querySelectorAll("input.radio");
            let time ;
            for(let i=0;i<tOfDay.length;i++){
                if(tOfDay[i].checked){
                time = tOfDay[i];
                }
            }
            return time.id;
        }
        function getDayOfWeek(v){
            let day = new Date(currentYear,currentMonth,v).getDay();
            return daysOfWeek[day];
        }
        function dayDetails(day,month,year,time){
            this.day = day;
            this.month = month;
            this.year = year;
            this.time = time;
    
        }
        function GetPrevious(){
            if(currentMonth >0 && currentMonth != new Date().getMonth()){
                currentMonth -= 1;
                DisplayCalendar(currentMonth,currentYear);
                populateForm(currentYear,currentMonth);
                InputListener();

            }
            else if(currentMonth == new Date().getMonth()){
                return;
            }
            else{
                currentYear -=1;
                currentMonth = 11;
                DisplayCalendar(currentMonth,currentYear);
                populateForm(currentYear,currentMonth);
                InputListener();
            }
        }
        function GetNext(){
            if(currentMonth <11){
                currentMonth += 1;
                DisplayCalendar(currentMonth,currentYear);
                populateForm(currentYear,currentMonth);
                InputListener();
            }
            else{
                currentYear +=1;
                currentMonth = 0;
                DisplayCalendar(currentMonth,currentYear);
                populateForm(currentYear,currentMonth);
                InputListener();
            }
        }
        function resetForm(){

        }
        let previous = document.querySelector("th.month--previous");
        previous.addEventListener("click",GetPrevious);
        let next = document.querySelector("th.month--next");
        next.addEventListener("click",GetNext);
 // Generate Test Data
//   let bDays = [];
//   bDays.push();
//   function randomize(max, min){
//       return Math.floor((Math.random()*(max-min)) + min);
//   }
//   let dTime = ["Morning","Evening"];
 
//   for(let i = 0; i<8;i++){
//       console.log("Hello World");
//       let placer = new dayDetails(randomize(32,1),currentMonth,currentYear,dTime[randomize(2,0)]);
//       console.log(placer);
//       bDays.push(JSON.stringify(placer));
//   }
//   localStorage.setItem("Booked Days",JSON.stringify(bDays));

DisplayCalendar(currentMonth,currentYear);
 populateForm(currentYear,currentMonth);
 InputListener();
 
