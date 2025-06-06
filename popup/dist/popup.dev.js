"use strict";

var _RandomDog = require("./RandomDog.js");

var button = document.getElementById("generate");
var images = document.getElementById("images");
var loader = document.getElementById("loader");
var core = document.getElementById("main");
var breed = document.getElementById("breed");
var subbreed = document.getElementById("subbreed");
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
addEventListener("DOMContentLoaded", function (event) {
  (0, _RandomDog.listBreed)(breed);
  (0, _RandomDog.listSubbreed)('hound', subbreed);
});