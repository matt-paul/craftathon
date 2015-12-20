$( document ).ready(function() {

  var connectedLink = "http://serket.uk/badges/badgelist"

  $.getJSON(connectedLink, function showData(data){


// Third chart - Month of September

    var dates = [0,0,0,0,0,0]
    var datesTrue = [0,0,0,0,0,0]
    var month;

    // Pushing valid data for september into test month array

    var testMonth = []

    for (var i=0; i<data.length; i++){
      if (data[i].dispenseDate){
        month = data[i].dispenseDate.substr(5,2)
        if (month === "09"){
          testMonth.push(data[i])
        };
      };
    };

    for (var i=0; i<data.length; i++){
      if (data[i].statePattern && !data[i].medicineName){
        console.log(data[i].pharmacyName);
      }
    }


    daysTrue = [0,0,0,0,0,0,0]

    days = [0,0,0,0,0,0,0]

    for (var i=0; i<testMonth.length; i++){
      if (testMonth[i].dispenseDate && data[i].statePattern){
        day= testMonth[i].dispenseDate.substr(8,2)
        // console.log(day)
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
        // console.log(day)
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

    // console.log(daysTrue)


    var data4 = {
      labels: ['12', '14', '15', '21', '24', '26', '30'],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "#1A9394",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: days
          },
                   {
              label: "My First dataset",
              fillColor: "#42BDD2",
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
      // console.log(percentage2)
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
    });


  });

});
