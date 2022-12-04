// hiding div by clicking button

//$("#btn").click(() => {
//   alert("button is clicked"); //checking if button is working
//   $("#div1").hide(1000); //hiding button
//   $("#div1").show(); //display showing
//   $("#div1").hide(1000).show(2000); //hide and show together
//   $("#div1").toggle(2000); // toggle worked the same as hide().show()
//   $("#div1").fadeOut(2000).fadeIn(2000); //fadeIn().fadeOut() for fading the div
//   $("#div1").fadeToggle(2000); //same work as fade in fade out
//   $("#div1").fadeTo(2000, 0.3);
//   $("#div1").slideUp(2000).slideDown(2000); //sliding up and down
//   $("#div1").slideToggle(2000);

//});

$("#btn").click(() => {
  $("#div1").animate({ opacity: "0.5", height: "500px", width: "950px" }, 2000);
});
