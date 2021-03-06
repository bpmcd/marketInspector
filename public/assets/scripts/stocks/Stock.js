define([
    '../lib/util/FastMath'
], function(
    FastMath
) {
    'use strict';

    var _id = 0;

    /**
     * @class Stock
     * @constructor
     * @param
     */
    function Stock(stock) {
        this.id = _id++;
        this.symbol = stock.symbol;
        this.name = stock.Name;
        this.open = parseFloat(stock.Open);
        this.high = parseFloat(stock.DaysHigh);
        this.low = parseFloat(stock.DaysLow);
        this.close = parseFloat(stock.PreviousClose);
        this.volume = parseInt(stock.Volume, 10);
        this.volumeAverage = parseInt(stock.AverageDailyVolume, 10);
        this.yearHigh = parseFloat(stock.YearHigh);
        this.yearLow = parseFloat(stock.YearLow);

        this.changeInDollars = this.getChangeInDollars();
        this.changeInPercent = this.getChangeInPercent();
        this.volumeDifferenceFromAverage = this.getVolumeAverageDifferenceFromDaysVolume();
        this.oneYearRange = this.getOneYearPriceRange();
    }

    /**
     * @method getChangeInDollars
     * @for Stock
     * @return {number} change from open in dollars
     */
    Stock.prototype.getChangeInDollars = function getChangeInDollars() {
        var delta = FastMath.difference(this.close, this.open);

        return parseFloat(delta.toFixed(3));
    };

    /**
     * @method  getChangeInPercent
     * @for  Stock
     */
    Stock.prototype.getChangeInPercent = function getChangeInPercent() {
        var delta = FastMath.difference(this.close, this.open);

        return parseFloat(((delta / this.open) * 100).toFixed(2)) + '%';
    };

    /**
     * @method getVolumeAverageDifferenceFromDaysVolume
     * @return {number} difference of day's volume and average volume
     */
    Stock.prototype.getVolumeAverageDifferenceFromDaysVolume = function getVolumeAverageDifferenceFromDaysVolume() {
        return FastMath.difference(this.volume, this.volumeAverage);
    };

    /**
     * @method getOneYearPriceRange
     * @for Stock
     */
    Stock.prototype.getOneYearPriceRange = function getOneYearPriceRange() {
        var delta = FastMath.difference(this.yearHigh, this.yearLow);

        return parseFloat(delta).toFixed(3);
    };

    /**
     * @method toJSON
     * @for Stock
     */
    Stock.prototype.toJSON = function toJSON() {};

    /**
     * @method fromJSON
     * @for Stock
     */
    Stock.prototype.fromJSON = function fromJSON(json) {
        this.symbol = json.symbol;
        this.name = json.Name;
        this.open = json.Open;
        this.close = json.PreviousClose;
        this.volume = json.Volume;
        this.volumeAverage = json.AverageDailyVolume;

        this.changeInDollars = this.getChangeInDollars();
        this.changeInPercent = this.getChangeInPercent();
        this.volumeDifferenceFromAverage = this.getVolumeAverageDifferenceFromDaysVolume();

        return this;
    };


    return Stock;
});