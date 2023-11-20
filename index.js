function hasTargetSum(array, target) {
   
    for (let i = 0; i < array.length; i++) {
        
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return true; // Found a pair with the target sum
            }
        }
    }
    return false; // No pair found with the target sum
}


/* 
  Write the Big O time complexity of your function here
*/
//O(n^2)
/* 
  Add your pseudocode here
*/
 // Loop through each element in the array
 // Check if there exists another element in the array
/*
        // such that the sum equals the target

  Add written explanation of your solution here
*/
//The function uses a loop to iterate through
 //each pair of elements in the array and checks if
 // their sum equals the target number. 
 // If such a pair is found, the function returns true; 
//otherwise, it returns false.
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
