var solved = false;

function insert(num){
  if(solved == true){
    document.output.textView.value = "";
    solved = false;
  }
   document.output.textView.value = document.output.textView.value + num;
}

function clean(){
   document.output.textView.value = "0";
   var inputText = document.getElementById("input");
   inputText.innerHTML = "Your input";
   solved = true;
}

function equals(equation){
  var func = document.output.textView.value;
  var inputText = document.getElementById("input");
  var result = eval(func);

  document.output.textView.value = result;
  inputText.innerHTML = func + " =";
  solved = true;
}
