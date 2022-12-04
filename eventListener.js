//using event listener clicking the button that print "you have click the button"

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("h1").innerHTML = "You have clicked the button";
});

//doing same work with jQuery

$("button").mouseout(() => {
  $("h1").text("you just click the button of jQuery");
});

//jQuery toggole for text change with css

$("button").click(() => {
  $("h1").toggleClass("style1");
});

//adding event listener with multiple button

// var totalButtons = document.querySelectorAll(".myButton").length;
for (i = 0; i < totalButtons; i++) {
  document
    .querySelectorAll(".myButton")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      document.querySelector("h1").innerHTML = text + " is clicked";
    });
}

// doing same work with jQuery
$(".myButton").click(() => {
  var value = this.innerHTML;
  $("h1").text(value + " is clicked");
});

// .on() event listener
$(".myButton").on("mouseover", () => {
  var value = this.innerTEXT;
  $("h1").text(value + " is clicked");
});
