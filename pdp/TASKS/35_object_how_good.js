// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.
function nameScore(string) {
    const scores = {
        A: 100,
        B: 14,
        C: 9,
        D: 28,
        E: 145,
        F: 12,
        G: 3,
        H: 10,
        I: 200,
        J: 100,
        K: 114,
        L: 100,
        M: 25,
        N: 450,
        O: 80,
        P: 2,
        Q: 12,
        R: 400,
        S: 113,
        T: 405,
        U: 11,
        V: 10,
        W: 10,
        X: 3,
        Y: 210,
        Z: 23,
    };
    let result = 0;
    let arrayLetters = Object.entries(scores);
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        console.log(letter);
        arrayLetters.forEach((element) => {
            if (element[0] === letter) {
                result = result + element[1];
            }
        });
    }
    if (result <= 60) {
        return "NOT TOO GOOD";
    }
    if (61 <= result <= 300) {
        return "PRETTY GOOD";
    }
    if (301 <= result <= 599) {
        return "VERY GOOD";
    }
    if (result >= 600) {
        return "THE BEST";
    }
    console.log(result);
}
// Return your result as per the following rules:
//score <= 60: "NOT TOO GOOD"
// 61 <= score <= 300: "PRETTY GOOD"
// 301 <= score <= 599: "VERY GOOD"
// score >= 600: "THE BEST"
// Examples
console.log(nameScore("MUBASHIR")); // ➞ "THE BEST"
console.log(nameScore("YOU")); // ➞ "VERY GOOD"
console.log(nameScore("MATT")); // ➞ "THE BEST"
console.log(nameScore("PUBG")); // ➞ "NOT TOO GOOD"
