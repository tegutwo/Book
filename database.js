//     var db = firebase.database().ref().child("2020");
//  let year = new Date().getFullYear();
//   for(let i=0;i<months.length;i++){
//       db.child(months[i]).push();
//   }
//   db.child("January").child(1).child("Morning").set("false");
//   db.child("January").child(1).child("Evening").set("false");
        //   var db = firebase.database().ref().child("2020");
//  let year = new Date().getFullYear();
//   for(let i=0;i<months.length;i++){
//       db.child(months[i]).push();
//   }
//   db.child("January").child(1).child("Morning").set("false");
//   db.child("January").child(1).child("Evening").set("false");
    // function writeBookingData(year,month, day, time, details) {
    //     firebase.database().ref('Year' + year).set({
    //     month: month,
    //     day: day,
    //     time: time,
    //     details: details
    //     });
    // }
            // FireBase
            // let database = firebase.database().ref();
            // let months = ["January","February","March","April","May","June","July","August","September","October","Novemeber","December"];
            // function initialiseDataBase(currentYear){
               
            // }
            //     let year = new Date().getFullYear();
            //         for(let i=0;i<months.length;i++){
            //             db.child(months[i]).push();
            //         }
            // }
            // function writeBookingData(year,month,day,time){

            // }
            // function readBookingData(currentYear,currentMonth){

            // }
            // function writeBookingData(userId,year,month,day,time,details){
            //     userId = "Tegutwo Culture";
            //     year = dateChoice.year;
            //     month = dateChoice.month;
            //     day = dateChoice.day;
            //     time = dateChoice.time;
            //     details = {
            //         client: JSON.stringify(client),
            //         hair: JSON.stringify(hairChoice)
            //     }

            //     firebase.database().ref('BOOKER/').set({
            //         year: name,
            //         month: month,
            //         day: day,
            //         time : time,
            //         details: details
            //       });
                
            //     }
            let db = readBookingData("Tegutwo Culture",currentYear,currentMonth);
            console.log(db);