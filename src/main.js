import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Dog } from './thing.js';
import { Place } from './thing.js';




$(document).ready(function(){




  $("#firstBtn").click(function(event){
    event.preventDefault();
    var locationInputFirst = $("#placeInputFirst");
    var landmarkInputFirst = $("#landmarkInputFirst");
    var timeInputFirst = $("#inputTimeFirst");
    var notesInputFirst = $("#notesInputFirst");
    var firstPlace = new Place(locationInputFirst.val(), landmarkInputFirst.val(), timeInputFirst.val(), notesInputFirst.val());
    $("#firstLocation").text("Location: " + firstPlace.location);
    $("#firstLandmark").text("Landmark: " + firstPlace.landmarks);
    $("#firstTime").text("Time of Year : " + firstPlace.timeOfYear);
    $("#firstNote").text("Notes: " + firstPlace.notes);
    $("#firstDisplay").fadeOut(500);
    
  });



  $("#secondBtn").click(function(event){
    event.preventDefault();
    var locationInputSecond = $("#placeInputSecond");
    var landmarkInputSecond = $("#landmarkInputSecond");
    var timeInputSecond = $("#inputTimeSecond");
    var notesInputSecond = $("#notesInputSecond");
    var secondPlace = new Place(locationInputSecond.val(), landmarkInputSecond.val(), timeInputSecond.val(), notesInputSecond.val());
    $("#secondLocation").text("Location: " + secondPlace.location);
    $("#secondLandmark").text("Landmark: " + secondPlace.landmarks);
    $("#secondTime").text("Time of Year : " + secondPlace.timeOfYear);
    $("#secondNote").text("Notes: " + secondPlace.notes);
    $("#secondDisplay").fadeOut(500);
  });

  $("#thirdBtn").click(function(event){
    event.preventDefault();
    var locationInputThird = $("#placeInputThird");
    var landmarkInputThird = $("#landmarkInputThird");
    var timeInputThird = $("#inputTimeThird");
    var notesInputThird = $("#notesInputThird");
    var thirdPlace = new Place(locationInputThird.val(), landmarkInputThird.val(), timeInputThird.val(), notesInputThird.val());
    $("#thirdLocation").text("Location: " + thirdPlace.location);
    $("#thirdLandmark").text("Landmark: " + thirdPlace.landmarks);
    $("#thirdTime").text("Time of Year : " + thirdPlace.timeOfYear);
    $("#thirdNote").text("Notes: " + thirdPlace.notes);
    $("#thirdDisplay").fadeOut(500);
  });
});








