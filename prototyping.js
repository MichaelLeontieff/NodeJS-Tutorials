function User() {
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLife(targetPlayer) {
    targetPlayer.life += 1;
    console.log(this.name + " gave one life point to " + targetPlayer.name);
  }
}

var Michael = new User();
var Wendy = new User();

Michael.name = "Michael";
Wendy.name = "Wendy";

Michael.giveLife(Wendy);
console.log("Michael: " + Michael.life);
console.log("Wendy: " + Wendy.life);

User.prototype.uppercut = function uppercut(targetPlayer) {
  targetPlayer.life -= 3;
  console.log(this.name + " just uppercutted " + targetPlayer.name);
}

Michael.uppercut(Wendy);
console.log(Wendy.life);

User.prototype.magic = 60;

console.log("Magic: " + Michael.magic);
console.log("Magic: " + Wendy.magic);
