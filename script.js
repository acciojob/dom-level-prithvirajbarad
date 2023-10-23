//your JS code here. If required.
ar c = document.getElementById("level");
var level = 0;
while (c.parentNode) {
  level++;
  c = c.parentNode;
}
var message = "The level of the element is: " + level;
alert(message);