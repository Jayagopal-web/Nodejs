function counter(arr){
    return 'There are ' + arr.length + ' people here';
}

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
}

var pi = 3.142;


// Different patterns to export.

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


// module.exports.counter(arr){
//     return 'There are ' + arr.length + ' people here';
// }


module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}