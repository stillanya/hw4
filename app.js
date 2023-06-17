function getAverage() {
    var sum=0
    var count = arguments.length;
    for (var i= 0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum / count
}
console.log(getAverage(1,3,4))


function typeOf (value) {
    console.log(typeof value);
}
typeOf(43)