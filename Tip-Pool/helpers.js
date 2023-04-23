
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

const appendDeleteBtn = (tr, type) => {
  let deleteTd = document.createElement('td');
  deleteTd.innerText = 'X';

  deleteTd.addEventListener('click', removeTr);

  tr.append(deleteTd);
};

const removeTr = (e) => {
  let element = e.target.closest('tr');

  delete allPayments[element.id];
  delete allServers[element.id];

  element.parentNode.removeChild(element);
  updateServerTable();
}
