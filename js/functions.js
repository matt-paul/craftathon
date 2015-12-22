function datePicker(data) {
  dates = {};
  for(i = 0; i < data.length; i++) {
    if (data[i].dispenseDate ) {
    key = data[i].dispenseDate.substring(0,10);
    dates[key] = dates[key] ? dates[key]+1 : 1;
    }
  }
  return dates;
};

function selectDateRangeData(data, startDate, endDate) {
  validDateRangeData = [];
  for(i = 0; i < data.length; i++) {
  //   if data[i].dispenseDate && dateWithinRange(data, startDate, endDate) {
  //     validDateRangeData.push(data[i]);
  //   };
  };
};

function dateWithinRange(data, startDate, endDate) {
  for(i = 0; i < data.length; i++) {
    var findDate = data[i].dispenseDate.substring(0,10);
    var strippedDate = findDate.replace("-", "")
    return strippedDate >= startDate && strippedDate <= endDate ? true : false;
  };

  // function dateWithinRange(data, startDate, endDate) {
  //   for(i = 0; i < data.length; i++) {
  //     var findDate = data[i].dispenseDate.substring(0,10);
  //     var strippedDate = findDate.replace("-", "")
  //     return strippedDate >= startDate && strippedDate <= endDate ? true : false;
  //   };
};
