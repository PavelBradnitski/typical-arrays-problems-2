function min(arr) {
    min_number = 0;
    for(let elem in arguments) {
        if (arguments[elem] < min_number || min_number == 0) min_number = arguments[elem];
    }
    return min_number;
}
function max(arr) {
    max_number = 0;
    for(let elem in arguments) {
        if (arguments[elem] > max_number) max_number = arguments[elem];
    }
    return max_number;
}
function avg(arr) {
    avg_number = 0;
    for(let elem in arguments) {
        avg_number += arguments[elem];
    }
    return avg_number/arguments.length;    
}