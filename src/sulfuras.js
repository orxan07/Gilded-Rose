var Item = require('./item');
var ItemType = require('./item-type');

var Sulfuras = Object.create(Item);

Sulfuras.init = function (args) {
    this.initItem(args);
    this.name = ItemType.SULFURAS;

    return this;
};

Sulfuras.upgrade = function () {
    //nothing to do :)
};

module.exports = Sulfuras;