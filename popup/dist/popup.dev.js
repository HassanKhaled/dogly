"use strict";

var _RandomDog = require("./RandomDog.js");

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
  button.disabled = true;
  (0, _RandomDog.getDog)(images);
  button.disabled = false;
});