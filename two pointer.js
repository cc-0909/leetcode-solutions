//盛最多的水
var maxArea = function(height) {
   let maxWater=0
   let nowWater=0
   if(height.length==1){
    return height
   } 
   let left=0
   let right=height.length-1
   while(left<=right){
    nowWater=(right-left)*Math.min(height[left],height[right])
    if(height[left]>height[right]){
        right--
    }else{
        left++
    }
    maxWater=Math.max(nowWater,maxWater)
   }
   return maxWater
};

//移动零
var moveZeroes = function(nums) {
    let numslength=nums.length
    let index=0
    for(let i=0;i<numslength;i++){
        if(nums[i]!=0){
          nums[index]=nums[i]
          index++
        }
    }
    while(index<numslength){
        nums[index]=0
        index++
    }
    return nums
};