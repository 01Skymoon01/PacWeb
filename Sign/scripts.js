/*_________Tab for the test_____________*/

var tabUsers = [
	{username: "erij",
	 pwd: "123",
	 mail: "erij@hotmail.com"
	},

	{username: "nour",
	 pwd: "456",
	 mail: "nour@hotmail.com"
	},

	{username: "zeineb",
	 pwd: "789",
	 mail: "zeineb@hotmail.com"
	}
]
/*______________________________________*/

function CheckSignIn() {
var username = document.getElementById("user").value;
var pwd = document.getElementById("pass").value;


for (i = 0; i < tabUsers.length; i++) {
	if ( username== tabUsers[i].username && pwd== tabUsers[i].pwd ) {
		alert('You just signed in') ;
		window.location="file:///C:/Users/mia/Desktop/shopWithLogin/index.html";
		return;
		}
	}

	if ( username.length== 0 || pwd.length== 0) {
			alert("Please type your login and password!");
			return;
		}
		
	else {
		alert("Check your login or password");
		return;
	}
}	




function CheckSignUp() {

	var newUsername = document.getElementById("newUser").value;
	var newPassword = document.getElementById("newPass").value;
	var otherNewPassword = document.getElementById("OtheNewPass").value;
	var admail = document.getElementById("mail").value;
	/*var newUserRegister = {
		username: newUsername,
		pwd: newPassword,
		pwdd: otherNewPassword,
		mail: admail
	}*/

for (i = 0; i < tabUsers.length; i++) {
	if (admail==tabUsers[i].mail) {
		alert("already registered with this email");
		return;
	}

	if (newUsername==tabUsers[i].username) {
		alert("User exists already!");
		return;
	}
}
	if (newUsername.length== 0 || newPassword.length== 0 || otherNewPassword== 0 || admail.length== 0)
	{
		alert("Please type the required informations.");
		return;
	}
	
	if (otherNewPassword != newPassword ) {
		alert("password don't match!");
		return;
		
	}
	
	if (newPassword.length < 8)
	{
		alert("password too short, please enter > 8 caracters.");
		return;
		
	}

	else {
		alert("Welcome" + " " + newUsername);
		window.location="file:///C:/Users/mia/Desktop/shopWithLogin/index.html";
		return;
	}
}

