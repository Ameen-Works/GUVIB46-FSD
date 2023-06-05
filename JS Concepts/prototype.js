var animal={moves: true, run: true, bark:false};
var lion={eats: true};
// we can inherit the properties of animal using prototype tmeplate(.__proto__)....
lion.__proto__=animal;
var tiger={hunt: true};
tiger.__proto__=animal;
var fish={swim: true};

console.log(tiger.hunt);
console.log(tiger.run);
console.log(fish.moves);
console.log(lion.bark);