describe ('date logic', function() {

  var validDateRangeData;

  it ('should recognise the mockData as an object', function() {
    expect(typeof mockData).toBe("object");
  });

  describe('datePicker', function() {

    it ('should correctly pick dates within a particular month', function() {
      result = {"2015-12-14" : 5}
       expect(datePicker(mockData)).toEqual(result);
    });

  });

  describe('selecting date range', function() {

    it('should correctly select a date within the selected date period', function() {
      expect(dateWithinRange(mockData, "20140101", "20160101")).toEqual(true);
    });

  });

  describe('data within date ranges added into valid data', function() {

    it('should be pushed into valid data object', function() {
      expect(validDateRangeData).toEqual(5);//placeholder
  });

});
