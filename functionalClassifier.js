var _ = require("./underscore.js")

function calculateFactors(number){ return _.range(number).filter(isFactor(number))}
function isFactor(number){return  function(i){ return number%i == 0}}
function add(a,b){return a + b }

function classify(number, classifier){
   return classifier(number);
}

function perfectNumberClassifier(number){
    return ( calculateFactors(number).reduce(add) == number) ? "perfect" : "not perfect";
}

console.log(classify(28, perfectClassifier))


