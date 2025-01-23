function isEnoughCapacity(products, containerSize) {
  let sumOfCount = 0;

  for (const count of Object.values(products)) {
    sumOfCount += count;
  }

  return sumOfCount <= containerSize;
}
const divider = "-".repeat(50);
console.log(`${divider}\nThe first task\n${divider}`);
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
