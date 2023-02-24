const buttonSubmit = document.querySelector('#readerForm');

const messageName = document.getElementById('name');

const messageKm = document.getElementById('kilometers');

const messageAge = document.getElementById('ages');

const yourTicketDom = document.getElementById('yourTicket')

const ticketNameDom = document.getElementById('ticketName');

const ticketDiscountDom = document.getElementById('ticketDiscount');

const numberCoachDom = document.getElementById('numberCoach');

const codeCpDom = document.getElementById('codeCP');

const ticketPriceDom = document.getElementById('ticketPrice');

const priceKm = 0.21;

buttonSubmit.addEventListener('click', 
    
    function(){
        
        let passengerName = messageName.value;

        let passengerKm = parseInt(messageKm.value);

        let passengerAge = messageAge.value;

        let price = passengerKm * priceKm;

        if (passengerAge == "under18"){
            price = price - (price / 100 * 20)
            ticketDiscountDom.innerHTML = `Sconto 20% under 18`
        } else if (passengerAge == "over65"){
            price = price - (price / 100 * 40)
            ticketDiscountDom.innerHTML = `Sconto 40% over 65`
        }else {
            ticketDiscountDom.innerHTML = `Prezzo Pieno`
        };

        let numberCoach = Math.floor((Math.random() * 9) + 1);

        let numberCP = Math.floor((Math.random() * 9999) + 90000);

        yourTicketDom.classList.remove('d-none');

        ticketNameDom.innerHTML = passengerName; 

        ticketPriceDom.innerHTML = `${price.toFixed(2)} euro`;

        codeCpDom.innerHTML = numberCP;

        numberCoachDom.innerHTML = numberCoach;
    }
);

const buttonReset = document.querySelector('#resetForm')

buttonReset.addEventListener('click', 

    function(){

        yourTicketDom.classList.add('d-none');

        messageName.value = "";

        messageKm.value = "";

        messageAge.value = "normalPrice";
    }

);

