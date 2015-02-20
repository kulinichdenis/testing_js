function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        return submittedUsers.every(function(element){
            return goodUsers.some(function(elem){
                return element.id === elem.id;
            })
        })
    };
}


module.exports = checkUsersValid;