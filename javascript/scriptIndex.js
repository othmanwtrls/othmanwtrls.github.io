function calculateAge() {
    var ageResult = document.getElementById("ageResult");
    
    var today = new Date();
    var birthDateObj = new Date("1996-05-31");
    var age = today.getFullYear() - birthDateObj.getFullYear();
    var monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    console.log(birthDateObj);
    ageResult.innerHTML = age;
  }