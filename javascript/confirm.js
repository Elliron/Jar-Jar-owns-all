
function myFunction() {
    var txt;
    var r = confirm("You have chose well");
    if (r ==true) {
        txt= "Welcome to the dark side";
    }  else {
        txt= "I find your lack of faith disturbing"
    }
    document.getElementById("thing").innerHTML = txt;
}