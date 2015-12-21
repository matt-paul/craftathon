// Hover over Nav Bar

$(function() {
  var $navList;
  $navList = $('ul');
    $('li').hover(function() {
      $(this).toggleClass("highlight-menu-item")
    });
});

// Helper method to throw out duplicated items

function unique(list) {
  var result = [];
  $.each(list, function(index, value) {
    if ($.inArray(value, result) == -1) result.push(value);
  });
  return result;
}

//Get data from API

var connectedLink2 = "http://serket.uk/badges/badgelist"

$.getJSON(connectedLink2, function showData(data){

  // throw out everything without a date

  var dataWithDate = data.filter(datum => datum.dispenseDate);

  data = dataWithDate;

  // throw out everything with an illegitimate medicine name

  function happyMedName(name) {
    if (!name) return false;
    var words = [];
    words = name.split(" ").map(word => word.toLowerCase());
    var hasMG = words.reduce(((acc, word) => (acc || word.match(/mc?g/g))), false);
    return (words.length > 2) && hasMG;
  }

  var dataHappyName = data.filter(datum => happyMedName(datum.medicineName));
  console.log("Length of HappyName data: ", dataHappyName.length);

//Messing around

  function noMedName(name) {
    var noNamePrescrips = [];
    if (name) return false;
    noNamePrescrips.push(id)
  }

  var dataNoMedName = data.filter(datum => noMedName(datum.medicineName));
  console.log("Unhappy names", dataNoMedName.length);

  // extract the medicine names that make sense

  function getMedName(fullName) {
    if (fullName === "") return "";
    return fullName.toLowerCase().split(" ")[0]
  }

  var happyNameList = unique(dataHappyName.map(datum => getMedName(datum.medicineName))).sort();
  console.log("number of HappyNames: ", happyNameList.length);

  // count up the number of times each medicine is prescribed

  function howManyTimes(medName, data) {
    return data.reduce(((acc, datum) => acc + (getMedName(datum.medicineName) == medName ? 1 : 0)), 0);
  }

  var happyNameScore = happyNameList.map(name => howManyTimes(name, dataHappyName));

  // zip up the two arrays, sort them, unzips again

  var happyNameBoth = happyNameList.map((name, index) => [name, happyNameScore[index]]);

  var sortedBoth = happyNameBoth.sort((a, b) => (b[1] - a[1]));

  var sortedNames = sortedBoth.map(pair => pair[0]);
  var sortedScores = sortedBoth.map(pair => pair[1]);

  var dispenseDateTimes = dataHappyName.map(datum => datum.dispenseDate).sort();

  var justTheDates = dispenseDateTimes.map(dateTime => dateTime.split('T')[0]);
  var justTheTimes = dispenseDateTimes.map(dateTime => dateTime.split('T')[1]).sort();

  var justTheHours = justTheTimes.map(time => time.slice(0,2));

  // console.log(dispenseDateTimes);
  // console.log(justTheDates);
  // console.log(justTheTimes);
  // console.log(unique(justTheHours));

});
