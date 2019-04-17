$(document).ready(function() {
    $("#ArtTab").click(function () {
        window.location.href = "Art.html";
    });
    $("#CodeTab").click(function () {
        window.location.href = "Code.html";
    });
    $("#AboutMeTab").click(function () {
        window.location.href = "AboutMe.html";
    });
    });
function openTab(evt, pageName) {
  
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}