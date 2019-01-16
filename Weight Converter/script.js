window.onload = convertWeight;

var input = document.getElementById("lbsInput");

var kg_div = document.getElementById("kg");
var ounces_div = document.getElementById("ounces");
var grams_div = document.getElementById("grams");

var oz_p = document.getElementById("ouncesLabel");
var kg_p = document.getElementById("kgLabel");
var grams_p = document.getElementById("gramsLabel");

var choice_selector = document.getElementById("selector");

var kgOut_div = document.getElementById("kgOutput");
var ozOut_div = document.getElementById("ouncesOutput");
var gramsOut_div = document.getElementById("gramsOutput")

function convertWeight(){
	// Initially hide the elements 
	hideElements(kg_div, ounces_div, grams_div);
	input.addEventListener("input", function(e){
		// Target = the element that triggered the event (input textbox)
		var pounds = e.target.value;

		switch(choice_selector.value){
			case "kg":
				kg_p.innerHTML = "Pounds";
				break;
			case "grams":
				grams_p.innerHTML = "Pounds";
				break;
			case "ounces":
				oz_p.innerHTML = "Pounds";
				break;
			break;
		}
		
		if(pounds == ""){
			hideElements(kg_div, ounces_div, grams_div);
		} else {
			showElements(kg_div, ounces_div, grams_div);

			kgOut_div.innerHTML = convert(.453592, pounds) + " kg";
			ozOut_div.innerHTML = convert(16,pounds) + " oz";
			gramsOut_div.innerHTML = convert(453.592,pounds) + " grams";
		}
		
	});
}

function convert(weight, user_pounds){
	let answer = weight/user_pounds;
	return answer
}

function hideElements(elem1, elem2, elem3){
	elem1.style.visibility = "hidden";
	elem2.style.visibility = "hidden";
	elem3.style.visibility = "hidden";
}

function showElements(elem1, elem2, elem3){
	elem1.style.visibility = "visible";
	elem2.style.visibility = "visible";
	elem3.style.visibility = "visible";
}
