const tax = 1.08;
var form = prompt("金額を入力してください。");
var price = form * tax;
alert(price);

let obj = {
    pro1 : 'value',
    pro2 : function(){
        console.log('Hey');
    },
    pro3 : {
        p : 'value'
    }
}

console.log(obj.pro1);
obj.pro2();
console.log(obj.pro3.p);