1. y je postala funkcija f, a z je undefined.

2. 
let name = 'John Doe';

(function vratiNesto(name) {
   let x = name;
   function f() { return x; }
   return f;
})(name);