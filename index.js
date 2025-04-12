// Note: if you are viewing this after the fact, the results may not be the same, as the files in the repo this is accessing will likely no longer exist in that repo.
document.addEventListener("DOMContentLoaded", () => {
    const testContainer = document.getElementById("test-container");

    fetch('https://zytronium.github.io/TheFactionNexus/assets/testJson.json')
        .then((response) => response.json())
        .then((data) => {
            const ul = document.createElement('ul');

            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.text;
                li.style.color = item.color;
                ul.appendChild(li);
            });

            testContainer.appendChild(ul);
        })
        .catch((error) => {
            console.error(error);
            testContainer.textContent = error.message;
        });
});
