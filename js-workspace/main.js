function createMultiplicationTable(startNumber,endNumber){
    if(isStartNumberSmallerThanEndNumber(startNumber,endNumber)&&isInRangeOf1to1000(startNumber,endNumber)){
        buildMultiplicationTable(startNumber,endNumber)
    }else {
        return
    }
}



function isStartNumberSmallerThanEndNumber(startNumber,endNumber){
    return startNumber<=endNumber

}



function isInRangeOf1to1000(start, end) {
    return ((start<=1000&&start>=0)&&(end<=1000&&end>=0));
}



function buildMultiplicationTable(startNumber, endNumber) {
    var multiplicationTable=""
    for(var i=startNumber;i<=endNumber;i++){
        for(var j=startNumber;j<=i;j++){
            multiplicationTable+=createEqualitation(j,i)
            multiplicationTable+=" "
        }
        multiplicationTable+="\n"
    }
    return multiplicationTable
}


function createEqualitation(x, y) {
    return x+"*"+y+"="+(x*y);
}

module.exports = {
    buildMultiplicationTable,
    isInRangeOf1to1000,
    isStartNumberSmallerThanEndNumber,
    createEqualitation
}

