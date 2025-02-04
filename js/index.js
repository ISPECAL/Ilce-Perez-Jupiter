// Select footer and append copyright
const footer = document.querySelector("footer");
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.textContent = `© ${thisYear} Ilce Perez. All rights reserved.`;
footer.appendChild(copyright);

// Ensure skills list exists before appending skills
const skills = ["JavaScript", "Python", "CSS", "HTML"];
const skillsListElem = document.querySelector("#skillsSection ul");

if (skillsListElem) {
    skills.forEach((skill) => {
        let skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsListElem.appendChild(skillItem);
    });
}

// Wait function using Promises
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Handle form submission asynchronously
document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.forms["leave_message"];

    messageForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        console.log("Processing message...");

        // Simulated delay for async behavior
        await delay(500);

        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        console.log("Name:", usersName);
        console.log("Email:", usersEmail);
        console.log("Message:", usersMessage);

        const messageSection = document.getElementById("messages");
        const messageList = messageSection.querySelector("ul");

        const newMessage = document.createElement("li");

        const userLink = document.createElement("a");
        userLink.href = `mailto:${usersEmail}`;
        userLink.textContent = usersName;

        const messageSpan = document.createElement("span");
        messageSpan.textContent = `: ${usersMessage}`;

        newMessage.appendChild(userLink);
        newMessage.appendChild(messageSpan);

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", async function () {
            console.log("Removing message...");
            await delay(300); // Simulated async delay before removal
            removeButton.parentNode.remove();
        });

        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        messageForm.reset();
    });
});
