//(Lecture 1)
//Changing text using javascript dom
//document.querySelector("h1").innerHTML = "Hi jQuery";

//using jQuery
//$("h1").text("Hello jQuery");

//(Lecture2)
//html selector
// $("#p1, h1").text("i have change it using jQuery");
// $(".my-div h1").text("this is a change i created");

//for text namipulation we will work with different method

//text()-method
//$("#p1").text("This is the text() Method");

//html()- method
// $("p").html("<b> HI there this is bold html</b>");

//append()- method
// $("p").append(" good bYe");

//prepend()-method
// $("p").prepend("good bYe ");

//before()- method

var myPera1 = $("<p></p>").text("this is a peragraph i created using jQuery");
var myPera2 = $("<p></p>").text(
  "this is a peragraph after i created using jQuery"
);

$("p").before(myPera1);
$("p").after(myPera2);
