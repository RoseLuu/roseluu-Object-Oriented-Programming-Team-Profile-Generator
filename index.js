const inquirer = require('inquirer');
const fs = requirer('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employee = [];

function addMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Do you want to add team member',
            choices: [
                'Yes, I want to add new member',
                'No, my team is full'
            ]
        }
    ]).then((answers) => {
        if (answers === 'Yes, I want to add new member') {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: 'Which position of member you want to add?',
                    choices: [
                        'Manager',
                        'Engineer',
                        'Intern',
                    ]
                }
            ]).then((respond) => {
                if (respond === 'Manager') {
                    managerInput();
                } else if (respond === 'Engineer') {
                    engineerInput();
                } else {
                    internInput();
                }
            })
        } else {
            printTeam()
        }
    })
}
function managerInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter team manager is name: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter team manager is email: '
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Please enter team manager is office number: '
        }
    ])
        .then((answers) => {
            const managerName = answers.name;
            const id = 1;
            const managerEmail = answers.email;
            const officeNumber = answers.managerOfficeNumber;
            const manager = new Manager(managerName, id, managerEmail, officeNumber)
            employee.push(manager);
            addMember();
        })
}
function internInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter intern name: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter intern email: '
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter intern is school: '
        }
    ])
        .then((answers) => {
            const internName = answers.name;
            const id = employee.length + 1;
            const internEmail = answers.email;
            const internSchool = answers.school;
            const intern = new Intern(internName, id, internEmail, internSchool)
            employee.push(intern);
            addMember();
        })
}
function engineerInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter engineer name: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter engineer email: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter engineer is github: '
        }
    ])
        .then((answers) => {
            const engineerName = answers.name;
            const id = employee.length + 1;
            const engineerEmail = answers.email;
            const engineerGitHub = answers.github;
            const engineer = new Engineer(engineerName, id, engineerEmail, engineerGitHub)
            employee.push(engineer);
            addMember();
        })
}
function printTeam() {

}