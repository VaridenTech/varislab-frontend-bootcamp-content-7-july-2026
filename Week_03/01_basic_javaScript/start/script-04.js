function printName(name) {
    console.log(name);
}

function callFunction(func) {
    console.log('Calling function...');
    // Callback Function
    func('Varis');
    console.log('Function called');
}

// callFunction(printName);

function printNum(num) {
    console.log(num);
}

function sumCallback(a, b) {
    const result = a + b;
    callback(result);
}

sumCallback(4, 5, printNum);