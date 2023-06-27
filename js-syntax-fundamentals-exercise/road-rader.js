function checkSpeeding (speed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };


    const currentSpedlimit = speedLimits[area];
    const speedOverLimit = speed - currentSpedlimit

    if (speedOverLimit <= 0) {
        console.log(`Driving ${speed} km/h in a ${currentSpedlimit} zone`);
        return;
    } 

    const speedingMesage = 
        speedOverLimit <= 20 
        ? "speeding"
        : speedOverLimit <= 40 
        ? "excessive speeding"
        : "reckless driving"

    console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${currentSpedlimit} - ${speedingMesage}`)
    
}

checkSpeeding(40, 'city')
checkSpeeding(21, 'residential')
checkSpeeding(120, 'interstate')
checkSpeeding(200, 'motorway')