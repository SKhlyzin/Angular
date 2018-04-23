/*5*/
function calc(str) {
    return /^(?:\d+([*+-]|\/(?!0)))+\d+$/.test(str) ? eval(str): false;
}