function sortMaker(arr) {

   const [a, b] = arr ;
   
   if(a > 0 || b > 0){
    return "invalid input"
   }

if (Number.isInteger(a) && Number.isInteger(b)){
    if (a === b) {
        return "equal";
        }
        
     if(a > b){
        return [Math.max(arr[0], arr[1]), Math.min(arr[0], arr[1])];
     }
}

 }
 console.log(sortMaker([2,2]));

