var getthenewdate = new Date();
var monthNumber = getthenewdate.getMonth() + 1; 
var yearNumber = getthenewdate.getFullYear();   


function getLastTwoDigits(year) {
    return year % 100; 
}

function isCardNumberValid(number) {

    return number === '1234123412341234';
}

function displayError(msg) {
 
    document.querySelector('.errorMsg').innerHTML = msg;
}

function displayError2(msg) {

    document.querySelector('.errorMsg2').innerHTML = msg;
}

function isMonthNumberValid(month, year) {
    const enteredYear = parseInt(year);
    const enteredMonth = parseInt(month);

 
    if (enteredMonth < 1 || enteredMonth > 12) {
        return false;
    }

    const lastTwoDigitsOfCurrentYear = getLastTwoDigits(yearNumber);

  
    if (enteredYear === lastTwoDigitsOfCurrentYear) {
       
        return enteredMonth >= monthNumber;
    } else if (enteredYear > lastTwoDigitsOfCurrentYear) {
     
        return true;
    } else {
      
        return false;
    }
}

function submitHandler(event) {
    event.preventDefault(); 
    const cardNumber = this.querySelector("#card-number").value;
    const cardMonth = this.querySelector("#card-month").value;
    const cardYear = this.querySelector("#card-year").value;

    let errorMsg = '';
    let errorMsg2 = '';
    displayError('');
    displayError2('');

    if (isNaN(cardNumber)) {
        errorMsg += 'Card number is not a valid number\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not a valid card number\n';
    }
    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    }

    if (isNaN(cardMonth) || isNaN(cardYear)) {
        errorMsg2 += 'Month or Year number is not a valid number\n';
    } else if (!isMonthNumberValid(cardMonth, cardYear)) {
        errorMsg2 += 'Month or Year is invalid\n';
    }

    if (errorMsg2 !== '') {
        displayError2(errorMsg2);
        return false;
    }
    return true;
}





document.querySelector('#form-container').addEventListener('submit', submitHandler);