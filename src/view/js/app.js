document.addEventListener(
  "DOMContentLoaded",
  function () {
    /** Navbar buttons */
    const navCandidates = document.getElementById("navCandidates");
    const navResults = document.getElementById("navResults");
    const navSignIn = document.getElementById("navSignIn");
    const navBarLogo = document.getElementById("navBarLogo");

    navCandidates.addEventListener("click", function () {
      alert("You clicked Candidates");
    });

    navResults.addEventListener("click", function () {
      alert("You clicked Results");
    });

    navSignIn.addEventListener("click", function () {
      alert("You clicked SignIn");
      window.location.href = "logIn.html";
    });

    navBarLogo.addEventListener("click", function () {
      alert("You clicked UWIVotes logo");
    });

    /** Home Page Buttons */

    /** LogIn Page Buttons */

    /** Vote Intro Page */

    /** Body buttons */

    /*
    board = document.querySelector("#board"); 
    square = board.querySelectorAll("div"); 
    square.forEach(element => element.setAttribute("class","square")); 

 
    var squares = document.getElementsByClassName("square");
    var prevSquare = null;
    var winner = "none";

    var squareAttribute = "";

    for (var i=0; i<square.length;i++){  

        square[i].addEventListener("mouseover", addHover, false);
        square[i].addEventListener("mouseout", removeHover, false);
        let prevAttribute = "";
        function addHover(){ 
            squareAttribute = this.getAttribute("class");
            newAttribute = squareAttribute + " hover square";
            this.setAttribute("class",newAttribute);
        }

        function removeHover(){  
            squareAttribute = this.getAttribute("class");
            var newClass = squareAttribute.replace(/hover/g,'');
            this.setAttribute("class",newClass);
        }  

            square[i].onclick = function(target){                
                if (this.innerHTML=="" && prevSquare!="X" ){
                    this.innerHTML = "X";
                    prevSquare="X";
                    this.setAttribute("class", "square X");
                    if (winner == "none"){
                        checkWinner(); 
                    }
                    
                }
                if (this.innerHTML=="" && prevSquare!="O"){
                    this.innerHTML = "O";
                    prevSquare="O";
                    this.setAttribute("class", "square O");
                    counter = i;
                    if (winner == "none"){
                       checkWinner(); 
                    }                    
                }               
                
            }            
    }

 
    let statusChange = document.getElementById("status");
    
    function checkWinner(){         
        //top row winner       
        if((square[0].innerHTML=="X" && square[1].innerHTML=="X" && square[2].innerHTML=="X") || (square[0].innerHTML=="O" && square[1].innerHTML=="O" && square[2].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[0].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";
        }  
        //middle row winner
        else if((square[3].innerHTML=="X" && square[4].innerHTML=="X" && square[5].innerHTML=="X") || (square[3].innerHTML=="O" && square[4].innerHTML=="O" && square[5].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[3].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";

        } 
        //bottom row winner 
        else if((square[6].innerHTML=="X" && square[7].innerHTML=="X" && square[8].innerHTML=="X") || (square[6].innerHTML=="O" && square[7].innerHTML=="O" && square[8].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[6].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";

        }
        //left most column winner
        else if((square[0].innerHTML=="X" && square[3].innerHTML=="X" && square[6].innerHTML=="X") || (square[0].innerHTML=="O" && square[3].innerHTML=="O" && square[6].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[0].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";

        }
        //middle column winner
        else if((square[1].innerHTML=="X" && square[4].innerHTML=="X" && square[7].innerHTML=="X") || (square[1].innerHTML=="O" && square[4].innerHTML=="O" && square[7].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[1].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";

        }
        //right most column winner
        else if((square[2].innerHTML=="X" && square[5].innerHTML=="X" && square[8].innerHTML=="X") || (square[2].innerHTML=="O" && square[5].innerHTML=="O" && square[8].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[2].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";
        }
        //verticle left to right
        else if((square[0].innerHTML=="X" && square[4].innerHTML=="X" && square[8].innerHTML=="X") || (square[0].innerHTML=="O" && square[4].innerHTML=="O" && square[8].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[0].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";
        }
        //verticle right to left
        else if((square[2].innerHTML=="X" && square[4].innerHTML=="X" && square[6].innerHTML=="X") || (square[2].innerHTML=="O" && square[4].innerHTML=="O" && square[6].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[2].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";
        }

        else if (winner!="found" && square[0].innerHTML!="" && square[1].innerHTML!="" && square[2].innerHTML!="" && square[3].innerHTML!="" && square[4].innerHTML!="" && square[5].innerHTML!="" && square[6].innerHTML!=""&& square[7].innerHTML!="" && square[8].innerHTML!="") {
            statusChange.innerHTML="It's a draw! Play a new game!";
        }
        
    }

    const newGame = document.querySelector('.btn');
    const loadGame = () => {location.reload();}
    newGame.addEventListener('click', loadGame) */
  },
  false
);
