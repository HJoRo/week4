
function addNum (x, y){
    return x + y;
}
console.log(addNum(5, 5));

function multNum (x, y){
    return x * y;
}
console.log(multNum(5, 5));

function count(x, y){
    for(x; x <= y; x++){
        console.log(x);
    }
}
count(25, 30);

var num = 10
function count(x, y){
    for(x; x <= y; x++){
        console.log(x);
        console.log(x + num);
    }
}
count(25, 30);