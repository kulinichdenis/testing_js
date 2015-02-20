function logger(elemStart){
    return function(){
        var arrayElems = [].slice.call(arguments,0);
        arrayElems.unshift(elemStart);
        return console.log.apply(console, arrayElems);
    }
}

//var loggerInfo = logger('INFO: ');
//loggerInfo('this is an info message');
module.exports = logger