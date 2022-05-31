document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("loaded page");

    /** Navbar buttons */
    var navCandidates = document.getElementById("navCandidates");
    var navResults = document.getElementById("navResults");
    var navSignIn = document.getElementById("navSignIn");
    var navBarLogo = document.getElementById("navBarLogo");
    var getOTPButton = document.getElementById("getOTPButton");
    //var email = document.getElementById("email");

    var page1 = document.getElementById("page1Link");
    var page2 = document.getElementById("page2Link");
    



    /**Button Listeners*/
    
    /**Pages*/
    //Candidates
    if (navCandidates != null){
      navCandidates.addEventListener("click", function(){
        console.log("You clicked Candidates");
        window.location.href = '/src/view/candidates.html';
 
     });
    } 

    //Sign In
    if (navResults != null){
      navResults.addEventListener("click", function(){
        console.log("You clicked Results");
        window.location.href = '/src/view/results.html';
        //.setAttribute('href', '/src/view/results.html');
  
     });
    }

    //Sign In
    if (navSignIn != null){
      navSignIn.addEventListener("click", function(){
        console.log("You clicked Sign In");
        window.location.href = '/src/view/logIn.html';
        //.setAttribute('href', '/src/view/logIn.html');
 
     });
    }

    //Bar Logo
    if (navBarLogo != null){
      navBarLogo.addEventListener("click", function(){
        console.log("You clicked Home/Logo");
        window.location.href = '/src/view/index.html';
        //.setAttribute('href', '/src/view/index.html');
 
     });
    }

    /**Buttons */

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

      

      
    //Home/Index Form Submit
    var verifyEmail = "false";
    if (getOTPButton != null){
        getOTPButton.addEventListener("click", function(event){
                //alert("Works");
                event.preventDefault();
                var email = document.getElementById("email");
                //kayvia.harriott@mymona.uwi.edu
                //console.log(email.value);
                if (email.value != null || email.value != " " || email.value != ""){
                    //alert("HERE");
                    //naomi.benjamin@mymona.uwi.edu
                    //kayvia.harriott@mymona.uwi.edu
                    //console.log(email.value);
                    var text = "http://localhost:8080/uwivotes/votes?email=" + email.value;
                    //console.log(text);
                   fetch(text, requestOptions)
                    .then((response) => response.json())
                    .then((result) => console.log(result.success) )//document.body.innerHTML += result.success)//.candidates[0].firstName)
                    .catch((error) => console.log("error", error)); 
                    //alert("stop");
                //  window.location.href = '/src/view/logIn.html';

                  if (result.sucess == "true"){
                    window.location.href = '/src/view/logIn.html';
                    verifyEmail = "false";
                  }
                }
                
                
            });

    }
    




    /**Helper Functions */
    function disableLink(linkName){
      //alert("Link off")
      linkName.getElementById(id).style.visibility = "hidden";
      //disable link
    }

    function enableLink(linkName){
      //alert("Link on")
      linkName.getElementById(id).style.visibility = "visible";
      //re-enable link
    }

    

    /**Else */

    /**Verify email address format */



    /**Redirect to OTP page once email verified
     */









/*
    fetch('http://localhost:8080/uwivotes/ballot/vpssp')
                .then(function(response) {
                    return result.candidates
                    

                }).then(function(body) {
                    document.body.innerHTML += body
                })*/

/*
                fetch('/src/view/page1.html')
              .then(function(response) {
                    return response.json()
        }).then(function(body) {
         body
        })   */

        /** //finnnalllll 
    console.log("page loads");
var requestOptions = {
        method: "GET",
        redirect: "follow",
        };
        fetch("http://localhost:8080/uwivotes/ballot/vpssp", requestOptions)
        .then((response) => response.json())
        .then((result) => document.body.innerHTML += result.candidates[0].firstName)
        .catch((error) => console.log("error", error));*/


     /*     fetch('/src/view/page1.html')
        .then(function(response) {
        return response.text()
      }).then(function(body) {
        document.body.innerHTML = body
      })*/


        
   /* if (page1 != null){
        page1.addEventListener("click", function(){
            //page2.setAttribute('href', '');
            

        })
    }*/



  },
  false
);
