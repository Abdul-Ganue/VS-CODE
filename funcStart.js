function calc(a, b) {
  this.a = a;
  this.b = b;

  function add() {
    let t = 8;
    return a + b + t;
  }

  function minus() {
    return a - b + t;
  }
  return add();
}

console.log(calc(8, 6));
