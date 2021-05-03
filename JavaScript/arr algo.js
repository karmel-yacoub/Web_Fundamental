var arr = [6,3,5,1,2,4];
for(i=0;i<arr.length;i++){
console.log("Num "+arr[i]+", sum"+arr[i]);
}
//the output
//"Num 6, sum6"
//"Num 3, sum3"
//"Num 5, sum5"
//"Num 1, sum1"
//"Num 2, sum2"
//"Num 4, sum4"
var arr = [6,3,5,1,2,4];
for(i=0;i<arr.length;i++){
    arr[i]=arr[i]*i;
    console.log(arr[i])
}
//the output
//0 3 10 3 8 20
