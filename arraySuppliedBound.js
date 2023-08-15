function fillArray(start, end, step) {
    var result = [];
    if (typeof start === "string" &&
        typeof end === "string") {
        for (var i = start.charCodeAt(0); end.charCodeAt(0) > i; i += step) {
            result.push(String.fromCharCode(i));
        }
    } else if (typeof start === "number" &&
        typeof end === "number") {
        for (var i = start; end > i; i += step) {
            result.push(i);
        }
    }
    return result;
}

console.log(fillArray("a", "z", 3))
console.log(fillArray(-10, -2, 2))