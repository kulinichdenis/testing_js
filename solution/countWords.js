function countWords(inputWords) {
    var obj = {};
    var sortArray = inputWords.sort();
    return sortArray.reduce(function(prev, current, index){
        if(index === 1){
           if(prev === current){
               obj[prev] = 2;
           }else{
               obj[prev] = 1;
               obj[current] = 1;
           }
            return obj;
        }

        if(obj[current] !== undefined){
            obj[current] +=1; return obj;
        }else{
            obj[current] = 1; return obj;

        }
    })
     return obj;
}

module.exports = countWords;