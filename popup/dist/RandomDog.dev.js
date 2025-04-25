"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listSubbreed = listSubbreed;
exports.listBreed = listBreed;
exports.getDog = getDog;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var Breed = function Breed(breed, subreed) {
  _classCallCheck(this, Breed);

  this.breed = breed;
  this.subreed = subreed;
};

function listSubbreed() {
  var breed,
      subbreed,
      res,
      record,
      x,
      temp,
      opt,
      _args = arguments;
  return regeneratorRuntime.async(function listSubbreed$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          breed = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'hound';
          subbreed = _args.length > 1 ? _args[1] : undefined;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://dog.ceo/api/breed/".concat(breed, "/list")));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          record = _context.sent;

          for (x = 0; x < record.message.length; x++) {
            temp = record.message[x];
            opt = document.createElement('option');
            opt.value = temp;
            opt.innerHTML = temp;
            subbreed.appendChild(opt);
          }

          console.log(record.message);
          console.log(record);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

function listBreed(x) {
  var res, record, _i, _Object$entries, _Object$entries$_i, key, value, breed, opt;

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

          for (_i = 0, _Object$entries = Object.entries(record.message); _i < _Object$entries.length; _i++) {
            _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
            breed = new Breed(key, value); //  console.log(breed);

            opt = document.createElement('option');
            opt.value = key;
            opt.innerHTML = key;
            x.appendChild(opt);
          }

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

        case 6:
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
          return regeneratorRuntime.awrap(fetch(api));

        case 2:
          res = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          record = _context4.sent;
          dog = new Dog(record.message[0], record.status); // console.log(dog);

          newImg = document.createElement('img');
          newImg.src = dog.message;
          newImg.setAttribute("class", "frame img-thumbnail rou mx-auto d-block my-2");
          x.prepend(newImg);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  });
}