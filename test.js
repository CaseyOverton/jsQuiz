// var array = ("a,b,c,d,e,f,g,h,i").split(",")

// document.getElementById('question1').setAttribute('st')

// make questions
// correct answers will be assined to a var, incorrect answers will be assigned to a var 
// timer function is needed, will worry about that last 
// needs to be 10 questions. 

// function myFunction() {
//     var x = document.getElementById("question1");
//     x.style.color = "red";
//   }
  // question one , set questions and assign them to variables, 
    // var elem = document.getElementById('para');
    // elem.textContent = "This is the first question?";


  var answers = ["A","C","C","B","A","C","B","D","D","A","B","D","C"], 
    tot = answers.length;

    // shows text when button is clicked
    
    // function testsFunction() {
    //   var T = document.getElementById("TestsDiv");
    //   T.style.display = "block";  // <-- Set it to block

      // toggle css 
      function myFunction() {
      var element = document.body;
      element.classList.toggle("gameStart");
    }
  
    function TestsFunction() {
      document.getElementById("TestsDiv").style.display = "";
  }


  
// toggle css 
    function myFunction() {
      var element = document.body;
      element.classList.toggle("gameStart");
    }

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; 
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ tot);
}
  

function startInterval() {  // everything inside this function that is called with click on button
  downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!"
    }
  }, 1000);
}


  