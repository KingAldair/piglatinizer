/*global $*/
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$("#me").click(function(){
	var word = $("#input").val();
	var first = word.charAt(0);
	console.log;
	var res = word.slice(1);
	var tpt = word.split(" ");
	
	
	if(first ===  "a"|| "e" || "i" || "o" || "u"){
		$("#raa").html(word+"ay");
	}
	else if(first !== "a"|| "e" || "i" || "o" || "u"){
	$("#raa").html(res+first+"ay");
	}
	
});

$( document ).ready(function() {
  



});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function wordToPigLatin (){
	
}





// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


