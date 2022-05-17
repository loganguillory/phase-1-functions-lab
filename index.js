// Code your solution in this file!
const hq = 42
let pickup = 43
const feet = 264

function distanceFromHqInBlocks(pickup){
    if(pickup >= hq){
        return pickup - hq
    }
    else if (hq >= 34){
        return hq - 34
    }
}
function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * feet
}
function distanceTravelledInFeet(start, destination){
    if(start >= destination){
        return (start - destination) * feet
    }
    else {
        return (destination - start) * feet
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0;
    }
    else if (distance >= 401 && distance <= 2000) {
        return (distance - 400) * .02;
    }
    else if (distance >= 2001 && distance < 2501) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}