function init(){
//add your javascrip between these two lines of code

   
   
   var clicky = document.getElementById("entrybutton");
   var texts = document.getElementById("entryinput");
   
   
   clicky.addEventListener("click", function () {
     alert("Joe Forajter: " + texts.value);
	 document.getElementById("textoutput").innerHTML = texts.value
   });
   
}







window.addEventListener('load', init);