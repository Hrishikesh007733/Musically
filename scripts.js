var mysong = document.getElementById("songs");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "images/pause.png";
    }
    else{
        mysong.pause();
        icon.src = "images/play.png";
    }
}
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
    } else { 
      x.className = x.className.replace(" show", "");
    }
  }
  
  // When the user clicks anywhere outside of the modal, close it
  var modal = document.getElementById('ticketModal');
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }