function convertToRoman(num) {
    //create a value table
    const numTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    
    //variable to keep track of values
    let count = "";

    //loop in the object and getting the value of each key
    for (const key in numTable) {
        const numValue = numTable[key];

        //while the number value is less or equal to the input
        //decrease the value from the input and add to count
        while (numValue <= num) {
            num -= numValue;
            count += key;
        }
    }
    return count;
}