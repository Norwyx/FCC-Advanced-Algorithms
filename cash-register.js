//defining all currency and its value
const currencyUnit = {
    "PENNY": 1,
    "NICKEl": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
};

//function to do everything
function checkCashRegister(price, cash, cid) {
    //calculate the difference between the cash and the price
    //of the product
    let changeSum = cash * 100 - price * 100;
    
    //make a copy of the changeSum var to make operations
    //easier
    let changeSumCheck = changeSum;

    let change = [];
    let status = "";

    //counting the cid and filtering those that have 0 and 
    //reverting so it starts from bigger denominations
    let cidSum = 0;
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse(); 

    filteredCid.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1] * 100;
        cidSum += currSum;
        let amount = 0;
        while (changeSum >= currencyUnit[curr] && currSum > 0) {
            amount += currencyUnit[curr];
            changeSum -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
        }
        if (amount !== 0) {
            change.push([curr, amount / 100]);
        }    
    });

    if (changeSum > 0) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
        status = "CLOSED";
        change = cid;
    } else {
        status = "OPEN";
    }
    return { "status": status, "change": change};
}