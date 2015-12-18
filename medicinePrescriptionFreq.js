$( document ).ready(function() {

  var connectedLink = "http://serket.uk/badges/badgelist"

  $.getJSON(connectedLink, function showData(data){


  // second chart showing the number of times a medicine has been prescribed

    var names = ["aspirin", "uniphyllin", "amitriptyline", "omeprazole", "paracetamol", "simvastatin", "diazepam", "indapamide", "bisoprolol", "metformin", "vitamin", "amoxicillin", "prednisolone", "co-codamol", "loratadine", "mirtazapine", "flucloxacillin", "felodipine", "ranitidine", "buprenorphine", "zoton", "furosemide", "desogestrel", "plendil", "lisinopril", "atenolol", "senna", "sertraline", "amiodarone", "thiamine", "tramadol", "fexofenadine", "codeine", "loperamide"]


    var nums = [115, 108, 37, 37, 17, 16, 16, 11, 10, 7, 6, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    var data3 = {
      labels: names,
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: nums
          },
      ]
    };

    var ctx = document.getElementById("myChart2").getContext("2d");
    var myLineChart = new Chart(ctx).Bar(data3)

  });

});
