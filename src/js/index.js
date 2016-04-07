require("../css/common/style");
require("../css/sprite-base");
var header = require("../template/common/header");
var footer = require("../template/common/footer");
var body = require("../template/index/body");

document.getElementById('header').insertAdjacentHTML('afterbegin', header);
document.getElementById('footer').insertAdjacentHTML('afterbegin', footer);
document.getElementById('body').insertAdjacentHTML('afterbegin', body);

