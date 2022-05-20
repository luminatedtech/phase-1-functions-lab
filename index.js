function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42) 
}
console.log(distanceFromHqInBlocks(50))

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance)*264
}


function distanceTravelledInFeet(start,destination) {
    return Math.abs(start-destination)*264

}

function calculatesFarePrice(start,destination) {
    if (Math.abs(start-destination)*264 < 400 )
        return 0
    else if (Math.abs(start-destination)*264 > 400 && Math.abs(start-destination)*264 <2000)
        return ((Math.abs(start-destination)*264 -400) * .02)
    else if (Math.abs(start-destination)*264>2000 && Math.abs(start-destination)*264<2500)
        return 25 
    else if (Math.abs(start-destination)*264 > 2500)
        return "cannot travel that far"
}   
console.log(calculatesFarePrice(60,42))
