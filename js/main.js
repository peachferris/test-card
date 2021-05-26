//AJAX






  
//Block Button

const checkbox = document.getElementById('check');
let btn = document.querySelector('.btn');
btn.setAttribute('disabled', true);
const inp = document.querySelectorAll('.data-item__input');

let required = function() {
    if (checkbox.check , inp.check) {
        btn.disabled = false;
        console.log('Good');
    } else {
        btn.disabled = true;
        console.log('I need more information');
    }
};

required();
/*
const username = document.getElementById('name');

if(username.lenght > 4) {
    console.log('Yeah, cool name!');
    
} else {
    console.log('It`s small name!');
}
*/


//User

const user =  {
    sum : 1000,
    numbCard : 2567729381340987, 
    nameUser : 'Ivan',
    date : 23092023,
    cvvCode : 678
};
    



    