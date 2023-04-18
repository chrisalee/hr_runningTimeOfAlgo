/*
 * Complete the 'runningTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function runningTime(arr) {
    let shifts = 0;
    // shifts occur when an element's position changes in the array,
    // do not shift an element if it is not necessary
    
    for(let i = 0; i < arr.length; i++) {
        let curr = i;
        for(let j = curr - 1; j >= 0; j--) {
            if(arr[curr] < arr[j]) {
                [arr[curr], arr[j]] = [arr[j], arr[curr]];
                shifts++
            }
            curr--;
        }
    }
    console.log(shifts);
    return shifts;

}
