document.addEventListener("DOMContentLoaded", () => {
    const testContainer = document.getElementById("test-container");

    fetch('https://thefactionnexus.tech/assets/HTML_Templates/navbar.html')
        .then((response) => response.text())
        .then((text) => {
            testContainer.innerHTML = text;
        })
        .catch((error) => {
            console.error(error);
            testContainer.innerHTML = error.message;
        })
});