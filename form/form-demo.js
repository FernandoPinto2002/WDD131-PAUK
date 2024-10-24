// form-demo.js
function togglePaymentDetails(e) {
    // Get references to form elements
    const creditCardContainer = document.querySelector('#credit-card-input');
    const paypalContainer = document.querySelector('#paypal-input');
    const creditCardInput = document.querySelector('#ccn');
    const paypalInput = document.querySelector('#pname');
  

    creditCardContainer.classList.add('hide');
    paypalContainer.classList.add('hide');
    creditCardInput.required = false;
    paypalInput.required = false;

    if (e.target.value === 'credit-card') {
      creditCardContainer.classList.remove('hide');
      creditCardInput.required = true; 
    } else if (e.target.value === 'paypal') {
      paypalContainer.classList.remove('hide');
      paypalInput.required = true; 
    }
  }
  
  
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  document.getElementById('payment-method').addEventListener('change', togglePaymentDetails);

  function validateForm(event) {
    const theForm = event.target;
  
  
    const errors = [];
    let isValid = true;
  

    if (theForm.paymentMethod.value === "creditCard") {
      if (theForm.creditCardNumber.value !== "1234123412341234") {
        isValid = false;
        errors.push("Invalid Credit Card Number");
      }
    }
  

    if (theForm.fullName.value !== "Bob") {
      isValid = false;
      errors.push("Your name is not Bob");
    }
    if (!isValid) {
      event.preventDefault(); 
      showErrors(errors);      
      return false;            
    }
  }
  

document.querySelector("#checkoutForm").addEventListener("submit", validateForm);