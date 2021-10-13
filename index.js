const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employee = [];

//create the team function
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'makeTeam',
            message: 'Do you want to create a team',
            choices: [
                'Yes',
                'No'
            ]
        }
    ]).then((startTeam) => {
        if (startTeam.makeTeam === 'Yes') {
            //run managerInput function
            managerInput()
        } else {
            return 'You not create any team'
        }
    })
}
//create function to add member, intern and engineer
function addMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Do you want to add team member',
            choices: [
                'Yes, I want to add new member',
                'No, my team is full',
            ]
        }
    ])
        .then((answer) => {
            if (answer.addMember === 'Yes, I want to add new member') {
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: 'Which position of member you want to add?',
                        choices: [
                            'Engineer',
                            'Intern',
                        ]
                    }
                ]).then((respond) => {
                    if (respond.role === 'Engineer') {
                        engineerInput();
                    } else {
                        internInput();
                    }
                })
            }
            else {
                //if user choose No then it just print manger of the team
                printTeam()
            }
        })
};
//create function for manger question 
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
            //manager will always be the first member of the team so id=1
            const id = 1;
            const managerEmail = answers.email;
            const officeNumber = answers.managerOfficeNumber;
            const manager = new Manager(managerName, id, managerEmail, officeNumber)
            employee.push(manager);
            addMember();
        })
};
//create function for intern question
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
};
//function for engineer question 
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
            //add all value in a new object
            const engineer = new Engineer(engineerName, id, engineerEmail, engineerGitHub)
            //push all engineer data to the employee array
            employee.push(engineer);
            addMember();
        })
};
//create a function for html file
function printTeam() {
    const html = [];
    const startHtml = `
        <!DOCTYPE html>
         <html lang="en">
       <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <title>TEAM GENERATE</title>
       </head>

       <body>
        <header class='text-white bg-info'>
        <h1 class='text-center'>My Team</h1>
        </header>
        <section class='m-5'>
        <div class="container">
            <div class="row">`;
    html.push(startHtml);
    for (var i = 0; i < employee.length; i++) {
        let teamMemberHtml = `
         <div class="col-sm-4 card-deck">
         <div class="card border-info mb-3" style="max-width: 18rem">
         <h5 class="card-header text-white bg-info">${employee[i].name}<br /><br />${employee[i].getRole()}</h5>
         <ul class="list-group list-group-flush">
         <li class="list-group-item">ID: ${employee[i].id}</li>
         <li class="list-group-item">Email Address: 
         <a href='mailto:${employee[i].email} '> ${employee[i].email}</a>
         </li>`;
        if (employee[i].getRole() === 'Manager') {
            teamMemberHtml += `
        <li class="list-group-item">Office Phone: ${employee[i].getOfficeNumber()}</li>`
        } else if (employee[i].getRole() === 'Engineer') {
            teamMemberHtml += `
            <li class="list-group-item">GitHub: 
            <a
            href='https://github.com/${employee[i].getGitHub()}'> ${employee[i].getGitHub()}</a>
            </li > `
        } else if (employee[i].getRole() === 'Intern') {
            teamMemberHtml += `
            <li class = "list-group-item" > School: ${employee[i].getSchool()} </li> `
        }
        teamMemberHtml += `
       </ul >
       </div >
       </div > `
        html.push(teamMemberHtml);
    }
    const endHtml = `
    </div >
    </div >
    </section >
    </body >
    </html > `
    html.push(endHtml);
    fs.writeFile('./output/index.html', html.join(''), (err) =>
        err ? console.error(err) : console.log('----------Success!----------')
    )
}

//run function createTeam to start the team
createTeam();