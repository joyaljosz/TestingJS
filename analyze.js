function analyzeArray(arr) {
    return {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length,
    };
}

function getMin(arr) {
return Math.min(...arr);
}

function getMax(arr) {
return Math.max(...arr);
}

function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

module.exports = analyzeArray;