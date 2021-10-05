function translatePigLatin(str) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vocales.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vocal = str.indexOf(firstMatch[0]);
        newStr = str.substring(vocal) + str.substring(0, vocal) + "ay";
        return newStr;
    }
}
translatePigLatin("rhythm");

