let text1 = prompt(`Ismingizni kiriting`);
let text2 = prompt(`Harf kiriting`);

let lowerText1 = text1.toLowerCase();
let lowerText2 = text2.toLowerCase();

if (lowerText1.includes(lowerText2)) {
    alert(`${text1} da ${text2} bor`);
} else {
    alert(`${text1} da ${text2} yo'q`);
}

// let text1 = "Hello World!";       // String
// let text2 = text1.toLowerCase() && text2 = text1. ;  // text2 is text1 converted to lower
// console.log(text2);