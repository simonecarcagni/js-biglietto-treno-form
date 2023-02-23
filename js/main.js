const buttonSubmit = document.querySelector('#readerForm');

buttonSubmit.addEventListener('click', 
    
    function(){
        const messageName = document.getElementById('name');
        const passengerName = messageName.value;


        const messageKm = document.getElementById('kilometers');
        const passengerKm = messageKm.value;

        console.log(passengerKm);

        const messageAge = document.getElementById('ages');
        const passengerAge = messageAge.value;

        const numberCoach = Math.floor((Math.random() * 9) + 1);

        alert(numberCoach);

        const numberCP = Math.floor((Math.random() * 9999) + 90000);
        
        alert(numberCP);
    }
);

const buttonReset = document.querySelector('#resetForm')

buttonReset.addEventListener('click', 

    function(){

        const messageName = document.getElementById('name');
        messageName.value = "";
    }

);


let ticketPrice = kilometers * 0.21;

let discountYoung = (ticketPrice * 20) / 100;

let discountOlder = (ticketPrice * 40) / 100;

let ticketYoung = ticketPrice - discountYoung;

let ticketOlder = ticketPrice - discountOlder;

let ticketYoungPerc = Math.round(ticketYoung * 100) / 100;

let ticketOlderPerc = Math.round(ticketOlder * 100) / 100;
