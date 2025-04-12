// Note: if you are viewing this after the fact, the results may not be the same, as the files in the repo this is accessing will likely no longer exist in that repo.
document.addEventListener("DOMContentLoaded", () => {
    const testContainer = document.getElementById("test-container");

    fetch('https://thefactionnexus.tech/assets/test.txt')
        .then((response) => response.text())
        .then((text) => {
            testContainer.innerHTML = text;
        })
        .catch((error) => {
            console.error(error);
            testContainer.textContent = error.message;
        });
});
