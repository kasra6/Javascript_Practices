// ECMA 5 class definition
let Human = (
  function Human(name){
    this.name = name;
  }
)
Human.prototype.sayGoodNight = function(){
  return 'Say Goodnight ' + this.name;
}

let goerge = new Human('Gracie');
console.log(goerge.sayGoodNight());

//Class definition in ECMA 6
class Greeting{
  constructor(name){
    this.name = name;
  }
  sayHello(){
    return 'Helooo ' + this.name;
  }
}

let yokko = new Greeting('Nurse!');
console.log(yokko.sayHello());

//ES 5 class creation
function Show(name, network){
  this.name = name;
  this.network = network;
}

Show.prototype.getShowName = function getShowName(){
  return this.name; //added to the show prototype it now has access to its properties
}

Show .prototype.getShowNetwork = function getShowNetwork(){
  return this.Network;
}

let gravityFalls = new Show('Gravity Falls', 'Disnry XD');
console.log(gravityFalls.getShowName());
console.log(gravityFalls.getShowNetwork());
Show.prototype.getShowNetwork = function getShowNetwork(){
  return 'On my TV!';
};

console.log(gravityFalls.getShowNetwork());
console.log(Show.prototype);

//ES 6 class creation
class MyTVShow{
  constructor(name, netwrork){
    this.name = name;
    this.network = network;
  }

  getShowName(){
    return this.show;
  }

  getShowNetwork(){
    return this.network;
  }
}

console.log(MyTVShow.prototype);


class Cookies{
  constructor(){
    this._typeOfCookie;
  }
  set cookieType(typeOfCookie){
    this._typeOfCookie = typeOfCookie;
  }
  get CookieType(){
    return this._typeOfCookie;
  }
}

let myCookie = new Cookies();
myCookie.cookieType = "Chocolate Chip";

console.log(myCookie.cookieType);
console.log(myCookie._typeOfCookie);

class Robot{
  constructor(){
    this.type;
  }
}

class BendingUnit extends Robot{
  constructor(){
    super();
    this.name;
    this.occupaion = 'Industrial Robot';
    this.origin = 'Tijuana, Mexico';
  }
}

class AstdromechDroid extends Robot{
  constructor(){
    super();
    this.name;
  }
}

let bender = new BendingUnit();
bender.type = 'Bending Unit 22';
bender.name = 'Bender Bending Rodriguez';

console.log(bender.type);
console.log(bender.name);

let r2d2 = new AstdromechDroid();
r2d2.type = 'Astromech Droid';
r2d2.name = 'R2-D2';

console.log(r2d2.type);
console.log(r2d2.name);

class Human1{
  constructor(){
  }
  static hasLegs(){
    return 'person has legs';
  }
  static hasArms(){
    return 'person has arms';
  }
}

console.log(Human1.hasLegs());
console.log(Human1.hasArms());
