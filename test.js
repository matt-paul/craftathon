var connectedLink = "http://serket.uk/badges/badgelist-format";

$.getJSON(connectedLink, function showData(data){

  var data0 = data.data[610]
  var data1 = data.data[1]


  console.log(data0)
  console.log(data1)

});