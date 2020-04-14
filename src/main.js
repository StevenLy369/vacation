import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
// import { Dog } from './thing.js';
// import { Place } from './thing.js';




$(document).ready(function(){

  $("#firstBtn").click(function(event){
    event.preventDefault();
    console.log("works");
  });

});
