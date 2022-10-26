/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */



const specialChars = [
"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
]
const line = "-";

let numberOfTimes = 0;
let numberOfLines = 0;
let password = "pa$ojjrd"; // inte giltigt


for (let i = 0; i < password.length; i++) { //for-loop
    console.log('Bokstaven nr', i, 'är', password.charAt(i));    //printar bokstaven i loopen
    console.log('Är detta med i specialChars:', specialChars.includes(password.charAt(i))); //printar om bokstaven finns i specialChars
    if (specialChars.includes(password.charAt(i))) {
        numberOfTimes++; //ökar number of times med 1
        
    }
}
console.log("Så många specialtecken fanns:", numberOfTimes);
console.log('Längden på lösenordet:',password.length);

if (password.length >= 6 && numberOfTimes >= 2) {
    console.log("Great password!");
}   else if (password.length >= 8 && numberOfTimes >= 1) {
    console.log("Great password! 2");
}    else if (password.length >= 12 && numberOfTimes >= 1) {
    console.log("Great password! 2");
}
     else {
    console.log("Bad password!");
 }

 // password = "pa$sword"; // giltigt
 // password = "p@ssw%rd"; // giltigt
 // password = "pa$$word"; // giltigt
 // password = "secretpassword"; // inte giltigt
 // password = "secret-password"; // giltigt
 // password = "such-password-much-secure-very-long"; // giltigt
 
