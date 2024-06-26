// scoping

function global() {
  var g = "global scope";
  //   console.log("1", g, o, i); // ReferenceError o is not defined., ReferenceError i is not defined.
  console.log("1", g);

  function outer() {
    var o = "outer scope";
    // console.log("2", g, o, i); // ReferenceError i is not defined.
    console.log("2", g, o);

    function inner() {
      var i = "inner scope";
      console.log("3", g, o, i); // "3" global scope outer scope inner scope
    }

    inner();
  }
  outer();
}

global();

// 2 context : 1. Global Level & 2. function level
