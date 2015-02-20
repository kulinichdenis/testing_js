function myFunction(array,a,b){
    return [].slice.bind(array,a,b)();
}
module.exports =  myFunction;