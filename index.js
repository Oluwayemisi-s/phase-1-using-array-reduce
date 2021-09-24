const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries

function summation (acc, element){
    acc += element
    return acc
}

totalBatteries = batteryBatches.reduce(summation , 0)

console.log (totalBatteries)