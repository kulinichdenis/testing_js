function logger(elemStart){
    return function(){
        return console.log.bind(console, elemStart);
    }
}
module.exports = logger