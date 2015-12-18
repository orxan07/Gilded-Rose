'use strict';
var chai = require('chai');
var Backstage = require('../src/backstage');
var Sulfuras = require('../src/sulfuras');
var Conjured = require('../src/conjured');
var AgedBrie = require('../src/aged-brie');
var itemType = require('../src/item-type');

chai.use(require('chai-shallow-deep-equal'));

var assert = chai.assert;

describe('Testing items object of gilded rose app', function () {

    describe('#upgrade', function () {

        describe('if item is ' + itemType.AGED_BRIE, function () {

            check(
                {sellIn: 15, quality: 40},
                {sellIn: 14, quality: 41}
            );

            check(
                {sellIn: 10, quality: 40},
                {sellIn: 9, quality: 41}
            );

            check(
                {sellIn: 5, quality: 50},
                {sellIn: 4, quality: 50}
            );

            check(
                {sellIn: 0, quality: 40},
                {sellIn: -1, quality: 42}
            );

            function check(input, expected) {
                it('if input is ' + JSON.stringify(input)
                    + ' it should upgrade item to ' + JSON.stringify(expected)
                    , function () {
                        var item = Object.create(AgedBrie);
                        item.init(input);
                        item.upgrade();
                        var result = item;
                        assert.shallowDeepEqual(result, expected);
                    })
            }
        });

        describe('if item is ' + itemType.BACKSTAGE, function () {

            check(
                {sellIn: 15, quality: 40},
                {sellIn: 14, quality: 41}
            );

            check(
                {sellIn: 10, quality: 40},
                {sellIn: 9, quality: 42}
            );

            check(
                {sellIn: 5, quality: 40},
                {sellIn: 4, quality: 43}
            );

            check(
                {sellIn: 5, quality: 49},
                {sellIn: 4, quality: 50}
            );

            check(
                {sellIn: 5, quality: 48},
                {sellIn: 4, quality: 50}
            );

            check(
                {sellIn: 5, quality: 50},
                {sellIn: 4, quality: 50}
            );

            check(
                {sellIn: 0, quality: 40},
                {sellIn: -1, quality: 0}
            );

            function check(input, expected) {
                it('if input is ' + JSON.stringify(input)
                    + ' it should upgrade item to ' + JSON.stringify(expected)
                    , function () {
                        var item = Object.create(Backstage);
                        item.init(input);
                        item.upgrade();
                        var result = item;
                        assert.shallowDeepEqual(result, expected);
                    })
            }
        });

        describe('if item is ' + itemType.CONJURED, function () {

            check(
                {sellIn: 15, quality: 40},
                {sellIn: 14, quality: 38}
            );

            check(
                {sellIn: 10, quality: 40},
                {sellIn: 9, quality: 38}
            );

            check(
                {sellIn: 5, quality: 0},
                {sellIn: 4, quality: 0}
            );

            check(
                {sellIn: 0, quality: 3},
                {sellIn: -1, quality: 0}
            );

            check(
                {sellIn: 0, quality: 40},
                {sellIn: -1, quality: 36}
            );

            function check(input, expected) {
                it('if input is ' + JSON.stringify(input)
                    + ' it should upgrade item to ' + JSON.stringify(expected)
                    , function () {
                        var item = Object.create(Conjured);
                        item.init(input);
                        item.upgrade();
                        var result = item;
                        assert.shallowDeepEqual(result, expected);
                    })
            }
        });

        describe('if item is ' + itemType.SULFURAS, function () {

            check(
                {sellIn: 15, quality: 40},
                {sellIn: 15, quality: 40}
            );

            check(
                {sellIn: 0, quality: 80},
                {sellIn: 0, quality: 80}
            );

            function check(input, expected) {
                it('if input is ' + JSON.stringify(input)
                    + ' it should upgrade item to ' + JSON.stringify(expected)
                    , function () {
                        var item = Object.create(Sulfuras);
                        item.init(input);
                        item.upgrade();
                        var result = item;
                        assert.shallowDeepEqual(result, expected);
                    })
            }
        });

    });
});