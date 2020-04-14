
export function Place(location, landmarks, timeOfYear, notes){
  this.location = location;
  this.landmarks = [];
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

export function Dog(){
  this.hungry = 0,
  this.happiness = 25,
  this.isAlive = true;
}


Dog.prototype.decreaseHappy = function() {
  setInterval (()=>{
    return this.happiness -= 5;
  },12000);
};

Dog.prototype.increaseHunger = function() {
  setInterval(() => {
    return this.hungry += 5;
  }, 8000);
};


Dog.prototype.isDead = function() {
  setInterval(() => {
    if(this.hungry >= 25 && this.happiness <= 0){
      return this.isAlive = false;
    }
  },250);
  
};


