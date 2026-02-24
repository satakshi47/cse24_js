console.log("hello world");
document.write("hello world");

var num=10;
console.log(num);
console.log(typeof(num));
 num=false;
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
 num=undefined;
console.log(num);
console.log(typeof(num));
 num="satakshi";
console.log(num);
console.log(typeof(num));

const sym1=Symbol(4)
console.log(sym1);
const sym2=Symbol(4)
console.log(sym2); //sm1 is not equal to sm2 clasehiesh avoid
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false");
}

// var i;
// for(i=0;i<3;i=i+1){
// console.log(i);
// }
// var count;
// document.write("Starting lopp"+"<br/>");
// for(count =0;count<10;count++){
//     document.write("Current")
// }
