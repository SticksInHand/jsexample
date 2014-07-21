/**
 * Created by M.Jin on 14-7-18.
 */
var factorial = (function f(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num*f(num-1);
    }
});

function createComparisonFunction(propertyName){

    return function(object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if(value1 < value2){
            return -1;
        }else if (value1 > value2){
            return 1;
        }else{
            return 0;
        }
    };

}

function compare(value1,value2){
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}

var result = compare(5,10);

var compare = createComparisonFunction("name");
var result = compare({name:"saoge"},{name:"greg"});














