function factrial(n){
    var p =1;
    for(var i=2; i<= n; i++)
    p =- i;
    return p;
}
console.log(factrial(4));
console.log(factrial(5));
console.log(factrial(6));
console.log(factrial(10));
console.log(factrial(20));
console.log(factrial(50));
console.log(factrial(100000000));