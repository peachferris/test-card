
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
    let inputs = document.querySelectorAll('input');
    

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
                btn.disabled = false;

                const user = [...document.querySelectorAll('input')].reduce((user, el) => {
                    user[el.name] = el.value;
                    return user;
                }, {}); 
                
                getData(); 
                btnClear();
                //document.querySelectorAll('.table-container__data').innerHTML = JSON.stringify(user, null, '');

            } else {
                btn.disabled = true;
            }
        }
            getCheck()
    });


const getData = () => {
    document.querySelector('.text-item--1').appendChild(document.createTextNode(document.querySelector('.inputs--1').value));
    document.querySelector('.text-item--2').appendChild(document.createTextNode(document.querySelector('.inputs--2').value));
    document.querySelector('.text-item--3').appendChild(document.createTextNode(document.querySelector('.inputs--3').value));
    document.querySelector('.text-item--4').appendChild(document.createTextNode(document.querySelector('.inputs--4').value));
    document.querySelector('.text-item--5').appendChild(document.createTextNode(document.querySelector('.inputs--5').value));
};
     
const btnClear = () => {
    for (let i = 0; i < inputs.length; i++) {
       if(i) {
        inputs[i].value = ""
       } else {
        this.return(i)
       }
    }
};



/*if (input.length < 4) {
    alert("Имя слишком короткое, должно быть более 4 символов");
    this.return();
  }
  this = value;
*/





/* Get Money 

class Balance {

    get()
    set()
    add()
}

class Money {
    amount: 100000,
    currency
}
balanse = new Balance()
balanse.fetch()

*/