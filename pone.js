function cubeNumber(number) {
    if(typeof number !== "number" || number <= 0){
        return "Please enter positive number";
    }

    var cube= number*number*number;
    return cube; 

}
console.log(cubeNumber(10));