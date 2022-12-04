//inserting value from keyboard
let insertNumber = (number) => {
  let existingNumber = $("#result").val();
  $("#result").val(existingNumber + number);
};

//clearing data using C
const clearResult = () => $("#result").val("");

//calculation using eval function
let calculate = () => {
  var result = eval($("#result").val());
  $("#result").val(result);
};

//DEL field creation
var resultField = $("#result");
let deleteNumber = () => {
  var presentValue = resultField.val();
  if (presentValue != "") {
    resultField.val(presentValue.slice(0, -1));
  }
};
