// Function to render content dynamically
function renderContent(category, containerId) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById(containerId);
            container.innerHTML = "";
            
            data[category].forEach(item => {
                const card = document.createElement("div");
                card.classList.add("content-card");
                card.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
                container.appendChild(card);
            });
        });
}

// Load data when the page loads
document.addEventListener("DOMContentLoaded", () => {
    renderContent("mentalModels", "mentalModelsContainer");
    renderContent("businessInsights", "businessInsightsContainer");
    renderContent("resources", "resourcesContainer");
    renderContent("reflections", "reflectionsContainer");
});

// Search functionality
document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll(".content-card").forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(searchTerm) ? "block" : "none";
    });
});
