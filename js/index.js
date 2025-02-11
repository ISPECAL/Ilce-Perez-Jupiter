// Select footer and append copyright
const footer = document.querySelector("footer");
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.textContent = `© ${thisYear} Ilce Perez. All rights reserved.`;
footer.appendChild(copyright);

// Ensure skills list exists before appending skills
const skills = ["JavaScript", "Python", "CSS", "HTML"];
//const skillsListElem = document.querySelector("#skillsSection ul");
const skillsListElem = document.getElementById("skillsSection");

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
    const messageForm = document.forms[0];

    console.log(messageForm)

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


// Lesson 
const username = 'ISPECAL';

// Fetch GitHub repositories
fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => {
        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse JSON from the response
        return response.json();
    })
    .then(data => {
        // Store the repositories in a variable
        const repositories = data;

        // Log the repositories to see the data structure
        console.log(repositories);

        // Select the project section by id
        const projectSection = document.getElementById('projects-section');

        // Select the project list inside the project section
        const projectList = projectSection.querySelector('ul');

        // Loop through the repositories array
        repositories.forEach(repo => {
            // Create a new list item element
            const project = document.createElement('li');

            // Create a new anchor element
            //Link not clickable, need to fix<<<<<<
            const link = document.createElement('a');

            // Set the href attribute to the repository's URL
            link.href = repo.html_url;

            // Set the link's text to the repository's name
            link.innerText = repo.name;

            //open link in new tab
            link.target = '_blank';

            // Append the link to the list item
            project.appendChild(link);


            // Set text of the list item to the repository's name
            project.innerText = repo.name;

            // Append the new list item to the project list
            projectList.appendChild(project);
        });
    })
    .catch(error => {
        // Catch and handle any errors
        console.error('There was a problem with the fetch operation:', error);
    });
