"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFox = getFox;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fox = function Fox(image, link) {
  _classCallCheck(this, Fox);

  this.image = image;
  this.link = link;
};

function getFox(x) {
  var res, record, newImg;
  return regeneratorRuntime.async(function getFox$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://randomfox.ca/floof/"));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          record = _context.sent;
          console.log(record);
          newImg = document.createElement('img');
          newImg.src = record.image;
          newImg.setAttribute("class", " img-thumbnail rou mx-auto d-block my-2");
          x.prepend(newImg);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}