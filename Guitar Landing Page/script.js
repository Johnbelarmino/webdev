function searchChord(chord){
  var firstHalf = "https://www.google.com/search?q=guitar+chord+";
  var theChord = document.getElementById("searchBox").value;
  var secondHalf = "&source=lnms&tbm=isch";
  var link = firstHalf+theChord+secondHalf;

  var result = document.getElementById("theResult");
  result.innerHTML = "Showing results for the '" + theChord + "' chord";
  window.open(link);
}