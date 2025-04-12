document.addEventListener("DOMContentLoaded", () => {
    const testContainer = document.getElementById("test-container");

    fetch('testJson.json')
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
