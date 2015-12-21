describe ('date picker', function() {

  it ('should recognise the mockData as an object', function() {
    expect(typeof mockData).toBe("object");
  });

  it ('should correctly pick dates within a particular month', function() {
    result = {"2015-12-14" : 5}
     expect(datePicker(mockData)).toEqual(result);
  });

});


