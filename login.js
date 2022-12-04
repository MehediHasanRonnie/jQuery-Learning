//finding log in button with jQuery

$("#loginButton").click(() => {
  var password1 = $("#pass1").val();
  var password2 = $("#pass2").val();

  if (password1 != "" && password2 != "") {
    if (password1 == password2) {
      alert("successfully Login");
    } else {
      alert("password mismatched");
    }
  } else {
    alert("Please inter the password");
  }
});
