
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
                console.log('click')
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


function getData(){
			let item_sum = document.getElementById('sum').value;
			let item_number = document.getElementById('number').value;
			let item_name = document.getElementById('name').value;
			let item_date = document.getElementById('date').value;
			let item_cvv = document.getElementById('cvv').value;

      let xTable = document.getElementById('TableforData');
      let tr = document.createElement('tr');
      tr.innerHTML = '<td>' + item_sum + '</td><td>' + item_number + '</td><td>' + item_name + '</td><td>' +  item_date + '</td><td>' + item_cvv +'</td>';
      xTable.children[0].appendChild(tr);
}

     
const btnClear = () => {
    for (let i = 0; i < inputs.length; i++) {
       if(i) {
        inputs[i].value = "";
       }
    }
};




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