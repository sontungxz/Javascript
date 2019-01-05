// // function sum(a, b) {
// //   return a + b;
// // }
// // sum(1, 2);

// // var sum2 = function() {
// //   return a + b;
// // };
// // sum2(2, 3);

// // var sum = (a, b) => {
// //   return a + b;
// // };

// // var sum = (a, b) => a + b;
// // sum(4, 8);
// //  var square = (x) => x*x;

// var square = x => x * x;
// square(5);

// //  var doSomething = () => Date.now();
// //  doSomething();

// var arr = [1, 2, 3];
// // arr.map(function(x){
// //     return x*x;
// // });

// arr.map(x => x * x);
var a = {
  name: "AAA",
  run: function() {
    var run2 = function() {
      console.log(this.name);
    }.bind(a)();
    run2();
  }
};
a.run();
