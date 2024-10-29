document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamicText");
    const messages = [
        "Welcome to Myntra,",
        "Shop Now,",
        "Try Myntra with New Interface.",
        "Try New Feature Beauty Studio.",
        "Enjoy Shopping,",
        "Get 15% Discount On HRX Shirts,",
        "24/7 Customer Support.",
        "Happy Shopping With Myntra.",
        "Trendy Kurtas,Shirts,Jeans,",
        "Search It And Find It With Myntra AI Myne."
    ];

    let messageIndex = 0;
    let charIndex = 0;
    const typingSpeed = 70; // Typing speed in milliseconds
    const pauseDuration = 1500; // Pause after each message

    function typeMessage() {
        dynamicText.textContent = ""; // Clear the text
        charIndex = 0; // Reset character index

        const currentMessage = messages[messageIndex];

        function typeChar() {
            if (charIndex < currentMessage.length) {
                dynamicText.textContent += currentMessage.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                // Pause before typing the next message
                setTimeout(() => {
                    messageIndex = (messageIndex + 1) % messages.length; // Move to the next message
                    typeMessage(); // Start typing the next message
                }, pauseDuration);
            }
        }

        typeChar(); // Start typing the characters
    }

    typeMessage(); // Start typing the first message
});
