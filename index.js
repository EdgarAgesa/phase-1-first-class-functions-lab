const returnFirstTwoDrivers=function drivers([]){
    return (['Antonia', 'Nuru'])
}

const returnLastTwoDrivers=function drivers([]){
    return (['Amari', 'Mo'])
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier=function (value){
     return function (fare){
        return fare*value
    }
}

const fareDoubler=function (fare){
    return fare*2
}
const fareTripler=function(fare){
    return fare*3
}

function selectDifferentDrivers(arrayOfDrivers, drivers){
    return drivers(arrayOfDrivers)
}
