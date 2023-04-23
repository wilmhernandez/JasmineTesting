describe("Helpers test (with setup and teardown)", () => {
  beforeEach(() => {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it("Should return running total of billAmt on sumPaymentTotal()", () => {
    expect(sumPaymentTotal("billAmt")).toEqual(100);

    billAmtInput.value = 100;
    tipAmtInput.value = 0;

    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(200);
  });

  it("Should return running total of tipAmt on sumPaymentTotal()", () => {
    expect(sumPaymentTotal("tipAmt")).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toEqual(40);
  });

  it("Should calculate tip percentage on calculateTipPercent()", () => {
    expect(calculateTipPercent(100, 20)).toEqual(20);
  });

  it("Should create new td and appends to tr on appendTd(tr,value)", () => {
    let newTr = document.createElement("tr");

    appendTd(newTr, "value");

    expect(newTr.firstChild.innerHTML).toEqual("value");
    expect(newTr.children.length).toEqual(1);
  });

  it("Should create delete td and append to tr on appendDeleteTd(tr, type)", () => {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);

    expect(newTr.firstChild.innerHTML).toEqual("X");
    expect(newTr.children.length).toEqual(1);
  });

  afterEach(() => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentIds = 0;
    allPayments = {};
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});
