const themeToggle = document.getElementById("themeToggle");
const navbar = document.querySelector(".navbar");
const ministersContainer = document.getElementById("ministersContainer");
const suggestionsBox = document.getElementById("suggestions");

const ministers = [
    { country: "India", name: "Narendra Modi", position: "Prime Minister" },
    { country: "USA", name: "Joe Biden", position: "President" },
    { country: "UK", name: "Rishi Sunak", position: "Prime Minister" },
    { country: "France", name: "Emmanuel Macron", position: "President" },
];

const allMinisters = [
    { name: "Narendra Modi", country: "India", position: "Prime Minister" },
    { name: "Amit Shah", country: "India", position: "Home Minister" },
    { name: "Joe Biden", country: "USA", position: "President" },
    { name: "Kamala Harris", country: "USA", position: "Vice President" },
    // Add more entries here...
];

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    navbar.classList.toggle("navbar-dark-mode");
    navbar.classList.toggle("navbar-light-mode");
}

function updateSuggestions(input) {
    suggestionsBox.innerHTML = "";
    if (input.length > 1) {
        let matches = ministers.filter(m => m.country.toLowerCase().includes(input.toLowerCase()));
        matches.forEach(match => {
            let suggestion = document.createElement("div");
            suggestion.textContent = match.country;
            suggestion.addEventListener("click", () => selectCountry(match.country));
            suggestionsBox.appendChild(suggestion);
        });
    }
}

function displayAllMinisters() {
    ministersContainer.innerHTML = "";
    allMinisters.forEach(minister => {
        const card = document.createElement("div");
        card.className = "col-md-3 minister-card";
        card.innerHTML = `<h5>${minister.name}</h5><p>${minister.position} of ${minister.country}</p>`;
        card.onclick = () => showMinisterDetails(minister);
        ministersContainer.appendChild(card);
    });
}

function selectCountry(country) {
    let countryMinisters = ministers.filter(m => m.country === country);
    ministersContainer.innerHTML = "";
    countryMinisters.forEach(minister => {
        const card = document.createElement("div");
        card.className = "col-md-3 minister-card";
        card.innerHTML = `<h5>${minister.name}</h5><p>${minister.position}</p>`;
        card.onclick = () => showMinisterDetails(minister);
        ministersContainer.appendChild(card);
    });
}

function showMinisterDetails(minister) {
    document.getElementById("ministerDetails").innerHTML = `
        <h3>${minister.name}</h3>
        <p>${minister.position}</p>
        <p>Country: ${minister.country}</p>`;
    new bootstrap.Modal(document.getElementById("ministerModal")).show();
}

themeToggle.addEventListener("click", toggleTheme);
document.getElementById("countrySearch").addEventListener("input", e => updateSuggestions(e.target.value));
displayAllMinisters();
