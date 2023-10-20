//getGrades
//CleanInput *stringsplit
//ConvertToGpaPoints
//calculateGpa *clickHandler
//DisplayGpa

function getGrades(inputSelector) {
    // get grades from the input box
    const gradeString = document.querySelector("#grades")
    // myversion - const grades = document.getElementById('grades').textContent;
    // split them into an array (String.split(','))
    const gradesArray = gradeString.value.split(',');
    //grades.split(",");
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanInput = gradesArray.map(cleanGrades)
    // *could also be written as the following:
    //const clean = gradesArray.map((input) => grade.trim().toUpperCase())
    // my idea was: grades.toUpperCase();
    // return grades
    return cleanInput;
  }
  
  function cleanGrades(input) {
    return input.trim().toUpperCase()
  }
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    console.log(grade)
    foreach (',' in grade);
    {
        
    }
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    const grades = getGrades();
    console.log(grades);
    // calculate the gpa from the grades entered
    // display the gpa
  }

  document.querySelector("#submitButton").addEventListener('click', clickHandler);