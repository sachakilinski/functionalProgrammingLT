function NumberClassifier(){
    var factors = [];
    var sum = 0;
    var number = 0;

    var calculateFactors = function(){
        for(var i = 1; i <  number; i++ ){
            if( isFactor(i)){
                factors.push(i);
            }
        }
    }

    var isFactor = function(i){
        return  number%i == 0;
    }

    var sumFactors = function (){
        for( var f in factors){
            sum += parseInt(factors[f]);
        }
    }

    var classify = function(){
        calculateFactors();
        sumFactors();
        if(sum == number){
            return "perfect";
        }
        else{
            return "not perfect"
        }
    }

    var setNumber = function(n){
        number = n;
    }

    return {
        classify: classify,
        setNumber: setNumber
    }
}

classifier = new NumberClassifier();
classifier.setNumber(28);
console.log(classifier.classify())



