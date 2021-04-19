const inq = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const newDoc = new JSDOM(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link href="./assets/styles.css" rel="stylesheet">
    <title>Team Generator</title>
</head>

<body>
    <div id="title">Your Created Team!</div>
    <div class="container" id="manager">
        
    </div>
    <div class="container">
        <div class="row flex-nowrap horscroll" id="engineers" style="min-height: 18rem;">
            
        </div>
    </div>
    <div class="container">
        <div class="row flex-nowrap horscroll" id="interns" style="min-height: 18rem;">
            
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
    crossorigin="anonymous"></script>

</html>`);

const document = newDoc.window.document;

const engCardEl = document.getElementById('engineers');
engCardEl.innerHTML = '';
const intCardEl = document.getElementById('interns');
intCardEl.innerHTML = '';


let next = '';
let isDone = false;

function manPromptRender() {
    return inq.prompt([
    {
        name: "title",
        message: "What would you like to name your team? ",
        default: "Your Team!"
    },
    {
        name: "manager",
        message: "Manager's name: ",
        default: "Manager Name"
    },
    {
        name: "managerId",
        message: "Manager's Employee ID: ",
        default: "Manager's Employee ID"
    },
    {
        name: "managerEmail",
        message: "Manager's Email: ",
        default: "managersemail@email.com"
    },
    {
        name: "managerOffNum",
        message: "Manager's Office Number: ",
        default: "Manager's Office Number"
    },
    {
        type: "list",
        name: "next",
        message: "Select what role to add to your team next: ",
        choices: ["Engineer", "Intern", "Finished Setting Up Team"]
    }
    ])
    .then(ans => {
        next = ans.next;
        const manCardEl = document.getElementById('manager');
        const teamTitle = document.getElementById('title');
        teamTitle.textContent = ans.title;

        let tempMan = new Manager(ans.manager, ans.managerId, ans.managerEmail, ans.managerOffNum);

        manCardEl.innerHTML = 
        `<div class="row flex-nowrap horscroll" style="min-height: 18rem;">
        <div class="card text-black mb-3" style="max-width: 18rem;">
            <div class="card-header">${tempMan.getRole()}</div>
            <div class="card-body">
                <h5 class="card-title">${tempMan.getName()}</h5>
                <p class="card-text text-wrap">ID: ${tempMan.getId()}</p>
                <p class="card-text text-wrap">Email: <a href="${tempMan.getEmail()}">${tempMan.getEmail()}</a></p>
                <p class="card-text text-wrap">Office #: ${tempMan.getOffNum()}</p>
            </div>
        </div>
    </div>`;
})}

function engPromptRender() {
    return inq.prompt([
        {
            name: "engineer",
            message: "Engineer's name: ",
            default: "Engineer Name"
        },
        {
            name: "engineerId",
            message: "Engineer's Employee ID: ",
            default: "Engineer's Employee ID"
        },
        {
            name: "engineerEmail",
            message: "Engineer's Email: ",
            default: "engineeremail@email.com"
        },
        {
            name: "engineerGit",
            message: "Engineer's GitHub Username: ",
            default: "Engineer's GitHub Username"
        },
        {
            type: "list",
            name: "next",
            message: "Select what role to add to your team next: ",
            choices: ["Engineer", "Intern", "Finished Setting Up Team"]
        }
    ])
    .then(ans => {
        next = ans.next;
        
        let tempEng = new Engineer(ans.engineer, ans.engineerId, ans.engineerEmail, ans.engineerGit);

        const newEngCard = document.createElement('div');
        newEngCard.className = 'card text-black mb-3';
        newEngCard.style.maxWidth = "18rem";
    
        newEngCard.innerHTML = 
        `   <div class="card-header">${tempEng.getRole()}</div>
            <div class="card-body">
                <h5 class="card-title">${tempEng.getName()}</h5>
                <p class="card-text text-wrap">ID: ${tempEng.getId()}</p>
                <p class="card-text text-wrap">Email: <a href="${tempEng.getEmail()}">${tempEng.getEmail()}</a></p>
                <p class="card-text text-wrap">GitHub Username: ${tempEng.getGHub()}</p>
            </div>`;
        engCardEl.appendChild(newEngCard);
    })
}

function intPromptRender() {
    return inq.prompt([
        {
            name: "intern",
            message: "Intern's name: ",
            default: "Intern Name"
        },
        {
            name: "internId",
            message: "Intern's Employee ID: ",
            default: "Intern's Employee ID"
        },
        {
            name: "internEmail",
            message: "Intern's Email: ",
            default: "internemail@email.com"
        },
        {
            name: "internSchool",
            message: "Intern's School: ",
            default: "Intern's School"
        },
        {
            type: "list",
            name: "next",
            message: "Select what role to add to your team next: ",
            choices: ["Engineer", "Intern", "Finished Setting Up Team"]
        }
    ])
    .then(ans => {
        next = ans.next;
        
        let tempInt = new Intern(ans.intern, ans.internId, ans.internEmail, ans.internSchool);

        const newIntCard = document.createElement('div');
        newIntCard.className = 'card text-black mb-3';
        newIntCard.style.maxWidth = "18rem";
    
        newIntCard.innerHTML = 
        `   <div class="card-header">${tempInt.getRole()}</div>
            <div class="card-body">
                <h5 class="card-title">${tempInt.getName()}</h5>
                <p class="card-text text-wrap">ID: ${tempInt.getId()}</p>
                <p class="card-text text-wrap">Email: <a href="${tempInt.getEmail()}">${tempInt.getEmail()}</a></p>
                <p class="card-text text-wrap">GitHub Username: ${tempInt.getSchool()}</p>
            </div>`;
        intCardEl.appendChild(newIntCard);
    })
}

(async() => {

    await manPromptRender();

    while (!isDone) {
    
        if (next === "Engineer") {
            await engPromptRender();
        } else if (next === "Intern") {
            await intPromptRender();
        } else {
            fs.writeFile('./index.html', document.documentElement.outerHTML, error => {
                if (error) console.error(error);
                else console.log("file created successfully!");
            });
            console.log("Your team's HTML page has been created!");
            isDone = true;
        }
    }
})()
