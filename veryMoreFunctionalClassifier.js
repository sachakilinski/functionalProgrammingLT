var _ = require("./underscore.js")

var calculateFactors = function(number){ return _.filter(_.range(number), isFactor(number))}
var isFactor = function(number){return  function(i){ return number%i == 0}}

var sumFactors = function (factors){return _.reduce(factors, add)}
var add = function(a,b){return a + b }

var classify = function(number){
    var factors = calculateFactors(number);
    var sum = sumFactors(factors);
    if(sum == number){
        return "perfect";
    }
    else{
        return "not perfect"
    }
}

console.log(classify(27))



