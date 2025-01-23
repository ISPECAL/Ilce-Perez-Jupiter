const footer = document.querySelector('footer');

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement('p');

copyright.innerHTML = '<p>  ©' + thisYear + 'Ilce Perez. All rights reserved.'

document.body.appendChild(copyright);


const skills = ["Javascript", "Python", "CSS", "HTML"];



const skillsSectionElem = document.getElementById("Skills");

const skillsListElem = document.getElementById("skillsSection");

console.log(skillsListElem);

for (let i = 0; i < skills.length; i++) {

    let skill = document.createElement('li');

    skill.textContent = skills[i];

    console.log(skill.textContent);
    console.log(skills[i]);

    skillsListElem.appendChild(skill);

}