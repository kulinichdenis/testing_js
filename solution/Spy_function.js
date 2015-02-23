function Spy(obj,method){

    var objReturn = {count: 0};
    var oldObj = obj[method];

    obj[method] = function(){
         objReturn.count++;
         return oldObj.apply(obj,arguments);
    }

    return objReturn;
}

module.exports = Spy;