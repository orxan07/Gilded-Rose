var Item = require('./item');
var ItemType = require('./item-type');

var Backstage = Object.create(Item);

Backstage.init = function (args) {
    this.initItem(args);
    this.name = ItemType.BACKSTAGE;

    return this;
};

Backstage.upgrade = function () {
    this.sellIn--;
    this.improveQuality();
    if (this.sellIn < 10)
        this.improveQuality();
    if (this.sellIn < 5)
        this.improveQuality();
    if (this.sellIn < 0)
        this.setQualityToZero();
};

module.exports = Backstage;