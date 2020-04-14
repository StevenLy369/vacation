/* eslint-disable no-undef */
import { Dog } from "../src/thing.js";

describe( "Dog", () => {
  jest.useFakeTimers();
  let dog;

  beforeEach(() => {
    dog = new Dog (0,0);
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
    expect(dog.happiness).toEqual(45);
  });
});
