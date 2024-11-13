
// [23, 45, 122, 43, 11, 13] , 1, 4 --> [45, 122, 43, 11]

/**
 * Description placeholder
 *
 * @param {*} array
 * @param {*} startPos
 * @param {*} endPos
 */
const subArray = (array, startPos, endPos) => {
    const resultarray = [];
    for(let i = 0; i < array.length; i++){
        const currItem = array[i];
        if(i >= startPos && i <= endPos){
            resultarray.push(currItem);
        }
    }
    return resultarray;
}

const myArray = [23, 45, 122, 43, 11, 13];
console.log(subArray(myArray, 1, 4));