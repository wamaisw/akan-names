
function dateOfWeek() {
  
  var Y = parseInt(document.getElementById("year").value);
  var M = parseInt(document.getElementById("month").value)
  var D = parseInt(document.getElementById("day").value);
  var gender = document.getElementsByName("gender");

  for(y=0;y<gender.length;y++){
    if(gender[y].checked){
      var gender1 = gender[y].value;
    }
  }
  alert(gender1);
 
  if(M<1||M>12||Y<1500||Y>2700||D<1||D>31){
    alert("Not a valid date")
  }
  
  var C = Y.toString();
  var CC = C[0].concat(C[1]);
  var YY = C[2].concat(C[3]);
  var CC = parseInt(CC);
  var YY = parseInt(YY);

  var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


  var wd = Math.trunc(((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * M + 1) / 10)) + D) % 7);
  

  for(x=0;x<7;x++){
    if(x===wd && gender1==="male"){
      var akan = akanMaleNames[x];
    }
    else if(x===wd && gender1==="female"){
      var akan = akanFemaleNames[x];
    }
  }
  alert(akan);
  alert(wd);

}

