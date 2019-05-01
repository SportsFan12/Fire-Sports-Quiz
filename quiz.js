//number of questions user get's right
var correctAnswers = 0;
//nba questions array
var nbaQuestions = [
  {
    "question": "Who won 2011 NBA Finals?",
    "a": "Miami Heat",
    "b": "Los Angeles Lakers",
    "c": "Boston Celtics",
    "d": "Dallas Mavericks",
    "answer": "d"
  },
  {
    "question": "Who was the NBA Rookie of the year for the 2015/2016 season?",
    "a": "Karl Anthony Towns",
    "b": "Devin Booker",
    "c": "Myles Turner",
    "d": "Kristaps Porzingis",
    "answer": "a"
  },
  {
    "question": "Who was the NBA Defensive player of the year for the 2003/2004 season?",
    "a": "Ben Wallace",
    "b": "Ron Artest",
    "c": "Kevin Garnett",
    "d": "Dikembe Mutombo",
    "answer": "b"
  },
  {
    "question": "Who won the NBA MVP for the 2000/2001 season?",
    "a": "Allen Iverson",
    "b": "Kobe Bryant",
    "c": "Tim Duncan",
    "d": "Shaquille O'Neal",
    "answer": "a"
  },
  {
    "question": "Who won the 2005 NBA Finals?",
    "a": "Detroit Pistons",
    "b": "Miami Heat",
    "c": "San Antonio Spurs",
    "d": "Phoenix Suns",
    "answer": "c"
  },
  {
    "question": "Who is the NBA all time leading scorer?",
    "a": "Lebron James",
    "b": "Kobe Bryant",
    "c": "Michael Jordan",
    "d": "Kareem Abdul Jabbar",
    "answer": "d"
  },
  {
    "question": "Who is the NBA all time leading assist man?",
    "a": "John Stockton",
    "b": "Magic Johnson",
    "c": "Steve Nash",
    "d": "Jason Kidd",
    "answer": "a"
  },
  {
    "question": "Who was the Finals MVP for the 2009 NBA Finals",
    "a": "Dwight Howard",
    "b": "Kobe Bryant",
    "c": "Paul Pierce",
    "d": "Lebron James",
    "answer": "b"
  },
  {
    "question": "Who won the NBA MVP for the 2006/2007 season?",
    "a": "Kobe Bryant",
    "b": "Lebron James",
    "c": "Steve Nash",
    "d": "Dirk Nowitzki",
    "answer": "d"
  },
  {
    "question": "Who was the NBA Rookie of the year for the 2003/2004 season?",
    "a": "Chris Bosh",
    "b": "Carmelo Anthony",
    "c": "Lebron James",
    "d": "Amar'e Stoudimire",
    "answer": "c"
  }
]

//soccer questions array
var soccerQuestions = [
  {
    "question": "Who won the Ballon D'or in 2007?",
    "a": "Kaka",
    "b": "Lionel Messi",
    "c": "Cristiano Ronaldo",
    "d": "Thierry Henry",
    "answer": "a"
  },
  {
    "question": "Who the 2002 FIFA World Cup?",
    "a": "Spain",
    "b": "Germany",
    "c": "France",
    "d": "Brazil",
    "answer": "d"
  },
  {
    "question": "Who won the Champions League in the 2011/2012 season?",
    "a": "Chelsea",
    "b": "Bayern Munich",
    "c": "Barcelona",
    "d": "Inter Milan",
    "answer": "a"
  },
  {
    "question": "Who won the English Premier League in the 2009/2010 season?",
    "a": "Manchester United",
    "b": "Manchester City",
    "c": "Chelsea",
    "d": "Liverpool",
    "answer": "c"
  },
  {
    "question": "Who won the Spanish La Liga in the 2003/2004 season?",
    "a": "Atletico Madrid",
    "b": "Real Madrid",
    "c": "Barcelona",
    "d": "Valencia",
    "answer": "d"
  },
  {
    "question": "Who won the Italian Seria A in the 2008/2009 season?",
    "a": "AC Milan",
    "b": "Inter Milan",
    "c": "Juventus",
    "d": "Roma",
    "answer": "b"
  },
  {
    "question": "Who won the Germany Bundesliga in the 2006/2007 season?",
    "a": "VfB Stuttgart",
    "b": "VfL Wolfsburg",
    "c": "Borussia Dortmund",
    "d": "Bayern Munich",
    "answer": "a"
  },
  {
    "question": "Who won the France Ligue 1 in the 2012/2013 season?",
    "a": "Paris Saint-Germain",
    "b": "AS Monaco",
    "c": "Lyon",
    "d": "Marseille",
    "answer": "a"
  },
  {
    "question": "Who won the Ballon D'or in 2004?",
    "a": "Ronaldo",
    "b": "Zinedine Zidane",
    "c": "Andriy Shevchenko",
    "d": "Ronaldinho",
    "answer": "c"
  },
  {
    "question": "Who won the Champions League in the 2004/2005 season?",
    "a": "AC Milan",
    "b": "Liverpool",
    "c": "Barcelona",
    "d": "Manchester United",
    "answer": "b"
  },
]

//american football questions array
var nflQuestions = [
  {
    "question": "Who won the NFL MVP for the 2011 season?",
    "a": "Tom Brady",
    "b": "Adrian Peterson",
    "c": "Aaron Rodgers",
    "d": "Drew Brees",
    "answer": "c"
  },
  {
    "question": "Who won the NFL Defensive player of the year for the 2007 season?",
    "a": "Bob Sanders",
    "b": "Troy Polamalu",
    "c": "Ray Lewis",
    "d": "Charles Woodson",
    "answer": "a"
  },
  {
    "question": "Who won the NFL Rookie of the year for the 2014 season?",
    "a": "Teddy Bridgewater",
    "b": "Odell Beckham",
    "c": "Khalil Mack",
    "d": "Aaron Donald",
    "answer": "a"
  },
  {
    "question": "Who won Superbowl 42?",
    "a": "New England Patriots",
    "b": "Pittsburgh Steelers",
    "c": "Indianapolis Colts",
    "d": "New York Giants",
    "answer": "d"
  },
  {
    "question": "Who was the Superbowl MVP for Superbowl 47?",
    "a": "Ed Reed",
    "b": "Joe Flacco",
    "c": "Colin Kaepernick",
    "d": "Eli Manning",
    "answer": "b"
  },
  {
    "question": "Who won the NFL MVP for the 2006 season?",
    "a": "Shaun Alexander",
    "b": "LaDanian Tomlinson",
    "c": "Tom Brady",
    "d": "Peyton Manning",
    "answer": "b"
  },
  {
    "question": "Who won the NFL Defensive player of the year for the 2015 season?",
    "a": "JJ Watt",
    "b": "Luke Kuechly",
    "c": "Khalil Mack",
    "d": "Terrell Suggs",
    "answer": "a"
  },
  {
    "question": "Who won the NFL Rookie of the year for the 2004 season?",
    "a": "Philip Rivers",
    "b": "Larry Fitzgerald",
    "c": "Eli Manning",
    "d": "Ben Roethlisberger",
    "answer": "d"
  },
  {
    "question": "Who won Superbowl 36?",
    "a": "Baltimore Ravens",
    "b": "St. Louis Rams",
    "c": "New England Patriots",
    "d": "Tampa Bay Buccaneers",
    "answer": "c"
  },
  {
    "question": "Who was the Superbowl MVP for Superbowl 41?",
    "a": "Brian Urlacher",
    "b": "Peyton Manning",
    "c": "Hines Ward",
    "d": "Reggie Wayne",
    "answer": "b"
  },
]

//function that renders the NBA quiz
function nbaQuiz () {
  //loop that creates all NBA questions
  for (let i = 0; i < nbaQuestions.length; i++) {
    $("#mainFrame").append("<h1 id='q" + i + "'>" + nbaQuestions[i].question + "</h1>");
    $("#mainFrame").append("<button id='a" + i + "'>" + nbaQuestions[i].a + "</button>");
    $("#mainFrame").append("<button id='b" + i + "'>" + nbaQuestions[i].b + "</button>");
    $("#mainFrame").append("<button id='c" + i + "'>" + nbaQuestions[i].c + "</button>");
    $("#mainFrame").append("<button id='d" + i + "'>" + nbaQuestions[i].d + "</button>");
  }

  //loop that creates the click functions for all elements
  for (let i = 0; i < nbaQuestions.length; i++) {
    $("#a" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("a" === nbaQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });

    $("#b" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("b" === nbaQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });

    $("#c" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("c" === nbaQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });

    $("#d" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("d" === nbaQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });
  }

  //creates finish button
  $("#mainFrame").append("<button id='finishButton'>Finish Quiz</button>");
  $("#finishButton").click(function () {
    var goodOutput = "You got " + correctAnswers + " out of " + nbaQuestions.length + " questions right.  Well done :)";
    var badOutput = "You got " + correctAnswers + " out of " + nbaQuestions.length + " questions right.  Better Luck next time :(";
    //if user did well in the quiz
    if(correctAnswers > 5) {
      alert(goodOutput);
    }
    //if user did bad in the quiz
    else {
      alert(badOutput);
    }
    //reloads page
    location.reload();
  });
}

//function that renders the Soccer quiz
function soccerQuiz () {
  //loop that creates all NBA questions
  for (let i = 0; i < soccerQuestions.length; i++) {
    $("#mainFrame").append("<h1 id='q" + i + "'>" + soccerQuestions[i].question + "</h1>");
    $("#mainFrame").append("<button id='a" + i + "'>" + soccerQuestions[i].a + "</button>");
    $("#mainFrame").append("<button id='b" + i + "'>" + soccerQuestions[i].b + "</button>");
    $("#mainFrame").append("<button id='c" + i + "'>" + soccerQuestions[i].c + "</button>");
    $("#mainFrame").append("<button id='d" + i + "'>" + soccerQuestions[i].d + "</button>");
  }

  //loop that creates the click functions for all elements
  for (let i = 0; i < soccerQuestions.length; i++) {
    $("#a" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("a" === soccerQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });

    $("#b" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("b" === soccerQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });

    $("#c" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("c" === soccerQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });

    $("#d" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("d" === soccerQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });
  }

  //creates finish button
  $("#mainFrame").append("<button id='finishButton'>Finish Quiz</button>");
  $("#finishButton").click(function () {
    var goodOutput = "You got " + correctAnswers + " out of " + soccerQuestions.length + " questions right.  Well done :)";
    var badOutput = "You got " + correctAnswers + " out of " + soccerQuestions.length + " questions right.  Better Luck next time :(";
    //if user did well in the quiz
    if(correctAnswers > 5) {
      alert(goodOutput);
    }
    //if user did bad in the quiz
    else {
      alert(badOutput);
    }
    //reloads page
    location.reload();
  });
}

//function that renders the Soccer quiz
function nflQuiz () {
  //loop that creates all NBA questions
  for (let i = 0; i < nflQuestions.length; i++) {
    $("#mainFrame").append("<h1 id='q" + i + "'>" + nflQuestions[i].question + "</h1>");
    $("#mainFrame").append("<button id='a" + i + "'>" + nflQuestions[i].a + "</button>");
    $("#mainFrame").append("<button id='b" + i + "'>" + nflQuestions[i].b + "</button>");
    $("#mainFrame").append("<button id='c" + i + "'>" + nflQuestions[i].c + "</button>");
    $("#mainFrame").append("<button id='d" + i + "'>" + nflQuestions[i].d + "</button>");
  }

  //loop that creates the click functions for all elements
  for (let i = 0; i < nflQuestions.length; i++) {
    $("#a" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("a" === nflQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });

    $("#b" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("b" === nflQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });

    $("#c" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("c" === nflQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });

    $("#d" + i).click(function() {
      //increment correctAnswers if user has chosen right answer
      if ("d" === nflQuestions[i].answer) {
        correctAnswers++;
      }
      //removes html elements of particular question
      $("#q" + i).remove();
      $("#a" + i).remove();
      $("#b" + i).remove();
      $("#c" + i).remove();
      $("#d" + i).remove();
    });
  }

  //creates finish button
  $("#mainFrame").append("<button id='finishButton'>Finish Quiz</button>");
  $("#finishButton").click(function () {
    var goodOutput = "You got " + correctAnswers + " out of " + nflQuestions.length + " questions right.  Well done :)";
    var badOutput = "You got " + correctAnswers + " out of " + nflQuestions.length + " questions right.  Better Luck next time :(";
    //if user did well in the quiz
    if(correctAnswers > 5) {
      alert(goodOutput);
    }
    //if user did bad in the quiz
    else {
      alert(badOutput);
    }
    //reloads page
    location.reload();
  });
}

//main function that builds quiz
function buildQuiz () {
  //creates menu
  $("#mainFrame").html("<h1>Which quiz would you like to take?</h1>");
  $("#mainFrame").append("<button id='basketball'>Basketball</button>");
  $("#mainFrame").append("<button id='soccer'>Soccer</button>");
  $("#mainFrame").append("<button id='americanFootball'>American Football</button>");
  $("#mainFrame").append("<h2>Made by Marion Veloria</h2>");


  //basketball button
  $( "#basketball" ).click(function () {
    $("#mainFrame").empty();
    nbaQuiz();
  });

  //soccer button
  $( "#soccer" ).click(function () {
    $("#mainFrame").empty();
    soccerQuiz();
  });

  //american football button
  $( "#americanFootball" ).click(function () {
    $("#mainFrame").empty();
    nflQuiz();
  });
}

//mainLoop
buildQuiz();
