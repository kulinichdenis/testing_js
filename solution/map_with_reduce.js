function map(arr, fn){
    return arr.reduce(function(prev, item, index, array){
        return prev.concat(fn(item,index,array));
    },[]);
}

module.exports = map;