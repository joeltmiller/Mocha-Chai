var stuff = {};

stuff.plusOne = function(param){
    return param + 1;
};

stuff.plusTen = function(param){
    return param + 10;
};

stuff.timesOne = function(param){
    return param * 1;
};

stuff.timesTen = function(param){
    return param * 10;
};

stuff.timesHundred = function(param){
    return param * 100;
};

stuff.divOne = function(param){
    return param / 1;
};

stuff.divTen = function(param){
    return param / 10;
};

stuff.subOne = function(param){
    return param - 1;
};

stuff.subTen = function(param){
    return param - 10;
};

module.exports = stuff;
