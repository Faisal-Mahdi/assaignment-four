function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "empty";
    }
    
    var totalAmount = 0;
    for (var i = 0; i < changeArray.length; i++) {
        totalAmount += changeArray[i];
    }
    
    if (totalAmount >= totalDue) {
        return true;
    } else {
        return false;
    }
}

console.log(canPay([], 5)); 