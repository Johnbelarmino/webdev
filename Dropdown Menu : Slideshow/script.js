var imagesArray = [];
var timeInterval = 10000; // The time interval for each change
var i;
var currentImg = 0; // Starting point of the slideshow

// Set the images
imagesArray[0] = "slideshow/img1.jpg"
imagesArray[1] = "slideshow/img2.png"
imagesArray[2] = "slideshow/img3.jpg"
imagesArray[3] = "slideshow/img4.jpg"
imagesArray[4] = "slideshow/img5.jpg"


// Create the function that will change the image
function slideshow(){
	var Imgindicators = document.getElementsByClassName("dots");
	if(currentImg <= imagesArray.length-1){
		document.images.src = imagesArray[currentImg];
		currentImg++; // Move onto the next image index 
	} else { // Else reset to the first image 
		currentImg=0 ;
	}
	
	for (i = 0; i < Imgindicators.length; i++) {
    	Imgindicators[i].className = Imgindicators[i].className.replace(" active", "");
  	}
  	if(currentImg == 0){
  		Imgindicators[currentImg].className += " active";
  	} else {
  		Imgindicators[currentImg-1].className += " active";
  	}
	setTimeout(slideshow, timeInterval);
	//storyboard.innerHTML = currentImg;
}

// Start the slideshow
window.onload = slideshow;

// Next and Previous buttons to change the picture
function previous(){
	var Imgindicators = document.getElementsByClassName("dots");

	for (i = 0; i < Imgindicators.length; i++) {
    	Imgindicators[i].className = Imgindicators[i].className.replace(" active", "");
  	}

	if(currentImg == 0){
		currentImg = 4;
		document.images.src = imagesArray[currentImg];
		Imgindicators[currentImg].className += " active";
	} else {
		currentImg--;
		document.images.src = imagesArray[currentImg];
		Imgindicators[currentImg].className += " active";
	}
}
function next() {
	var Imgindicators = document.getElementsByClassName("dots");

	for (i = 0; i < Imgindicators.length; i++) {
    	Imgindicators[i].className = Imgindicators[i].className.replace(" active", "");
  	}

	if(currentImg < imagesArray.length-1){ 
		currentImg++;
		document.images.src = imagesArray[currentImg];
		Imgindicators[currentImg].className += " active";
	} else {
		currentImg = 0;
		document.images.src = imagesArray[currentImg];
		Imgindicators[currentImg].className += " active";
	}
	
}