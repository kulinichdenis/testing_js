function getShortMessages(arItems) {

    var filter_arr = arItems.filter(function(element, index, array){
        return element['message'].length < 50;
    })
    var result_arr = filter_arr.map(function(num){
        return num['message'];
    })
    return result_arr;
}

module.exports = getShortMessages;