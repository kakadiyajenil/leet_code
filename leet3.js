/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
function flat(arr, n) {

    if(n === 0) {
    return arr;
    }
    
    let flattenedArray = []
    
    arr.forEach(item => {
    if(Array.isArray(item)) {
    for(let i = 0; i < item.length; i++) {
    flattenedArray.push(item[i])
    }
    } else {
    flattenedArray.push(item)
    }
    })
    
    return flat(flattenedArray, n - 1);
    }