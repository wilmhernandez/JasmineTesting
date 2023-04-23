window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initialValues = {
    amount: 100000,
    years: 30,
    rate: 5
  };

  document.getElementById('loan-amount').value = initialValues.amount;
  document.getElementById('loan-years').value = initialValues.years;
  document.getElementById('loan-rate').value = initialValues.rate;


  updateMonthly((calculateMonthlyPayment(initialValues)))
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly((calculateMonthlyPayment(getCurrentUIValues())))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const {amount, years, rate} = values;

  if (isNaN(amount) || isNaN(years) || isNaN(rate)) {
    throw new Error('All inputs must be numeric')
  }
  
  let P = values.amount;
  let i = ((values.rate/100)/12)
  let n = values.years*12

  return ((P*i)/(1-Math.pow(1+i,-n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById('monthly-payment');

  monthlyPayment.innerText = `$${monthly}`
}
