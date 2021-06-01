document.addEventListener('DOMContentLoaded',() => {
    document.querySelectorAll('input').forEach((e) => {
        if(e.value==="")e.value=window.sessionStorage.getItem(e.name, e.value);
        e.addEventListener('input',() => {
            window.sessionStorage.setItem(e.name, e.value);
        })
    })
});

//AJAX
let getJson = {"balanse": 100000};
document.getElementById('header-item--balance').innerHTML = getJson.balanse;

/*
const headerBalanse = document.querySelector('.header-item--balance');
const requestURL = 'js/ajax.js';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const balanse = request.response;
    getHeaderBalanse(balanse);
}
  
function getHeaderBalanse(jsonObj) {
    var myH3 = document.createElement('h3');
    myH3.textContent = jsonObj['balanse'];
    headerBalanse.appendChild(myH3);
}
*/

//Block Button

    let btn = document.querySelector('.btn');
    const form = document.querySelector('.data-item__form');
    const inputs = document.querySelectorAll('input');
    


    const getKey = (e) => {
        let keyNum;

        if(inputs.event) {
            keyNum.inputs.event.keyUp;
        } else if (e) {
                keyNum = e.which;
        }
            console.log(keyNum)
        };

        document.onkeyup = getKey();

   
    btn.addEventListener('click', () =>{
        function getCheck(){
            if (getKey() != "" && check.checked){
                btn.setAttribute('disabled', 'false');



                const user = [...document.querySelectorAll('input:not(#check)')].reduce((user, el) => {
                    user[el.name] = el.value;
                    return user;
                }, {});   
                document.querySelector('.pre').innerHTML = JSON.stringify(user, null, '');

            } else {
                btn.removeAttribute('disabled', 'true');
            }
        }
            getCheck()
    });




//User
    

/*
sum : 10000,
numbCard : 2567729381340987,
nameUser : 'Ivan',
date : 23092023,
cvvCode : 678
};
*/

/*
Get Money 

let getMoney = () => {
    for(getJson--; getJson = 100000; getJson > 0 ) {
        if(getJson = 0) {
            alert('Недостаточно средств.')
        } else {
            
        }
    }
}
getMoney();

*/
