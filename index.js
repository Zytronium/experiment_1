// note: If you are testing this after the fact, some files from the GitHub Pages website this is pulling from have changed, therefore altering the results of this test and likely making it fail.
document.addEventListener("DOMContentLoaded", () => {
    const testContainer = document.getElementById("test-container");

    fetch('https://zytronium.github.io/TheFactionNexus/factions')
        .then((response) => response.text())
        .then((text) => {
            testContainer.innerHTML = text;
        })
        .catch((error) => {
            console.error(error);
            testContainer.textContent = error.message;
        });

    fetch('https://zytronium.github.io/TheFactionNexus/assets/scripts/factions.js')
        .then((response) => response.text())
        .then((text) => {
            testContainer.innerHTML += text;
        })
        .catch((error) => {
            console.error(error);
            testContainer.textContent += error.message;
        });

    fetch('https://zytronium.github.io/TheFactionNexus/assets/styles/style.css')
        .then((response) => response.text())
        .then((text) => {
            testContainer.innerHTML += text;
        })
        .catch((error) => {
            console.error(error);
            testContainer.textContent += error.message;
        });
});
