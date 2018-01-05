/*global $*/
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$("#me").click(function(){
	var word = $("#input").val();
	var wordtwo= word.toLowerCase();
	var first = wordtwo.charAt(0);
	var res = wordtwo.slice(1);
	var wordthree=wordtwo.split();
	
	$("#te").html(first);
	$(".te").html(wordthree);

	 if(first==="a"){
		$("#raa").html(wordtwo+"ay");
	} 
	else if(first==="e"){
		$("#raa").html(wordtwo+"ay");
	}
	else if(first==="i"){
		$("#raa").html(wordtwo+"ay");
	} 
	else if(first==="o"){
		$("#raa").html(wordtwo+"ay");
	} 
	else if(first=== "u"){
		$("#raa").html(wordtwo+"ay");
		}
	else if(first!== "a"){

		$("#raa").html(res+first+"ay");
}
	//if(first !==  "a"){
	//	$("#raa").html(res+first+"ay");
	//} 
	//else if(first !== "e"){
	//	$("#raa").html(res+first+"ay");
	//}
	//else if(first !== "i"){
	//	$("#raa").html(res+first+"ay");
	//} 
	//else if(first !== "o"){
	//	$("#raa").html(res+first+"ay");
	//} 
	//else if(first !== "u"){
	//	$("#raa").html(res+first+"ay");
	//	}
});

$( document ).ready(function() {
  



});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function wordToPigLatin (){
	
}





// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


