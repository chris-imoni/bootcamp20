function validateNum (n){
    var l = n.length;
    while(l){
        if (typeof n[l-1] !== 'number'){
            return false;                    
        }
        l--;                
    }
    return true;
}

function findMinMax (nums){
    if(!nums){
        return "No parameter! findMinMax accepts an array of numbers as the only parameter."
    }else if(!Array.isArray(nums)){
        return "Invalid input! Input should be an array.";
    }else if(!validateNum(nums)){
            return "Invalid input! Input should be an array of numbers.";
    }else{
    	nums.sort(function(a,b){
                return a-b;
            });
            if(nums.length === 0){
                return [];
            }else if (nums[0] === nums[nums.length -1]){
                return [nums[0]]
            }else{
                return [nums[0], nums[nums.length - 1]]
            }
}
}
