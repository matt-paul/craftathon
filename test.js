var connectedLink1 = "http://serket.uk/badges/badgelist-format";

$.getJSON(connectedLink1, function showData(data){

  var data0 = data.data[610]
  var data1 = data.data[739]


  console.log(data0)
  console.log(data1)

});

var connectedLink2 = "http://serket.uk/badges/badgelist"

$.getJSON(connectedLink2, function showData(data){

  var data0 = data[610]
  var data1 = data[739]


  for (var i=0; i<data.length; i++){
    if (data[i].dispenseDate){
      console.log(data[i].dispenseDate.substr(0,7))
    };
  };

});
