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


  var answers = ["A","C","C","B","B","C","B","D","D","A"], 
    tot = answers.length;

var startButton = document.getElementById("button")
startButton.addEventListener("click", function(){
  TestsFunction()
  startTimer()
})
    function TestsFunction() {
      document.getElementById("TestsDiv").style.display = "";
  }
  

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function returnScore(){
  var score = 0;
  for (var i=0; i<tot; i++) {
    if (getCheckedValue("question"+i)===answers[i]) score += 1; 
  } 
  alert("Your score is "+ score +"/"+ tot);
 saveStorage(score)
}

  function startTimer() {


// count down
var count = 100;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    returnScore()
  }
}, 1000);
}
function saveStorage(data) {
var currentData = JSON.parse(localStorage.getItem("High-Scores!")) || []
currentData.push(data)
localStorage.setItem("High-Scores!", JSON.stringify(currentData))
}
function showScore() {
  alert("returnScore()")
}