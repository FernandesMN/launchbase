const users = [
    {name: 'Carlos', technologies: ['HTML','CSS']},
    {name: 'Jasmine', technologies: ['Javascript','CSS']},
    {name: 'Tuane', technologies: ['HTML', 'Node.js']}
];

function getTechs(count) {
    let textVector = users[count].technologies;
    let text = textVector.join(', ');    

    return text;
};

function worksWithCss(user) {
    for (let i = 0; i < user.technologies.length; i++) {
        if (user.technologies[i] === 'CSS') return true;
    }

    return false;
};

for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} trabalha com ${getTechs(i)}`);
    console.log(`${users[i].name} trabalha com CSS: ${worksWithCss(users[i])}`);
    console.log('');
};