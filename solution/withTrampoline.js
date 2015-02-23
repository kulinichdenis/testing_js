function repeat(operation, num) {


    function _start(operation, num){
        if(num === 0){
            return 0;
        }else{
            operation();
            return _start.bind(null, operation, num-1);
        }
    }
    return trampoline(_start.bind(null, operation, num));
}
module.exports = repeat;