/*function open() {
  document.getElementById("side_bar").style.width = "20%";
   document.getElementById("content").style.width = "80%";
}

function close() {
  document.getElementById("side_bar").style.width = "0%";
   document.getElementById("content").style.width = "100%";
}
*/
function show_sidebar(){
//document.getElementById('delroleform').style.display = "block";
 document.getElementById("content").style.width = "82%";
    document.getElementById("responcive_close").style.display = "flex";
     document.getElementById("responcive").style.display = "none";
  $("#side_bar").fadeIn();
 $("#side_bar").css({"visibility":"visible","display":"block"});


}
//Function to Hide Popup
function close_sidebar(){

 document.getElementById("content").style.width = "100%";
  document.getElementById("responcive").style.display = "flex";
    document.getElementById("responcive_close").style.display = "none";

$("#side_bar").fadeOut();
 $("#side_bar").css({"visibility":"hidden","display":"none"});
}