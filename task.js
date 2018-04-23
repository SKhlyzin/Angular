/*1*/
let customers = a.filter(function(person) {
  return person.user_id == '22341';
});
/*4*/
let ob = [1,2,3];
ob.reduce((prev, cur, i) => i%2  && prev + cur || prev, 0);
2
/*5*/
function calc(str) {
    return /^(?:\d+([*+-]|\/(?!0)))+\d+$/.test(str) ? eval(str): false;
}
