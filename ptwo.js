
function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Please enter string";
    }

    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

console.log(matchFinder("Peter Parker", "Pet"));