describe('calculateMonthlyPayment test', () => {
  it('should calculate the monthly rate correctly', function () {
    // ...
    let values = {
      amount: 10000,
      years: 5,
      rate: 3
    }
    expect(calculateMonthlyPayment(values)).toBe('179.69')
  });
  
  it("should return a result with 2 decimal places", function() {
    // ..
    let values = {
      amount: 100000,
      years: 10,
      rate: 50
    }
    expect(calculateMonthlyPayment(values)).toBe('4197.97')
  });

  it("should throw error if values are not numeric", function() {
    // ..
    let values = {
      amount: 'hello',
      years: 10,
      rate: 50
    }
    expect(()=>calculateMonthlyPayment(values)).toThrowError();
  });

  it("should throw error if values are not numeric", function() {
    // ..
    let values = {
      amount: 250000,
      years: 'hello',
      rate: 50
    }
    expect(()=>calculateMonthlyPayment(values)).toThrowError();
  });
  
  it("should throw error if values are not numeric", function() {
    // ..
    let values = {
      amount: 10,
      years: 10,
      rate: 'hello'
    }
    expect(()=>calculateMonthlyPayment(values)).toThrowError();
  });
});




/// etc
