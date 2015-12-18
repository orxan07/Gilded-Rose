var Item = require('./item');
var ItemType = require('./item-type');

var AgedBrie = Object.create(Item);

AgedBrie.init = function (args) {
    this.initItem(args);
    this.name = ItemType.AGED_BRIE;

    return this;
};

AgedBrie.upgrade = function () {
    this.sellIn--;
    this.improveQuality();
    if (this.sellIn < 0)
        this.improveQuality();
};

module.exports = AgedBrie;