//1
let driverArray = ['Sally', 'Bob', 'Freddy', 'Claudia',];

const returnFirstTwoDrivers = function(driverArray) {
    return driverArray.slice(0,2);
}

//2
const returnLastTwoDrivers = function(driverArray) {
    return driverArray.slice(-2);
} 

//3-5
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//6-7
const createFareMultiplier = i => {
    return function(fare) {
        return fare * i; 
    }
}

//8-9
const fareDoubler = function createFareMultiplier(fare) {
    return fare * 2;
}

//10-11
const fareTripler = function createFareMultiplier(fare) {
    return fare * 3;
}

//12-13
let newDriverArray = ["Dave", "Jesse", "Cali", "Pickle",];

const selectDifferentDrivers = function(newDriverArray, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(newDriverArray);
}
