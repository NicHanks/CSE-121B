const myArray = ["one", "two", "three"]

// creating a function declaration
function listTemplate(item) {
    return `<li>${item}</li>`
}

// now we need to declare a new function. And then use it in a map. 
const htmlStrings = myArray.map(listTemplate);
console.log(htmlStrings);

const listElement = document.querySelector("#myList");

listElement.innerHTML = htmlStrings.join("");

//let new_array = arr.map(functionn cancelIdleCallback( currentValue[]))

//ACTIVITY 2
const array = ["A", "B", "C"];

// write a functionn to convert
function gradeToGpaPoints(grade) {
    let pionts = 0
    switch(grade) {
        case "A":
        case "a":
            pionts = 4;
            break;
        case "B":
            pionts = 3;
            break;
        case "C":
            pionts = 2;
            break;
        default:
            points = -1;
    }
    return pionts;
}

const myGpaPoints = grades.map(gradeToGpaPoints);
