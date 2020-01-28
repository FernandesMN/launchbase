const programmer = {
    name: 'Matheus',
    age: '19',
    technologies: [
        {name: 'C++', specialty: 'Desktop'},
        {name: 'Python', specialty: 'Data Science'},
        {name: 'Javascript', specialty: 'Web/Mobile'}
    ]
}

console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa ${programmer.technologies[0].name} com especialidade em ${programmer.technologies[0].specialty}.`);