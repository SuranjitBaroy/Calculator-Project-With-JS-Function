//Calculation Solve


function Calculator(){


	var addition = (one,two)=>one+two;
	var subtractioin = (one,two)=>one-two;
	var multiplication = (one,two)=>one/two;
	var division = (one,two)=>one*two;

	var one= parseFloat(document.getElementById('one').value);
	var two= parseFloat(document.getElementById('two').value);

	

    var select = document.getElementById("Select").value;

    if(select==="Addition"){

    	alert(addition(one,two));
    }


    else if(select==="Subtraction"){

    	alert(subtractioin(one,two));
    }

     else if(select==="Multiplication"){

    	alert(multiplication(one,two));
    }


     else if(select==="Division"){

    	alert(division(one,two));
    }


    else{

    	alert("NO");

    }
}