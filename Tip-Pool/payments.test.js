describe('Payments test (with setup and tear-down)', () => {
  beforeEach (()=> {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  })

  it('Should add new payment allPayments on submitPaymentInfo()', () => {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].billAmt).toEqual('100')
    expect(allPayments['payment' + paymentId].tipAmt).toEqual('20')
    expect(allPayments['payment' + paymentId].tipPercent).toBe(20)
  });

  it('Should not add to allPayments if billAmtInput is empty', () => {
    billAmtInput.value = '';
    createCurPayment();

    expect(Object.keys(allPayments).length).toEqual(0);
  })

  it('Should create new payment on createCurPayment()', () => {
    let payment = {
      billAmt: '100',
      tipAmt: '20',
      tipPercent: 20
    }
    
    expect(createCurPayment()).toEqual(payment);
  })

  it('Should update summaryTable on createCurPayment()', () => {
    let curPayment = createCurPayment();
    appendPaymentTable(curPayment);

    let table = document.querySelectorAll('#paymentTable tbody tr td');

    expect(table.length).toEqual(4);
    expect(table[0].innerHTML).toEqual('$100');
    expect(table[1].innerHTML).toEqual('$20');
    expect(table[2].innerHTML).toEqual('20%');
    expect(table[3].innerHTML).toEqual('X');
  })
  it('Should not create payment on createCurPayment() when inputs are empty', () => {
    billAmtInput.value = '';
    tipAmtInput.value = '';

    expect(createCurPayment()).toBe(undefined);
  })

  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
    paymentTbody.innerText = '';
    paymentId = 0;
  })
}) 