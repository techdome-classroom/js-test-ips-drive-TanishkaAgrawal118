function smallestMissingPositiveInteger(nums) {
const numSet = new Set(nums);
let smallestMissing =1;
while(numSet.has(smallestMissing)){
  smallestMissing++;
}
return smallestMissing;

    // Implement the function smallest_missing_positive_integer

  
  }
  
  module.exports = smallestMissingPositiveInteger;

