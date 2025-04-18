"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDog = getDog;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var api = "https://dog.ceo/api/breeds/image/random/Fetch";
var breed_api = "https://dog.ceo/api/breeds/list/all";
var subbreed_api = "https://dog.ceo/api/breed/".concat('hound', "/list");
var random_by_breed_api = "https://dog.ceo/api/breed/".concat('retriever', "/images/random");

var Dog = function Dog(message, status) {
  _classCallCheck(this, Dog);

  this.message = message;
  this.status = status;
};

function listSubbreed() {
  var res, record;
  return regeneratorRuntime.async(function listSubbreed$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(subbreed_api));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          record = _context.sent;
          console.log(record);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function listBreed() {
  var res, record;
  return regeneratorRuntime.async(function listBreed$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch(breed_api));

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          record = _context2.sent;
          console.log(record);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function randomByBreed() {
  var res, record;
  return regeneratorRuntime.async(function randomByBreed$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch(random_by_breed_api));

        case 2:
          res = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          record = _context3.sent;
          console.log(record);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function getDog(x) {
  var res, record, dog, newImg;
  return regeneratorRuntime.async(function getDog$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(listBreed());

        case 2:
          _context4.next = 4;
          return regeneratorRuntime.awrap(fetch(api));

        case 4:
          res = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          record = _context4.sent;
          dog = new Dog(record.message[0], record.status);
          console.log(dog);
          newImg = document.createElement('img');
          newImg.src = dog.message;
          newImg.setAttribute("class", "frame img-thumbnail rou mx-auto d-block my-2");
          x.prepend(newImg);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  });
}