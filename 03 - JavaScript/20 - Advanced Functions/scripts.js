// 1.
let x = "John Doe"; 
function vratiNesto(name) {
   let x = name;
   function f() { return x; }
   return f;
}
let y = vratiNesto("Jane Doe");
let z = vratiNesto()();