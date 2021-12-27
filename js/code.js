const userInput = document.getElementById('input');
const username = document.querySelector('.username');
const addBtn = document.querySelector('.btn');
const popModule = document.querySelector('.pop');
const iconX = document.querySelector('.icon-x');
const newMoney = document.getElementById('how');
const outher = document.getElementById('outherPrices');
const divPrices = document.getElementById('prices');

const newInput = document.createElement('input');
      newInput.value = 'enter';
      newInput.type = 'submit';


iconX.addEventListener('click', function(){
    iconX.classList.add('icon-click');
    //popModule.classList.add('invisible');
    if(userInput.value === ''){
        alert('please Enter Your Name');
    }
})
const obj = {
       bank: 'CIH BANK',
       sold: 12550,
       rib:'129385z80384893',
       name: 'Fatima Zahrae',

    addUserName(){
       if(userInput.value === 'fatima zahrae'){
        username.innerHTML = `Hello ${userInput.value}`;
       }
    },
    menuProfill(){
        document.querySelector('.profil').classList.toggle('prices-visible');
        document.getElementById('bank').innerHTML = `<strong class= "das">${this.bank}</strong>`
        document.getElementById('name').innerHTML = `<strong class= "das">${this.name}</strong>`
        document.getElementById('rib').innerHTML = `<strong class= "das">${this.rib}</strong>`
        document.getElementById('sold').innerHTML = `<strong class= "das">${this.sold} MAD</strong>`
    },

    takMoney(){
        this.sold -= 100;
        console.log(this.sold);
        document.getElementById('sold').innerHTML = `<strong class= "das">${this.sold} MAD</strong>`
    },
    takMoney2(){
        this.sold -= 200;
        console.log(this.sold);
        document.getElementById('sold').innerHTML = `<strong class= "das">${this.sold} MAD</strong>`
    },
    takMoney3(){
        this.sold -= 500;
        console.log(this.sold);
        document.getElementById('sold').innerHTML = `<strong class= "das">${this.sold} MAD</strong>`
    },
    outherPrice(){
        
        newInput.classList.add('mami');
        outher.type = 'text';
        outher.value = '';
        divPrices.appendChild(newInput);

        newInput.addEventListener('click', function(){
            if(outher.value === ''){
                alert('Please Enter How Money you want');
            }else{
                this.sold -= outher.value;
                console.log(this.sold -= outher.value);
            }
        })
    },
    sendMoney(){
        this.sold += Number(newMoney.value);
        console.log(this.sold);
        document.getElementById('sold').innerHTML = `<strong class= "das">${this.sold} MAD</strong>`
        newMoney.value = '';
    }

    
}

addBtn.addEventListener('click', function(){
    obj.addUserName();
    if(userInput.value === ''){
        alert('Please Enter Your Name')
    }else if(userInput.value === 'fatima zahrae') {
        popModule.classList.add('invisible')
    }
    else{
        alert('THIS NAME NOT EXISITE');
        userInput.value = '';
    }
})



function menuHeight(){
    document.querySelector('.prices').classList.toggle('prices-visible');
}
function howMoney(){
    document.querySelector('.new-money').classList.toggle('prices-visible');
}

document.getElementById('take100').addEventListener('click', function(){
    obj.takMoney();
})
document.getElementById('outherPrices').addEventListener('click', function(){
    obj.outherPrice();
})
document.getElementById('send').addEventListener('click', function(){
    obj.sendMoney();
})