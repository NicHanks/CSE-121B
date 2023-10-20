const newP = document.createElement("p");
newP.textContent = "My new paragraph";
newP.classList.add("green");
document.body.append(newP);

const newSection = document.createElement('section'); 
// const newHeadline = document.createElement('h2');
// newHeadline.textConstent = "CSE 121b"
// newSection.append(newHeadline);
//instead of doing these.. we could do
const courseCode = "CSE 121b"; 
newSection.innerHTML = `<h2>${courseCode}</h2>
<p>Javascript Language</p>`;


document.body.append(newSection);

//Element.setAttribute('src', 'path/to/image');


// couldn't find sandbox 
/// function myfunct() {

// }

//  *function expression 
// const double = function (num) {
//     return num * 2;
// }

// const double2 = (num) => num * 2 

// function loopy(callback) {
//     for(let i = 0; i<MimeTypeArray.length;i++)
//     console.log(callback(myArray[i]));
// }

// loopy(double);
// myArray.forEach(double); // this does the same thing but without hard coding it in line 34 which is good