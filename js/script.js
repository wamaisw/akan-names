var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var day;
function dateOfWeek() {
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var CC = parseInt(dateOfBirth.substring(0,2));
  var YY = parseInt(dateOfBirth.substring(2,4));
  var MM = parseInt(dateOfBirth.substring(5,7));
  var DD = parseInt(dateOfBirth.substring(8,10));

d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (5 + 1) / 10)) + 9) % 7;

function validate() {
    ("datepicker").datepicker({maxDate: today});
  }
day = Math.floor(d)-1;

  daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var option = document.getElementsByName('name').value;
  var femaleGender = document.getElementById("femaleGender").value;


  if (option == "output1") {
    document.getElementById("akanOutput").innerHTML = "You were born on " + dayOfTheWeek[day] + " your Akan name is " + akanMales[day];
    console.log(dayOfTheWeek[day]);
    console.log(akanMales[day]);
  }
  else {
    document.getElementById("akanOutput").innerHTML = "You were born on " + dayOfTheWeek[day] + " your Akan name is " + akanFemales[day];
    console.log(dayOfTheWeek[day]);
    console.log(akanFemales[day]);
  }