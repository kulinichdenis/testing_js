function doubleAll(numbers) {
    if(numbers === undefined){
        return undefined;
    }else{
        if (numbers.length<1) return numbers;
        new_num = new Array;
        for (var i=0; i<numbers.length; i++){
            new_num[i] = parseInt(numbers[i])*2;
        }
        return new_num;
    }
}

module.exports = doubleAll;