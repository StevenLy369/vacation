
export function Place(location, landmarks, timeOfYear, notes){
  this.location = location;
  this.landmarks = [];
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

export function Dog(){
  this.hungry = 0,
  this.happiness = 50,
  this.isAlive = true;
}


Dog.prototype.decreaseHappy = function() {
  setInterval (()=>{
    if(this.hungry === 25){
      return this.happiness /2;
    } if(this.hungry === 50){
      return this.isAlive = false;
    }
  },250);
};

Dog.prototype.increaseHunger = function() {
  setInterval(() => {
    return this.hungry += 5;
  }, 8000);
};



