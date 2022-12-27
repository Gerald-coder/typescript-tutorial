"use strict";
/// function parameters type anotation is necesary unlike that of variables that can be inferred
exports.__esModule = true;
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "the usets name is ".concat(name, " with an active emmail of ").concat(email);
};
var user = loginUser('gerry', 'g@g.com');
// // returnin gmore than one type fro a function
function getVal(myVal) {
    var val = typeof myVal === 'number' ? 4 : 'error code 200';
    return val;
}
console.log(getVal('gerry'));
