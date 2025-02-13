// Array of different warning messages
const warningMessages = [
  "Vichari Le Barabar💢",
  "Sachu??",
  "Goli maari dais h chal YES dabay",
  "Su na na karya kare chhe heee🥺",
  "Ave to dabavu j padse tare😤",
  "Last Chance 😠",
];

let warningIndex = 0; // To track which message to display

function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Hide the name message
    document.getElementById("name").style.display = "none";

    // Get the no-text element
    const noTextElement = document.getElementById("no-text");

    // Change text from the array and loop back when reaching the end
    noTextElement.textContent = warningMessages[warningIndex];
    warningIndex = (warningIndex + 1) % warningMessages.length; // Move to next message

    // Increase font size dynamically
    let currentFontSize = parseFloat(window.getComputedStyle(noTextElement).fontSize);
    noTextElement.style.fontSize = (currentFontSize + 3) + "px"; // Increase font size by 5px
  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content and modify size
    const yesMessage = document.getElementById("question");
    yesMessage.innerHTML = "<span id='yes-text'>Yeaaa I Love You 💖🥰🤗😘😘</span>"; 
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";

    // Change font size of the yes message
    const yesTextElement = document.getElementById("yes-text");
    yesTextElement.style.fontSize = "55px"; // Set a larger font size
    yesTextElement.style.fontWeight = "bold"; // Make it stand out more

    // Change image
    document.getElementsByClassName("image")[0].src = "images/thankyou.gif";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}
