'use strict';

var assert = require('assert');

var GildedRose = {

    init: function () {
        this.items = [];

        return this;
    },

    add: function (args) {
        args = args || {};
        var item = args.item;
        this.items.push(item);
    },

    update: function () {
        var items = this.items;
        for (var i in items)
            items[i].upgrade();
    }
};

module.exports = GildedRose;