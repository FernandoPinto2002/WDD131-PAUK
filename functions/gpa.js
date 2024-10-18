

function getGrades(inputSelector) {
    // get grades from the input box
    let inputElement = document.querySelector(inputSelector);
    // split them into an array (String.split(','))
    let input = inputElement.value;
    let gradesArray = input.split(',');
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    let cleanedGrades = gradesArray.map(grade => grade.trim().toUpperCase());
    // return grades
    return cleanedGrades;
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let points = 0;
    if (grade === 'A') {
        points =  4.0;
    } else if (grade === 'B') {
        points =  3.0;
    } else if (grade === 'C') {
        points =  2.0;
    } else if (grade === 'D') {
        points =  1.0;
    } else if (grade === 'F') {
        return 0.0;
    } else {
        return "Invalid grade";
    }

    return points;
  }
  
  function calculateGpa(grades) {
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    return gpa.toFixed(2);

    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selecto0
    const outputElement = document.querySelector(selector);
     outputElement.innerHTML = `Your GPA is: ${gpa}`;

  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    const grades = getGrades("#grades");
    // get the grades entered into the input
    const gpa = calculateGpa(grades);
    // calculate the gpa from the grades entered
    outputGpa(gpa, "#output");
    // display the gpa
  }

  document.querySelector("#submitButton").addEventListener("click", clickHandler);