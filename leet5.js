// <==179==>
var largestNumber = function(nums) {
    const merge = (a, b) => {
        const order1 = parseInt(${a}${b});
        const order2 = parseInt(${b}${a});
        return order2 - order1; 
    };
    
    const sortedNums = nums.map(String).sort(merge);
    
    if (sortedNums[0] === '0') {
        return '0';
    }
    
    return sortedNums.join('');
};

const nums = [9,9,6,7,8,5,4,6,9,8,10];
console.log(largestNumber(nums));