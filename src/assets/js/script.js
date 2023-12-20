
const c = (el) => document.querySelector(el);

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const dynamicText = c(".type-text");

    const typeEffect = () => {
        const currentText = jsonData[textIndex].text;
        const currentChar = currentText.substring(0, charIndex);
        dynamicText.textContent = currentChar;
        dynamicText.classList.add("stop-blinking");

        if (!isDeleting && charIndex < currentText.length) {
            charIndex++;
            setTimeout(typeEffect, 200);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = !isDeleting;
            dynamicText.classList.remove("stop-blinking");
            textIndex = !isDeleting ? (textIndex + 1) % jsonData.length : textIndex; // Circula entre os textos
            setTimeout(typeEffect, 1200);
        }
    };

    typeEffect();