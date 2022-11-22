// code your solution here
function saturdayFun(activity1 ="roller-skate" , activity2 ="bathe my dog") {
    return ("This Saturday, I want to " + activity1 + "!");
}

console.log ("This Saturday, I want to " + activity2 + "!");

function mondayWork(activity1 = "go to the office", activity2 ="work from home"){
     return ("This Monday, I will " + activity1 + ".");
}
console.log ("This Monday, I will " + activity2 + ".");

function wrapAdjective(specialCharacter = "*") {
      return function inner(adjective = "") {
    return (`You are ${specialCharacter}${adjective}${specialCharacter}!`)
   }
}
wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a dedicated programmer");
