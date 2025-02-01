const footer = document.querySelector('footer');

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement('p');

copyright.innerHTML = '<p>   ©' + thisYear + ' Ilce Perez. All rights reserved.'

document.body.appendChild(copyright);


const skills = ["Javascript", "Python", "CSS", "HTML"];

const skillsListElem = document.getElementById("skillsSection");



for (let i = 0; i < skills.length; i++) {

    let skill = document.createElement('li');

    skill.textContent = skills[i];

    skillsListElem.appendChild(skill);

}
/* Working on*/

document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.forms['leave_message'];

    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log(event)
        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        console.log('Name:', usersName);
        console.log('Email:', usersEmail);
        console.log('Message:', usersMessage);

        const messageSection = document.getElementById('messages');
        const messageList = messageSection.querySelector('ul');

        const newMessage = document.createElement('li');

        const userLink = document.createElement('a');
        userLink.href = `mailto:${usersEmail}`;
        userLink.textContent = usersName;

        const messageSpan = document.createElement('span');
        messageSpan.textContent = `: ${usersMessage}`;

        newMessage.appendChild(userLink);
        newMessage.appendChild(messageSpan);

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';

        removeButton.addEventListener('click', function () {
            const entry = removeButton.parentNode;
            entry.remove();
        });

        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        messageForm.reset();
    });
});


