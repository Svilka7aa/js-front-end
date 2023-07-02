function carWash(commands) {
    let cleanPercentage = 0
    
    for (let index = 0; index <= commands.length; index++) {
        const command = commands[index];
        switch (command) {
            case "soap":
                cleanPercentage += 10;
                break;
            case "water":
                cleanPercentage += cleanPercentage * 0.2;
                break;
            case "vacuum cleaner":
                cleanPercentage += cleanPercentage * 0.25;
                break;
            case "mud":
                cleanPercentage -= cleanPercentage * 0.1;
                break;
        }
    }

    return `The car is ${cleanPercentage.toFixed(2)}% clean.`
}

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))