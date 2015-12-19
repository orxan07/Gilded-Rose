var Item = require('./item');
var ItemType = require('./item-type');

var Conjured = Object.create(Item);

Conjured.init = function (args) {
    this.initItem(args);
    this.name = ItemType.CONJURED;

    return this;
};

Conjured.upgrade = function () {
    var times = 2;
    this.sellIn--;
    while(times--) {
        this.reduceQuality();
        if (this.sellIn < 0)
            this.reduceQuality();
    }
};

module.exports = Conjured;
