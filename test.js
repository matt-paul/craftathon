$( document ).ready(function() {

  var connectedLink = "http://serket.uk/badges/badgelist"

  $.getJSON(connectedLink, function showData(data){


// Third chart

    var dates = [0,0,0,0,0,0]
    var datesTrue = [0,0,0,0,0,0]
    var month;

    var testMonth = []

    for (var i=0; i<data.length; i++){
      if (data[i].dispenseDate){
        month = data[i].dispenseDate.substr(5,2)
        if (month === "09"){
          testMonth.push(data[i])
        };
      };
    };

    console.log(dates)



    for (var i=0; i<data.length; i++){
      console.log(data[i].dispenseDate)
    };

    daysTrue = [0,0,0,0,0,0,0]

    days = [0,0,0,0,0,0,0]

    for (var i=0; i<testMonth.length; i++){
      if (testMonth[i].dispenseDate && data[i].statePattern){
        day= testMonth[i].dispenseDate.substr(8,2)
        console.log(day)
        if (day === "12"){
          daysTrue[0]+=1
        } else if (day === "14"){
          daysTrue[1]+=1
        } else if (day === "15"){
          daysTrue[2]+=1
        } else if (day === "21"){
          daysTrue[3]+=1
        } else if (day === "24"){
          daysTrue[4]+=1
        } else if (day === "26"){
          daysTrue[5]+=1
        } else if (day === "30"){
          daysTrue[6]+=1
        };
      };
    };

    for (var i=0; i<testMonth.length; i++){
      if (testMonth[i].dispenseDate){
        day= testMonth[i].dispenseDate.substr(8,2)
        console.log(day)
        if (day === "12"){
          days[0]+=1
        } else if (day === "14"){
          days[1]+=1
        } else if (day === "15"){
          days[2]+=1
        } else if (day === "21"){
          days[3]+=1
        } else if (day === "24"){
          days[4]+=1
        } else if (day === "26"){
          days[5]+=1
        } else if (day === "30"){
          days[6]+=1
        };
      };
    };

    console.log(daysTrue)


    var data4 = {
      labels: ['12', '14', '15', '21', '24', '26', '30'],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: days
          },
                   {
              label: "My First dataset",
              fillColor: "rgba(100,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: daysTrue
          },

      ]
    };

    var percentage2 = [];

    for (var i=0; i<days.length; i++){
      percentage2[i] = Math.round(daysTrue[i]*100/days[i])
    };

    var ctx = document.getElementById("myChart3").getContext("2d");
    var myLineChart = new Chart(ctx).Bar(data4, {
      showTooltips: false,
      onAnimationComplete: function () {

        var ctx = this.chart.ctx;
        ctx.font = this.scale.font;
        ctx.fillStyle = this.scale.textColor
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        ourBars = this.datasets[1].bars

        this.datasets[1].bars.forEach(function (bar) {

          ctx.fillText(percentage2[ourBars.indexOf(bar)], bar.x, bar.y - 5);

        });

      }
    })

// First chart

    for (var i=0; i<data.length; i++){
      if (data[i].dispenseDate){
        month = data[i].dispenseDate.substr(5,2)
        if (month === "08"){
          dates[0]+=1
        } else if (month === "09"){
          dates[1]+=1
        } else if (month === "10"){
          dates[2]+=1
        } else if (month === "11"){
          dates[3]+=1
        } else if (month === "12"){
          dates[4]+=1
        } else if (month === "13"){
          dates[5]+=1;
        };
      };
    };


    for (var i=0; i<data.length; i++){
      if (data[i].dispenseDate && data[i].statePattern){
        month = data[i].dispenseDate.substr(5,2)
        if (month === "08"){
          datesTrue[0]+=1
        } else if (month === "09"){
          datesTrue[1]+=1
        } else if (month === "10"){
          datesTrue[2]+=1
        } else if (month === "11"){
          datesTrue[3]+=1
        } else if (month === "12"){
          datesTrue[4]+=1
        } else if (month === "13"){
          datesTrue[5]+=1;
        };
      };
    };

    var percentage = [];

    for (var i=0; i<dates.length; i++){
      percentage[i] = Math.round(datesTrue[i]*100/dates[i])
    };

    console.log(percentage);

    var data2 = {
      labels: ["August", "September", "October", "November", "December", "January"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: dates
          },
          {
              label: "My First dataset",
              fillColor: "rgba(100,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: datesTrue
          },
      ]
    };


    var ctx = document.getElementById("myChart").getContext("2d");
    var myLineChart = new Chart(ctx).Bar(data2, {
      showTooltips: false,
      onAnimationComplete: function () {

        var ctx = this.chart.ctx;
        ctx.font = this.scale.font;
        ctx.fillStyle = this.scale.textColor
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        ourBars = this.datasets[1].bars

        this.datasets[1].bars.forEach(function (bar) {

          ctx.fillText(percentage[ourBars.indexOf(bar)], bar.x, bar.y - 5);

        });

      }
    });

    // second chart showing the number of times a medicine has been prescribed

  //   var names = ["aspirin", "uniphyllin", "amitriptyline", "omeprazole", "paracetamol", "simvastatin", "diazepam", "indapamide", "bisoprolol", "metformin", "vitamin", "amoxicillin", "prednisolone", "co-codamol", "loratadine", "mirtazapine", "flucloxacillin", "felodipine", "ranitidine", "buprenorphine", "zoton", "furosemide", "desogestrel", "plendil", "lisinopril", "atenolol", "senna", "sertraline", "amiodarone", "thiamine", "tramadol", "fexofenadine", "codeine", "loperamide"]
  //
  //
  //   var nums = [115, 108, 37, 37, 17, 16, 16, 11, 10, 7, 6, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  //
  //   var data3 = {
  //     labels: names,
  //     datasets: [
  //         {
  //             label: "My First dataset",
  //             fillColor: "rgba(220,220,220,0.2)",
  //             strokeColor: "rgba(220,220,220,1)",
  //             pointColor: "rgba(220,220,220,1)",
  //             pointStrokeColor: "#fff",
  //             pointHighlightFill: "#fff",
  //             pointHighlightStroke: "rgba(220,220,220,1)",
  //             data: nums
  //         },
  //
  //     ]
  //   };
  //
  //
  // var ctx = document.getElementById("myChart2").getContext("2d");
  // var myLineChart = new Chart(ctx).Bar(data3)

  });

});
