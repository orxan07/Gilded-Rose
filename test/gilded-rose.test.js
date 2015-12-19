'use strict';
var chai = require('chai');
var Backstage = require('../src/backstage');
var Sulfuras = require('../src/sulfuras');
var Conjured = require('../src/conjured');
var AgedBrie = require('../src/aged-brie');
var GildedRose = require('../src/gilded-rose');
var itemType = require('../src/item-type');

chai.use(require('chai-shallow-deep-equal'));

var assert = chai.assert;

describe('Testing gilded rose object', function () {

    describe('#update', function () {

            var agedBrie = Object.create(AgedBrie).init({sellIn: 10, quality: 30});
            var backstage = Object.create(Backstage).init({sellIn: 3, quality: 30});
            var sulfuras = Object.create(Sulfuras).init({sellIn: 0, quality: 30});
            var conjured = Object.create(Conjured).init({sellIn: 10, quality: 10});
            var agedBrieExp = Object.create(AgedBrie).init({sellIn: 9, quality: 31});
            var backstageExp = Object.create(Backstage).init({sellIn: 2, quality: 33});
            var sulfurasExp = Object.create(Sulfuras).init({sellIn: 0, quality: 30});
            var conjuredExp = Object.create(Conjured).init({sellIn: 9, quality: 8});

            check([Object.create(Sulfuras).init({quality: 40, sellIn: 10})],
                [Object.create(Sulfuras).init({quality: 40, sellIn: 10})]);

            check([agedBrie, backstage, sulfuras, conjured], [agedBrieExp,backstageExp,sulfurasExp,conjuredExp]);
            function check(input, expected) {
                it('if input is ' + JSON.stringify(input)
                    + ' it should upgrade item to ' + JSON.stringify(expected)
                    , function () {
                        GildedRose = Object.create(GildedRose).init();

                        for (var i in input)
                            GildedRose.add({item: input[i]});

                        GildedRose.update();

                        var result = GildedRose.items;
                        assert.shallowDeepEqual(result, expected);
                    })
            }
    });
});
