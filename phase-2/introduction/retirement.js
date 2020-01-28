const name = 'Henrique';
const sex = 'M';
const age = 55;
const contribution = 30;

if(sex === 'M') {
    if((age + contribution) >= 95) {
        console.log(name + ' você pode se aposentar.')
    }else{
        console.log(name + ' você não pode se aposentar.')
    }
} else if(sex === 'F') {
    if((age + contribution) >= 85) {
        console.log(name + ' você pode se aposentar.')
    }else {
        console.log(name + ' você não pode se aposentar.')
    }
}