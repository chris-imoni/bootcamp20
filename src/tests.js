//validating array items to be only number
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

//finding min and max in an array
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

//The fizzBuzz function
function fizzBuzz (n){
    if (n === undefined){
        return "No input! fizzBuzz accepts a number as the parameter";
    }else if(typeof n !== "number"){
        return "Invalid input! fizzBuzz accepts only a number as the parameter";
    }else{
        if(n%3 ===0 && n%5 === 0){
            return "FizzBuzz";
        }else if(n % 3 === 0 ){
            return "Fizz";
        }else if(n % 5 === 0){
            return "Buzz";
        }else{
            return n;
        }
    }
    }

//The aritGeo function
function aritGeo(nums){
    var arit = false;
    var geo = false;
    if(nums.length <= 0){
        return 0;
    }else{
        for(var i = 0; i <= nums.length; i++){
            if(i < nums.length - 2){
                num1 = nums[i + 1] / nums[i];
                num2 = nums[i + 2] / nums[i + 1];
                if(num1 == num2){
                    var geo = true;
                }else{
                    var geo =false;
                }
            }

            if(i == nums.length - 2){
                num1 = nums[i + 1] / nums[i];
                num2 = nums[i] / nums[i - 1];
                if(num1 == num2){
                    var geo = true;
                }else{
                    var geo = false;
                }
            }
        }

        for(var i = 0; i <= nums.length; i++){
            if(i < nums.length - 2){
                num1 = nums[i + 1] - nums[i];
                num2 = nums[i + 2] - nums[i + 1];
                if(num1 == num2){
                    var arit = true;
                }
                else{
                    var arit = false;
                }
            }

            if(i == nums.length - 2){
                num1 = nums[i + 1] - nums[i];
                num2 = nums[i] - nums[i - 1];
                if(num1 == num2){
                    var arit = true;
                }else{
                    var arit = false;
                }
            }
        }

        if(arit){
            return "Arithmetic";
        }
        else if(geo){
            return "Geometric";
        }
        else{
            return -1;
        }
    }

}

