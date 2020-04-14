import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
// import { Dog } from './thing.js';
import { Place } from './thing.js';




$(document).ready(function(){

  $("#firstBtn").click(function(event){
    event.preventDefault();
    var locationInputFirst = $("input#placeInputFirst");
    var landmarkInputFirst = $("input#landmarkInputFirst");
    var timeInputFirst = $("input#inputTimeFirst");
    var notesInputFirst = $("input#notesInputFirst");
    var firstPlace = new Place(locationInputFirst.val(), landmarkInputFirst.val(), timeInputFirst.val(), notesInputFirst.val());
    $("#firstLocation").text("Location:" + firstPlace.locationInputFirst);
    console.log(locationInputFirst);
    console.log("#placeInputFirst");
  });



//   $("#secondBtn").click(function(event){
//     event.preventDefault();
//     var locationInputSecond = $("#placeInputSecond");
//     var landmarkInputSecond = $("#landmarkInputSecond");
//     var timeInputSecond = $("#inputTimeSecond");
//     var notesInputSecond = $("#notesInputSecond");
  
//   });

//   $("#thirdBtn").click(function(event){
//     event.preventDefault();
//     var locationInputThird = $("#placeInputThird");
//     var landmarkInputThird = $("#landmarkInputThird");
//     var timeInputThird = $("#inputTimeThird");
//     var notesInputThird = $("#notesInputThird");

//   });
});








