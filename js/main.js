//AJAX

let balance;

async function fetchTest() {
    let response = await fetch('js/ajax.json');
    let responseText = await (response.text());

    balance = JSON.parse(responseText).balance;
    
    document.getElementById('header-item--balance').innerHTML = balance;
}

(async() => {
    await fetchTest();
})();


//Block Button

    let btn = document.querySelector('.btn');
    const form = document.querySelector('.data-item__form');
    let inputs = document.querySelectorAll('input');

    const getKey =  document.addEventListener('keyup', () => { 
        console.log('Клавиша была нажата!'); 
    });
   
    btn.addEventListener('click', () =>{
        const getCheck = () =>{
            if (getKey != "" && check.checked){
                console.log('click');
                btn.disabled = false;

                const user = [...document.querySelectorAll('input')].reduce((user, el) => {
                    user[el.name] = el.value;
                    return user;
                }, {}); 
                
                getData(); 
                getCorrect();
                btnClear();
                getMoney();
            } else {
                btn.disabled = true;
            }
        }
            getCheck();
    });


 const getData = () => {
			let item_sum = document.getElementById('sum').value;
			let item_number = document.getElementById('number').value;
			let item_name = document.getElementById('name').value;
			let item_date = document.getElementById('date').value;
			let item_cvv = document.getElementById('cvv').value;

      let xTable = document.getElementById('TableforData');
      let tr = document.createElement('tr');
      tr.innerHTML = '<td>' + item_sum + '</td><td>' + item_number + '</td><td>' + item_name + '</td><td>' +  item_date + '</td><td>' + item_cvv +'</td>';
      xTable.children[0].appendChild(tr);
};
     
const btnClear = () => {
    for (let i = 0; i < inputs.length; i++) {
       if(i) {
        inputs[i].value = "";
        check.checked = false;
       }
    }
};

let getCorrect = () => {
    let username = document.getElementById('name').value;
    let cadnumber= document.getElementById('number').value;
    let cvvnumb = document.getElementById('cvv').value;

    if (username.length < 4) {
        alert('Слишком мало букв! Разрешённый минимум: 4')
    };

    if(cadnumber.length < 12) {
        alert('Слишком мало цифр! Нужно ввести : 12')
    };

    if(cvvnumb.length < 3) {
        alert('Слишком мало цифр! Нужно ввести: 3')
    };
};


//Get Money 

const getMoney = () => {
    let i = document.getElementById('sum').value;
    let u = balance;
    console.log(i);
    console.log(u);
 
        if (i < u) {
        let getMinus = u - i;
        document.getElementById('header-item--balance').innerHTML = getMinus;
        console.log(getMinus);
        alert('Деньги успешно выведены');

        } else {
            if(i > u) {
                alert('Недостаточно средств!');
            }
            
        };

}

