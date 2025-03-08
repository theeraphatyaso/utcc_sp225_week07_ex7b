// ADD REGULAR EXPRESSION FUNCTION TO VALIDATE NUMBER ONLY IN STRING ATTRIBUTE
function isNumeric(value) {
	/*
		/^ 			is start position of String
		?			is optional case
		/d			is integer
		+			is the variable type can have more than one char ex: \d+ means can have number more that one number in String
		$/			is end of the String (in C will be '\0')
		.test(value)	is get the Regular expression test with the value in its parameter
		ธีรภััทร์ ยะโส 2310511101047 
	*/

    return /^\d+$/.test(value);
}

function checkSID() {
  let sid = (document.getElementById("sid").value).trim();

  if (sid.length == 10 && isNumeric(sid)) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi < 1) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}