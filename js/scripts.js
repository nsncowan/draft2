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
//const name = document.getElementById("userNameInput").value;


// conditionals to display results
function processSurvey(event) {
  
  event.preventDefault();
  hideResults();
  const priority = document.getElementById("priority").value;
  const help = document.querySelector("input[name='revolution']:checked").value
  let name = document.getElementById("userNameInput").value;
  
  if (priority === "1" && help === "yes") {
    document.getElementById("result1").removeAttribute("class");
    document.querySelector("span#name1").innerText = name;
  } else if (priority === "2" && help === "yes") {
    document.getElementById("result2").removeAttribute("class");
    document.querySelector("span#name2").innerText = name;
  } else if (priority === "3" && help === "yes") {
    document.getElementById("result3").removeAttribute("class");
    document.querySelector("span#name3").innerText = name;
    document.querySelector("span#name4").innerText = name;
  } else if (priority === "1" && help === "no") {
    document.getElementById("result4").removeAttribute("class");
    document.querySelector("span#name5").innerText = name;
  } else if (priority === "2" && help === "no") {
    document.getElementById("result5").removeAttribute("class");
    document.querySelector("span#name6").innerText = name;
  } else if (priority === "3" && help === "no") {
    document.getElementById("result6").removeAttribute("class");
    document.querySelector("span#name7").innerText = name;
  }
}

//Execute process
window.addEventListener("load", function() {
  const survey = document.getElementById("languageSurvey");
  survey.addEventListener("submit", processSurvey);
});

