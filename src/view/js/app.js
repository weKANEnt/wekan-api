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
    var otpSignUp = document.getElementById("otpTextbox");
    var submitOTPButton = document.getElementById("submitOTP");
    var errorMessage = document.getElementById("errorMessage");
    var errorMessageAdmin = document.getElementById("errorMessageAdmin");
    var logInButton = document.getElementById("logInButton"); //for admin
    var password = document.getElementById("password"); //for admin
    
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

    var requestOptions2 = {
      method: "PATCH",
      redirect: "follow",
    };
 
      

      
    //Home/Index Form Submit
    /**Redirect to logIn page upon sucessful email verification */
    var verifyEmail = "false"; //i should make this boolean
    var verifyOTP = "false";
    var email = document.getElementById("email");
    if (getOTPButton != null){    
        getOTPButton.addEventListener("click", function(event){
                event.preventDefault();
                if (email.value != null || email.value != " " || email.value != ""){
                    //naomi.benjamin@mymona.uwi.edu
                    //kayvia.harriott@mymona.uwi.edu
                   fetch("http://localhost:8080/uwivotes/votes?email=" + email.value, requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        verifyEmail = result.success;
                        email = document.getElementById("email").value;
                        if (verifyEmail == true){  
                           //console.log("The email was verified");
                           
                            fetch('http://localhost:8080/uwivotes/votes/OTP',{
                            method: 'PATCH',
                            body: JSON.stringify({
                              "email": email.value,
                            }),
                            headers: {
                              'Content-type': 'application/json; charset=UTF-8',
                              },
                            })
                            .then((response) => {response.json()
                              verifyEmail = "false";
                              window.location.href = '/src/view/logIn.html';
                            })
                            .then((json) => console.log(json));
                          
                        } 
                        else {
                          errorMessage.innerHTML = "*Please ensure a valid UWI email is entered.";
                        }
                    }
                        )
                    .catch((error) => console.log("error", error)); 

                    
                  }
                
                console.log(verifyEmail);
            });
    }

    /**Redirect to ____ page upon sucessful otp verification */
    if (submitOTPButton != null){
        submitOTPButton.addEventListener("click", function(event){
            event.preventDefault();
            //should add more criterio for otp not being empty
            if (otpSignUp.value.length != 0){ 
                  //to do: email not saving from previous page
                  fetch("http://localhost:8080/uwivotes/votes/OTP?otp=" + otpSignUp.value + "&email=" + "kayvia.harriott@mymona.uwi.edu", requestOptions)
                  .then((response) => response.json())
                  .then((result) => {
                        //alert(otpSignUp.value);
                        verifyOTP = result.success;
                        console.log(otpSignUp.value)
                        if (verifyOTP == true){
                            console.log("OTP verified");
                            //redirect to place vote
                            verifyOTP = "false";
                        }
                        else{
                            console.log("OTP didn't work");
                        }
                  }
                      )
                  .catch((error) => console.log("error", error)); 

            }
            else{
              errorMessage.innerHTML = "*Please ensure an OTP is entered.";
            }
        });
    }



    /**Redirect to admin side upon succesfull admin verification */
    if (email && password != null){
        logInButton.addEventListener("click", function(event){
            event.preventDefault();
            //console.log("Admin Email:" + email.value);
            //console.log("Admin Password:" + password.value);
            //console.log("\'" + email.value + "\'");
            //console.log("\'" + email.value.length + "\'");
            if (email.value != null && email.value != " " && email.value != "" && email.value.length != 0
                && password.value != null && password.value != " " && password.value != "" && password.value.length != 0){
              //console.log("\'" + email.value + "\'");
              //console.log("Admin Email:" + email.value);
              //console.log("Admin Password:" + password.value);



            }
            else{
              errorMessageAdmin.innerHTML = "*Please ensure an email and password is entered.";
            }



           /* if(email.value != null || email.value != " " || email.value != "" || email.value.length != 0){
              errorMessageAdmin.innerHTML ="bloop";
            }
            else{
              errorMessageAdmin.innerHTML = "*Please ensure an email and password is entered.";
            }*/
            /*
            if (otpSignUp.value.length != 0){
              //email not saving from previous page
              fetch("http://localhost:8080/uwivotes/votes/OTP?otp=" + otpSignUp.value + "&email=" + "kayvia.harriott@mymona.uwi.edu", requestOptions)
              .then((response) => response.json())
              .then((result) => {
                    //alert(otpSignUp.value);
                    verifyOTP = result.success;
                    console.log(otpSignUp.value)
                    if (verifyOTP == true){
                        console.log("OTP verified");
                        //redirect to place vote
                        verifyOTP = "false";
                    }
                    else{
                        console.log("OTP didn't work");
                    }
              }
                  )
              .catch((error) => console.log("error", error)); 

            }
            else{
              errorMessageAdmin.innerHTML = "*Please ensure an OTP is entered.";
            }*/



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
