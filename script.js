function signup(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

auth.createUserWithEmailAndPassword(email,password)

.then(function(){

alert("Account Created Successfully");

window.location="../pages/login.html";

})

.catch(function(error){

alert(error.message);

});

}


function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)

.then(function(){

alert("Login Successful");

window.location="../pages/index.html";

})

.catch(function(error){

alert(error.message);

});

}


function logout(){

auth.signOut().then(function(){

window.location="../pages/login.html";

});

}
