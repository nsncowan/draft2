// function hide results and error
function hideResults() {
  document.getElementById("result1").setAttribute("class", "hidden");
  document.getElementById("result2").setAttribute("class", "hidden");
  document.getElementById("result3").setAttribute("class", "hidden");
}

// function to clear previous results
    //document.getElementById('userName').reset();
    //document.getElementById('languageSurvey').reset();

// set variables containing input values for each form
const name = document.getElementById("userNameInput").value;
const priority = document.getElementById("priority").value;

// conditionals to display results
function processSurvey(event) {
  event.preventDefault();
  document.querySelector("span#name").innerText = userNameInput;
  if (priority === "1") {
    document.getElementById("result1").removeAttribute("class");
  } else if (priority === "2") {
    document.getElementById("result2").removeAttribute("class");
  } else if (priority === "3") {
    document.getElementById("result3").removeAttribute("class");
  }
}

//Execute process


