document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let message = document.getElementById("message");
    let clickCount = 0; // Counter for "No" button clicks
    let maxClicks = 8;  // Maximum times the "No" button moves
    let yesBtnScale = 1; // Scale factor for the "Yes" button
    let clickStage = 0; // Stage of text change for "No" button

    // Position "No" button to the right of the "Yes" button initially
    noBtn.style.position = "absolute";
    noBtn.style.left = `${yesBtn.offsetLeft + yesBtn.offsetWidth + 20}px`; // Position 20px to the right of "Yes" button
    noBtn.style.top = `${yesBtn.offsetTop}px`;

    // Move "No" button in slightly bigger increments when clicked
    noBtn.addEventListener("click", function () {
        if (clickStage === 0) {
            // First click - change to "Are you sure?"
            noBtn.textContent = "Are you sure?";
            clickStage = 1;
        } else if (clickStage === 1) {
            // Second click - change to "Please think about it first"
            noBtn.textContent = "Please think about it first";
            clickStage = 2;
        } else if (clickStage === 2) {
            // Third click - change to "Come on, it will be fun, I promise!"
            noBtn.textContent = "Come on ga, it will be fun, I promise!";
            clickStage = 3;
        } else if (clickStage === 3) {
            // Fourth click - change to "You're breaking my heart now!"
            noBtn.textContent = "You're breaking my heart now!";
            clickStage = 4;
        } else if (clickStage === 4) {
            // Fifth click - change to "Don't change, just click the Yes already!"
            noBtn.textContent = "Donchang, just click the Yes already!";
            clickStage = 5;
        } else if (clickStage === 5) {
            // Sixth click - change to "I SAID THE 'YES' BUTTON!!"
            noBtn.textContent = "I SAID THE 'YES' BUTTON!!";
            clickStage = 6;
        } else if (clickStage === 6) {
            // Seventh click - change to "PLEASE BABY GIRL, I'M BEGGING"
            noBtn.textContent = "PLEASE BABY GIRL I'M BEGGING";
            clickStage = 7;
        }

        if (clickCount < maxClicks) {
            // Get current button position
            let currentX = parseInt(noBtn.style.left) || 0;
            let currentY = parseInt(noBtn.style.top) || 0;

            // Define the range for bigger jumps
            let jumpX = (Math.random() * 200) - 100; // Bigger random change in X (between -100 and 100)
            let jumpY = (Math.random() * 200) - 100; // Bigger random change in Y (between -100 and 100)

            // Calculate new position
            let newX = currentX + jumpX;
            let newY = currentY + jumpY;

            // Ensure the "No" button stays within the screen bounds
            newX = Math.max(0, Math.min(newX, window.innerWidth - noBtn.offsetWidth));
            newY = Math.max(0, Math.min(newY, window.innerHeight - noBtn.offsetHeight));

            noBtn.style.position = "absolute";
            noBtn.style.left = `${newX}px`;
            noBtn.style.top = `${newY}px`;

            clickCount++;

            // Make "Yes" button grow 2x in size
            yesBtnScale *= 2;
            yesBtn.style.transform = `scale(${yesBtnScale})`;
        }

        if (clickCount === maxClicks) {
            noBtn.style.display = "none"; // Hide "No" button after 8 clicks
            message.innerHTML = "You tried to escape, but love always wins! ❤️";
        }
    });

    // Show a cute message when "Yes" is clicked
    yesBtn.addEventListener("click", function () {
        document.querySelector(".container").innerHTML = `
            <h1>Yay! </h1>
            <p>the only choice u have is to be with me ble ❤️</p>
            <p>advance happy valentines, baby! </p>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGVmMXlsNTg1ejAxZnY4cGZxeXAzcnQ2Mmd6bHk3ZWtlbnpvcGcyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t3sZxY5zS5B0z5zMIz/giphy.gif" alt="Happy Dance" style="width:200px;">
        `;
    });
});
