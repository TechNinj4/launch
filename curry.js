// 柯里化函数
// 柯里化函数是一种函数式编程的一种方式，它可以将函数的多个参数转换为函数的一个参数，这种方式使得函数的调用更加灵活和方便。
function curry(f){
    return function(a){
        return function(b){
            return f(a,b);
        }
    }

}
function sum(a,b){
    console.log(a+b);
}
let currySum = curry(sum);
currySum(1)(2); // 3
currySum(1,2); // result:3
