//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to apply user preferences
function applyPreferences() {
  var fontSize = getCookie("fontSize");
  var fontColor = getCookie("fontColor");

  if (fontSize) {
    document.body.style.fontSize = fontSize;
  }

  if (fontColor) {
    document.body.style.color = fontColor;
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get user preferences from form inputs
  var fontSizeInput = document.getElementById("fontSize");
  var fontColorInput = document.getElementById("fontColor");

  var fontSize = fontSizeInput.value;
  var fontColor = fontColorInput.value;

  // Set the preferences as cookies
  setCookie("fontSize", fontSize, 365);
  setCookie("fontColor", fontColor, 365);

  // Apply the preferences immediately
  applyPreferences();
}

// Add event listener to form submit
var form = document.getElementById("preferencesForm");
form.addEventListener("submit", handleFormSubmit);

// Apply preferences on page load
applyPreferences();

