function reduce(arr, fn, initial) {
//version_1
//    var result = 0;
//    if(arr.length !== 0){
//        if(arr.length !== 1) {
//            var arrTemp = arr;
//            var deleteElement = arrTemp.shift();
//            result = reduce(arrTemp, fn, deleteElement);
//        }else{
//           return result = fn(initial, arr[0],0,arr);
//        }
//    }
//    return fn(initial,result,0,arr);
    if(arr.length === 0){
        return [];
    }
    var result = 0;
    result = fn(initial, arr[0],0,arr);
    if(arr.length > 1){
        var arrTemp = arr;
        var deleteElement = arrTemp.shift();
        result = reduce(arrTemp, fn, result)
    }
    return result;
}

module.exports = reduce;
