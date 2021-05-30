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
                btn.disabled = true;
                console.log('Good')
            } else {
                btn.disabled = false;
                console.log('I need more info!')
            }
            }
            getCheck()
    });

    
/*
    btn.addEventListener('click', () => {
        
    if (check.checked & inputs.value == "") {
    
    btn.disabled = false;
    inputs.forEach(n => n.addEventListener('input', onInput));
    onInput();
    console.log('Good')
    } else {
    btn.disabled = true;
    console.log('I need more info!')
    }
    
    });
  */  
    

    
    
    //User
    
    const user = {
    sum : 10000,
    numbCard : 2567729381340987,
    nameUser : 'Ivan',
    date : 23092023,
    cvvCode : 678
    };