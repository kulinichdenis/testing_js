function duckCount(){
    var array = [].slice.call(arguments, 0);
    return array.reduce(function(prev, elm, index, array){
        return prev + (Object.prototype.hasOwnProperty.call(elm, 'quack') ? 1 : 0);
    },0)
}

module.exports = duckCount;