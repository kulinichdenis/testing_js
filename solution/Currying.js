function curryN(fn, n) {
    var array = [];
    function inner(a){
        n--;
        array.push(a);
        if(0<n) {
            return inner;
        }else{
            return fn.apply(null, array);
        }
    }
    if(n !== 0 && n !== undefined ){
       return inner;
    }else{
       return;
    }
}
//function add3(one, two, three) {
//    return one + two + three
//}
//curryN(add3,3)(1)(2)(3)

module.exports = curryN;

