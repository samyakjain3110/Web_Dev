
// starting setup 
const date= new Date() ;
var currmonth = date.getMonth() ;

var dd = new Date(date.getFullYear(), date.getMonth(), 1) ;
var firstDate = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
var lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
// console.log("day is :::::::::", dd) ;
// console.log("firstday is :::: " , firstDay) ;
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() ;
var monthdays = document.querySelector(".days") ;
const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let days = "" ;
updatemonth(lastDate,currmonth,0) ;



// change on selection
var monthselect = document.querySelector('#monthselection');
monthselect.addEventListener('change',function(){
    document.querySelector(".date h1").innerHTML = months[monthselect.value] ;
    var monthval = monthselect.value  ;

    firstDate = new Date(date.getFullYear(), monthval, 1).getDate();
    firstDay = new Date(date.getFullYear(), monthval, 1).getDay();
    monthval++;
    lastDate = new Date(date.getFullYear(), monthval, 0).getDate();

    console.log(monthval) ;
    console.log("firstday is: " , firstDate , weekdays[firstDay]) ;
    console.log(" yy mm dd : " , date.getFullYear() , monthval ,date.getDate() ) ;
    console.log("last day is" , lastDate , weekdays[lastDay]) ;

    updatemonth(lastDate,monthval - 1,firstDay) ;
    
});

// to update values of dates and months on month selection
function updatemonth(lastDay,currmonth,extradays){
    days = "" ;
    for(let i = 1 ;i <= extradays; i++)
    {
        days += `<div></div>` ;
    }
    for(let i = 1 ;i <= lastDay; i++)
    {
        days += `<div>${i}</div>` ;
    }

    monthdays.innerHTML = days ;
    document.querySelector(".date h1").innerHTML = months[currmonth] ;
    console.log("extradays are : " , extradays) ;
}