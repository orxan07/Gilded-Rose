var assert = require('assert');
var ItemType = require('./item-type');

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

var Item = {

    initItem: function (args) {

        args = args || {};
        this.name = args.name;
        this.sellIn = args.sellIn;
        this.quality = args.quality;

        return this;
    },
    improveQuality: function () {
        if (this.quality < MAX_QUALITY)
            this.quality++;
    },
    reduceQuality: function () {
        if (this.quality > MIN_QUALITY)
            this.quality--;
    },
    setQualityToZero: function () {
        this.quality = 0;
    },
};

module.exports = Item;