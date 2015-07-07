$(document).ready(function() {

//manipulating html text - almost like arrays
//var secondHeader = $("h1")[1];
//$(secondHeader).text("this is going to confuse me");

	//simplified

//$($("h1")[2]).text("this is weird");
});

//hiding and showing the text when clicking on button

$(".button").click(function(){
    $(".first").toggle(1000);


  



});

//creating an alert box

function myFunction() {
    alert("You naughty person!");
}

function myFunction2() {
    var person = prompt("Please enter your name", "");
    
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}