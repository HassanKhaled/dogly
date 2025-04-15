"use strict";

var _RandomThing = require("./RandomThing.js");

var button = document.getElementById("generate");
var images = document.getElementById("images");
var loader = document.getElementById("loader");
var core = document.getElementById("main");
core.style.display = "none";
setInterval(function () {
  core.style.display = "block";
  loader.style.display = "none";
}, 2000);
button.addEventListener('click', function (e) {
  (0, _RandomThing.getThing)(images);
});