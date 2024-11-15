function changeLanguage(language) {
    // Get all elements with data attributes for different languages
    const elements = document.querySelectorAll("[data-en]");

    // Loop through each element and set text based on language selected
    elements.forEach(element => {
        if (language === "en") {
            element.textContent = element.getAttribute("data-en");
        } else if (language === "fr") {
            element.textContent = element.getAttribute("data-fr");
        }
    });

    // Store selected language in localStorage
    localStorage.setItem("selectedLanguage", language);
}

// Retrieve the saved language preference from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("language").value = savedLanguage;
    changeLanguage(savedLanguage);
});

function buyNow() {
    alert("Redirecting to the purchase page...");
	 window.location.href = "https://store.steampowered.com/app/1762930/Goat_Simulator_Remastered/";
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
