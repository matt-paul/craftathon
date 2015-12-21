// State Pattern Accuracy

$( document ).ready(function() {

  var connectedLink = "http://serket.uk/badges/badgelist"

  $.getJSON(connectedLink, function showData(data){

    var dates = [0,0,0,0]
    var datesTrue = [0,0,0,0]
    var month;


    for (var i=0; i<data.length; i++){
      if (data[i].dispenseDate){
        month = data[i].dispenseDate.substr(5,2)
           if (month === "09"){
          dates[0]+=1
        } else if (month === "10"){
          dates[1]+=1
        } else if (month === "11"){
          dates[2]+=1
        } else if (month === "12"){
          dates[3]+=1;
        };
      };
    };

    for (var i=0; i<data.length; i++){
      if (data[i].dispenseDate && data[i].statePattern){
        month = data[i].dispenseDate.substr(5,2)
           if (month === "09"){
          datesTrue[0]+=1
        } else if (month === "10"){
          datesTrue[1]+=1
        } else if (month === "11"){
          datesTrue[2]+=1
        } else if (month === "12"){
          datesTrue[3]+=1;
        };
      };
    };

    var percentage = [];

    for (var i=0; i<dates.length; i++){
      percentage[i] = Math.round(datesTrue[i]*100/dates[i])
    };

    var data2 = {
      labels: ["September", "October", "November", "December"],


      datasets: [
          {
              label: "My First dataset",
              fillColor: "#1A9394",
                            // fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: dates
          },
          {
              label: "My First dataset",
              fillColor: "#42BDD2",
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
      responsive: true,
      maintainAspectRatio: true,
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


      });

    });
