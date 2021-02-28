function mapToNegativize(sourceArray) {
    return sourceArray.map((num) => {return num * -1});
}

function mapToNoChange(sourceArray) {
    return sourceArray.map((num) => {return num});
}

function mapToDouble(sourceArray) {
    return sourceArray.map((num) => {return num * 2});
}

function mapToSquare(sourceArray) {
    return sourceArray.map((num) => {return num * num});
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return sourceArray.reduce(reducer, startingPoint);
}

function reduceToAllTrue(sourceArray) {
    const reducer = (accumulator, currentValue) => {
        if(!!currentValue) {
            return accumulator = true;
        } else {
            return accumulator = false;
        }};
    return sourceArray.reduce(reducer);
}

function reduceToAnyTrue(sourceArray) {
    const reducer = (accumulator, currentValue) => {
        if(!!currentValue) {
            return accumulator = true;
        } else {
            return accumulator = false;
        }};
    return sourceArray.reduce(reducer);
}