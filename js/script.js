function init(){
//add your javascrip between these two lines of code

   
   
   var clicky = document.getElementById("entrybutton");

   
   
   clicky.addEventListener("click", function () {
	 var texts = document.getElementById("entryinput");
     alert("Joe Forajter: " + texts.value);
	 document.getElementById("textoutput").innerHTML = texts.value
   });
   
}







window.addEventListener('load', init);