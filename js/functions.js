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
