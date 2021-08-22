const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "L",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

function rot13(str) {
    //variable to keep track of my count
    let count = "";

    //loop through the str
    for (let i = 0; i < str.length; i++) {
        //keep track of the character 
        const character = str[i];
        const isALetter = alphabet.includes(char);
    
        //if a character isn't letter, add to count
        if (isALetter === false) {
            count += character;
        } else {
        //else, rotate 13 places, add to count
            const characterIndex = alphabet.findIndex((c) => c === character);       
            
            count += alphabet[characterIndex + 13] || alphabet[characterIndex];
        }
    }
    return count;
}