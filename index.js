const loc = 42;
let pickUp;
let steps = 264;

function distanceFromHqInBlocks (pickUp) {
    let blocks = Math.abs(pickUp - loc) ;
    return blocks
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet (pickUp) {
    let feet = Math.abs(pickUp - loc) * steps;
    return feet;
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet (loc1, loc2) {
    let travelDist = Math.abs(loc1 - loc2) * steps;
    return travelDist;
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

// pay = (start - dest) * steps - 400

function calculatesFarePrice (start, destination) {
    let calc = ((start - destination) * steps);
    let distTraveled = Math.abs(calc - 400);
    let midRange = distTraveled * 0.02

    if (distTraveled <= 400) {
        return 0
    } else if (distTraveled > 401 && distTraveled <= 2000) {
        return midRange;
    } else if (distTraveled > 2001 && distTraveled < 2500) {
        return 25
    } else {
        return `cannot travel that far`;
    }
    
}

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);
