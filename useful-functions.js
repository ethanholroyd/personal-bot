

let prefixList = ['-p', '-play'];

function hasPrefix(str){
    splitString = str.split(" ");
    
    for(let pre of prefixList){
        if(splitString == pre){
            return true;
        }
    }
    return false
}
module.exports = { hasPrefix };