function bigestSumOfTwoElements(array){
    if (array.length == 0){
        return false;
    }
        else if(array.length==1){
            return array[0];
        }
        else{
            array.sort(function(a,b){return b-a});
            return array[0]+array[1];
        }
};
console.log(bigestSumOfTwoElements([1,2,3,4])); // => 7
console.log(bigestSumOfTwoElements([])); // => false
console.log(bigestSumOfTwoElements([76])); // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])); // => 68
