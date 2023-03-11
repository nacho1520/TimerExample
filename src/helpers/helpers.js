const { v4: uuidv4 } = require('uuid');

export const renderElapsed = (elapsed, runningSince) => {
    let totalSpend = elapsed;
    console.log("Elapsed: " + elapsed);
    console.log("Running Since: " + runningSince);
    if(runningSince) { 
        totalSpend += Date.now() - runningSince;
        console.log("Date.Now: " + Date.now());
        console.log("Total Spend: " + totalSpend);
    }
    return formatMilliseconds(totalSpend);
}

export const formatMilliseconds = milliseconds => {
    console.log(milliseconds);
    const seconds = Math.floor(( milliseconds / 1000 ) % 60);
    const minutes = Math.floor(( milliseconds / 1000 / 60) % 60);
    const hours = Math.floor(( milliseconds / 1000 / 60 / 60 ) % 24);

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(":");
}

export const newTimer = timer => {
    return {
        id: uuidv4(),
        title: timer.title,
        project: timer.project,
        elapsed: 0
    };
} 