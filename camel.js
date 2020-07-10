function disemvowel(str) {
 
    var stri = str.replace(/[aeiou]/gi,"");
    return stri;
}


console.log(disemvowel("This website is for losers LOL!"))