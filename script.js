function isPalindrome(str){
    /* Seu código aqui */
    
    str = str.toUpperCase().replaceAll(' ','');
    let invert = str.length - 1;
    for(let i=0; i<invert/2; i++){
        
        let forward = str[i];
        let backward = str[invert - i];
        if(forward != backward){
            return false
        }
            
    }
            return true
}

function arrayMaxMin(arr){
    /* Seu código aqui */

    let arrayList = arr;
    let max = arrayList[0];
    let min = arrayList[0];

    for(let j = 1; j < arrayList.length; j++){
        if(arr[j] > max){
            max = arr[j]
        }
        if(arr[j] < min){
            min = arr[j]
        }
    }
        return [min,max]
}

