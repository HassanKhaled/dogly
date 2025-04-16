"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThing = getThing;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var api = "https://dog.ceo/api/breeds/image/random/Fetch";

var Dog = function Dog(message, status) {
  _classCallCheck(this, Dog);

  this.message = message;
  this.status = status;
};

function getThing(x) {
  var res, record, thing, newImg;
  return regeneratorRuntime.async(function getThing$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(api));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          record = _context.sent;
          thing = new Thing(record.image, record.link);
          newImg = document.createElement('img');
          newImg.src = thing.image;
          newImg.setAttribute("class", " img-thumbnail rou mx-auto d-block my-2");
          x.prepend(newImg);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}