const journey = {
    start: {
        title: "Mental Models",
        description: "Click on a mental model to start learning.",
        options: [
            { text: "First Principles Thinking", next: "firstPrinciples1" },
            { text: "Inversion", next: "inversion1" }
        ]
    },
    firstPrinciples1: {
        title: "First Principles Thinking - Step 1",
        description: "Break problems down to their fundamental truths.",
        options: [
            { text: "Learn an example", next: "firstPrinciples2" },
            { text: "Compare with other models", next: "comparison1" }
        ]
    },
    firstPrinciples2: {
        title: "First Principles Thinking - Example",
        description: "Elon Musk used First Principles Thinking to rethink battery costs.",
        options: [
            { text: "What did he do?", next: "firstPrinciples3" },
            { text: "Apply this in daily life", next: "application1" }
        ]
    },
    inversion1: {
        title: "Inversion - Step 1",
        description: "Think about the opposite of what you want to solve.",
        options: [
            { text: "See a real-world example", next: "inversion2" },
            { text: "How does this compare?", next: "comparison1" }
        ]
    },
    inversion2: {
        title: "Inversion - Example",
        description: "Instead of asking 'How do I get rich?', ask 'How do I stay poor?'",
        options: [
            { text: "Mind-blowing! What's next?", next: "inversion3" },
            { text: "Can I apply this now?", next: "application1" }
        ]
    },
    application1: {
        title: "Applying Mental Models",
        description: "Use these models in decision-making every day.",
        options: [
            { text: "Recap & finish", next: "start" }
        ]
    },
    comparison1: {
        title: "Comparing Models",
        description: "Some models work better for certain situations.",
        options: [
            { text: "Go back to First Principles", next: "firstPrinciples1" },
            { text: "Go back to Inversion", next: "inversion1" }
        ]
    }
};

const titleElement = document.getElementById("pageTitle");
const descriptionElement = document.getElementById("pageDescription");
const optionsContainer = document.getElementById("optionsContainer");
const backButton = document.getElementById("backButton");

let historyStack = ["start"];

function renderPage(pageKey) {
    const page = journey[pageKey];

    titleElement.textContent = page.title;
    descriptionElement.textContent = page.description;
    optionsContainer.innerHTML = "";
    
    page.options.forEach(option => {
        const button = document.createElement("div");
        button.classList.add("option", "fade-in");
        button.textContent = option.text;
        button.onclick = () => {
            historyStack.push(option.next);
            renderPage(option.next);
        };
        optionsContainer.appendChild(button);
    });
}

backButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (historyStack.length > 1) {
        historyStack.pop();
        renderPage(historyStack[historyStack.length - 1]);
    }
});

document.addEventListener("DOMContentLoaded", () => renderPage("start"));
