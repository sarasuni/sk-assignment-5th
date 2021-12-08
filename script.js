$(document).ready(function(){
    //populates current date
    var dateInfo=$('#currentDay');
    var todayDate=moment().format('dddd,MMMM Do YYYY');
    dateInfo.text(todayDate)
});

//Clear the storage and refresh the page
$('#clear').click(function(){
    localStorage.clear();
    location.reload()
});

var insert_textarea1 = document.querySelector('#note1');
var save_button1 = document.querySelector('#saveNote1');
//retrieves previously save text to display
insert_textarea1.value = localStorage.getItem('content1');
//when the Save button is clicked, store the input of the textarea
saveNote1.addEventListener('click', updateOutput1);
//sets the input of text area into local storage
function updateOutput1() {
    localStorage.setItem('content1', insert_textarea1.value);
};

var insert_textarea2= document.querySelector('#note2');
var  save_button2=document.querySelector('#saveNote2');
insert_textarea2.value=localStorage.getItem('content2');
saveNote2.addEventListener('click', updateOutput2);
function updateOutput2(){
    localStorage.setItem('content2', insert_textarea2.value);
};

var insert_textarea3= document.querySelector('#note3');
var  save_button3=document.querySelector('#saveNote3');
insert_textarea3.value=localStorage.getItem('content3');
saveNote3.addEventListener('click', updateOutput3);
function updateOutput3(){
    localStorage.setItem('content3', insert_textarea3.value);
};

var insert_textarea4 = document.querySelector('#note4');
var save_button4 = document.querySelector('#saveNote4');
insert_textarea4.value=localStorage.getItem('content4');
saveNote4.addEventListener('click', updateOutput4);
function updateOutput4(){
    localStorage.setItem('content4', insert_textarea4.value);
};

var insert_textarea5= document.querySelector('#note5');
var  save_button5=document.querySelector('#saveNote5');
insert_textarea5.value=localStorage.getItem('content5');
saveNote5.addEventListener('click', updateOutput5);
function updateOutput5(){
    localStorage.setItem('content5', insert_textarea5.value);
};

var insert_textarea6= document.querySelector('#note6');
var  save_button6=document.querySelector('#saveNote6');
insert_textarea6.value=localStorage.getItem('content6');
saveNote6.addEventListener('click', updateOutput6);
function updateOutput6(){
    localStorage.setItem('content6', insert_textarea6.value);
};
var insert_textarea7= document.querySelector('#note7');
var  save_button7=document.querySelector('#saveNote7');
insert_textarea7.value=localStorage.getItem('content7');
saveNote7.addEventListener('click', updateOutput7);
function updateOutput7(){
    localStorage.setItem('content7', insert_textarea7.value);
};

var insert_textarea8= document.querySelector('#note8');
var  save_button8=document.querySelector('#saveNote8');
insert_textarea8.value=localStorage.getItem('content8');
saveNote8.addEventListener('click', updateOutput8);
function updateOutput8(){
    localStorage.setItem('content8', insert_textarea8.value);
};

var insert_textarea9= document.querySelector('#note9');
var  save_button9=document.querySelector('#saveNote9');
insert_textarea9.value=localStorage.getItem('content9');
saveNote9.addEventListener('click', updateOutput9);
function updateOutput9(){
    localStorage.setItem('content9', insert_textarea9.value);
};


//hard code for color coding of time
var now= new Date().getHours();

if (now > 9) {
    $("#note1").addClass("past");
	}	
    else if (now >= 9 && now < 10) {
        $("#note1").addClass("present");
	}
    else if (now < 9) {
        $("#note1").addClass("future");
	}

if (now > 10) {
    $("#note2").addClass("past");
    }	
    else if (now >= 10 && now < 11) {
    $("#note2").addClass("present");
    }
    else if (now < 10) {
    $("#note2").addClass("future");
    }

if (now > 11) {
    $("#note3").addClass("past");
    }	
    else if (now >= 11 && now < 12) {
    $("#note3").addClass("present");
    }
    else if (now < 11) {
    $("#note3").addClass("future");
    }

if (now > 12) {
    $("#note4").addClass("past");
    }	
    else if (now >= 12 && now < 13) {
    $("#note4").addClass("present");
    }
    else if (now < 12) {
    $("#note4").addClass("future");
    }

if (now > 13) {
    $("#note5").addClass("past");
    }	
    else if (now >= 13 && now < 14) {
    $("#note5").addClass("present");
    }
    else if (now < 13) {
    $("#note5").addClass("future");
    }

if (now >14) {
    $("#note6").addClass("past");
    }
    else if (now >=14 && now <15){
    $("#note6").addClass("present");
    }
    else if (now < 14){
    $("#note6").addClass("future");
    } 

if (now >15) {
    $("#note7").addClass("past");
    }
    else if (now >=15 && now <16){
    $("#note7").addClass("present");
    }
    else if (now < 15){
    $("#note7").addClass("future");
    } 

if (now >16) {
    $("#note8").addClass("past");
    }
    else if (now >=16 && now <17){
    $("#note8").addClass("present");
    }
    else if (now < 16){
    $("#note8").addClass("future");
    } 

if (now >17) {
    $("#note9").addClass("past");
    }
    else if (now >=17 && now <18){
    $("#note9").addClass("present");
    }
    else if (now < 17){
    $("#note9").addClass("future");
    } 