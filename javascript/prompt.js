var person = prompt("Please enter your name", "Dark One");
if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}