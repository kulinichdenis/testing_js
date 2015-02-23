function getDependencies(tree){
    var arrayDependencies =  arguments[1] || [];
    if(tree["dependencies"] !== undefined){
        var arrKeys = Object.keys(tree["dependencies"]);
        arrKeys.forEach(function(elem,index){
            if(arrayDependencies.indexOf(elem) === -1){
                arrayDependencies.push(elem);
            }
            arrayDependencies.concat(getDependencies(tree["dependencies"][elem], arrayDependencies));
        });
    } else{
        return arrayDependencies;
    }
    return arrayDependencies;
}
var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

getDependencies(loremIpsum)

module.exports = getDependencies;