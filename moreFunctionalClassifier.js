var calculateFactors = function(number){
    var factors =[];
    for(var i = 1; i <  number; i++ ){
        if( isFactor(i, number)){
            factors.push(i);
        }
    }
    return factors;
}

var isFactor = function(i, number){
    return  number%i == 0;
}

var sumFactors = function (factors){
    var sum = 0;
    for( var f in factors){
        sum += parseInt(factors[f]);
    }
    return sum;
}

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

console.log(classify(28))



