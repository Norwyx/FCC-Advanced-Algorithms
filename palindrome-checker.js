function palindrome(str) {
    const alphanumericStr = str

    // set everything in lower case for easier manipulation
    
    .toLowerCase()    
    // remove all non-alphanumeric characters as the problem set says

    .match(/[a-z0-9]/g);
    
    //declaring variables so i can reverse the str
    
    const initial = alphanumericStr.join("");
    
    const reversed = alphanumericStr
    .reverse()
    .join("");
    
    // compare both the str and the reversed string
    
    if (initial ===reversed) {
        return true;
    } else {
        return false;
    }
}