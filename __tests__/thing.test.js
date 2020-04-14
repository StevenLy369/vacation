/* eslint-disable no-undef */
import { Dog } from "../src/thing";

describe( "Dog", () => {
  jest.useFakeTimers();
  let dog;

  beforeEach(() => {
    dog = new Dog (hungry);
  });

  afterEach(function(){
    jest.clearAllTimers();
  });
  
  
  test("should increase dogs hunger by 5 after 8 seconds", () => {
    increaseHunger();
    jest.advanceTimersByTime(8001);
    expect(hungry).toEqual(5);
  });
});
