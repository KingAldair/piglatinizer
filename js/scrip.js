/*global $*/
$("#me").click(function(){
	var word     =$("#input").val() ;
	var wordtwo  =word.toLowerCase();
	var first    =wordtwo.charAt(0);
	var wordthree=wordtwo.slice(1);


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
		$("#raa").html(wordthree+first+"ay");
}
	});
	
	
$( document ).ap(function() {
  
});
