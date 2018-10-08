## 1、概念
promise就是一个对象，用来传递异步操作的消息。
## 2、生命周期
 生命周期内有三种状态 pending fufilled rejected状态只能从pending-fufilled或者从pending-rejected 当状态一旦发生改变，就不可以再次改变。
 ## 3、好处
 在我们执行异步操作的时候，往往会有下一个程序的请求需要上一个程序的结果数据，以前一般都是嵌套，但如果数据多了会很麻烦，所以promise对象解决了地狱回调的问题
 ## 4、举例
 function test(resolve,reject){
     var timeout=Math.random()*2;
     setTimeout(function(){
         if(timeout<1){
             resolve('200ok')
         }else{
             reject('fail')
         }
         
     },timeout*1000)
     
     
     
 }
 <br>
 test函数有两个参数，这两个参数都是函数，如果执行成功，则调用resolve,失败则调用reject test只关心自身的逻辑，而不关心resolve和reject是如何实现的
 <br>
 var p1=new Promise(test);<br>
 var p2=p1.then(function(result){console.log(result)});
 <br>
 var p3=p2.catch(function(reason){
     console.log(reason);
 })
 <br>
 变量p1是一个promise对象，它负责执行test函数，test在内部是一部执行的，当test执行成功时，我们就告诉promise对象执行这个函数 p1.then 当执行失败时，就执行p1.catch
 <br>
 以上代码可以串联起来
 new Promise(test).then(function(){console.log(执行成功)}).catch(function(){console.log('执行失败')})；
 <br>所以promise最大的好处就是将执行代码和处理代码分离了
 <br><br>未完待续！！
 
 