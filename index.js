class SquareIterator {
    constructor(array) {
      this.array = array;
      this.index = 0;
    }
  
    next() {
      if (this.index < this.array.length) {
        const value = this.array[this.index++];
        return { value: value * value, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  
    [Symbol.iterator]() {
      return this;
    }
  }
  
  // Usage example
  const numbers = [1, 2, 3, 4, 5];
  const squareIterator = new SquareIterator(numbers);
  
  for (let square of squareIterator) {
    console.log(square);
  }
  
