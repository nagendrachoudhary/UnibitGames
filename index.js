var arr = [1, 3, 2, 2, -4, -6, -2, 8];
var target = 4;
Answere(arr, target)
function Answere(arr, target) {
    var merge = [];
    

    //using two pointer time complexity O(nlogn) space complexity O(1)
    var First = [];
    arr.sort((a, b) => { return a - b })
    let leftPointer = 0; 
    let rightPointer = arr.length - 1 
    while (leftPointer < rightPointer) {
        if ((arr[leftPointer] + arr[rightPointer]) == target) {
            var array = [];
            merge.push(arr[leftPointer]);
            merge.push(arr[rightPointer]);
            array.push(arr[leftPointer]);
            array.push(arr[rightPointer])
            First.push(array)
            rightPointer--;
            leftPointer++;
        }
        else if ((arr[leftPointer] + arr[rightPointer]) > target) {
            rightPointer--;
        }
        else{
            leftPointer++;
        }
    }




    //using Map pointer time complexity O(n) space complexity O(n)
    const FirstHash=[]
    const numMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;
        if (numMap.has(complement)) {
          FirstHash.push([num, complement]);
        }
        numMap.set(num, i);
      }
//    console.log(FirstHash);


     // merge Array
    merge.sort((a, b) => { return a - b })




    // Second Combination For {target * 2}
        const result = [];
        function backtrack(start, Sum, List) {
            if (Sum === target) {
                result.push(List.slice());
            }
            if (Sum >= target || start >= arr.length) {
                return;
            }
            for (let i = start; i < arr.length; i++) {
                List.push(arr[i]);
                backtrack(i + 1, Sum + arr[i], List);
                List.pop();
            }
        }
        backtrack(0, 0, []);






    // All Result 
    console.log(`First Combination For ${target} :`, First);
    console.log('Merge Into a single Array:', merge);
    console.log(`Second Combination For ${target * 2} :`, result);

}
