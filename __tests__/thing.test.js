/* eslint-disable no-undef */
import { Dog } from "../src/thing.js";

describe( "Dog", () => {
  jest.useFakeTimers();
  let dog;

  beforeEach(() => {
    dog = new Dog (50,0);
  });

  afterEach(function(){
    jest.clearAllTimers();
  });
  
  
  test("should increase dogs hunger by 5 after 8 seconds", () => {
    dog.increaseHunger();
    jest.advanceTimersByTime(8001);
    expect(dog.hungry).toEqual(5);
  });


  test("should decrease dogs happiness by 5 after 12 seconds", () => {
    dog.decreaseHappy();
    jest.advanceTimersByTime(12001);
    expect(dog.happiness).toEqual(20);
  });

  test("dog should die if happiness is 0 and hunger = 50", () => {
    dog.increaseHunger();
    dog.decreaseHappy();
    dog.isDead();
    jest.advanceTimersByTime(250000);
    expect(dog.isAlive).toEqual(false);
  });
});
