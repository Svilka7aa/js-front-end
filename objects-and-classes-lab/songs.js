class Song{
    constructor(type, name, legth) {
        this.type = type;
        this.name = name;
        this.length = legth;
    }
}

function solve(input) {
    const typeToDysplay = input.pop();
    const  [_, ...songs] = input;
    
    songs.map(songAsText => {
        const[type, name, length] = songAsText.split("_");
        if(type === typeToDysplay) {
            console.log(name)
        } 
        // const song = new Song(type, name, length);
    });
}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);