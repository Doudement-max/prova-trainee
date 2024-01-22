/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    const nums3 = []; 
    
    for(let index = 0; index < nums1.length; index++){
        if(nums3.indexOf(nums1[index]) === -1 && nums2.indexOf(nums1[index]) !== -1){
         nums3.push(nums1[index]);  
        }
   }

 return nums3;
};   



