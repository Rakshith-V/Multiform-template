$(document).ready(function(){

if($('#lineselect').length){

	$("#newline").hide();

}

if($('#tablereports').length){
	var table = $('#tablereports').DataTable({
		searching: false,
		paging: false,
		destroy: true,
        dom: 'Bfrtip',
        buttons: [
				'csv', 'excel', 'pdf'
        ]
    });
}

if($('#workordersreports').length){
	var table = $('#workordersreports').DataTable({
		searching: false,
		paging: false,
		destroy: true,
        dom: 'Bfrtip',
        buttons: [
				{
					extend: 'pdf',
					title: 'Workorders Details',
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'Workorders Details'
			},
			{
					extend: 'excel',
					title: 'Workorders Details'
			}
        ]
    });
}
//This is for getting all the record of workorders
if($('#workorder_table').length){
	var table = $('#workorder_table').DataTable({
		searching: false,
		paging: false,
		destroy: true,
		"ordering": false,
        dom: 'Bfrtip',
		"initComplete": function(settings, json) {
			$('#loadingSpinner').hide();
			$('#full_workorder_details').show();
		},
        buttons: [
				{
					extend: 'pdf',
					title: 'Workorders Details',
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'Workorders Details'
			},
			{
					extend: 'excel',
					title: 'Workorders Details'
			}
        ]
    });
}

if($('#tabletestbench').length){
	var table = $('#tabletestbench').DataTable({
		searching: false,
		paging: false,
		destroy: true,
        dom: 'Bfrtip',
		"ordering": false,
		info: false,
        buttons: [
				{
					extend: 'pdf',
					title: gettitlebyid('#tabletestbench'),
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: gettitlebyid('#tabletestbench')
			},
			{
					extend: 'excel',
					title: gettitlebyid('#tabletestbench')
			}
        ]
    });
}
// this for getting all the testbench result
if($('#testbench_table').length){
	var table = $('#testbench_table').DataTable({
		searching: false,
		paging: false,
		destroy: true,
        dom: 'Bfrtip',
		"ordering": false,
		"initComplete": function(settings, json) {
			$('#loadingSpinner').hide();
			$('#full_testbench_details').show();
		},
        buttons: [
				{
					extend: 'pdf',
					title: gettitlebyid('#testbench_table'),
					orientation: 'landscape',
					pageSize: 'LEGAL',
					title: 'Testbench Details',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'Testbench Details'
			},
			{
					extend: 'excel',
					title: 'Testbench Details'
			}
        ]
    });
}
if($('#alllinesreworkdetailes').length){
	var table = $('#alllinesreworkdetailes').DataTable({
		searching: false,
		paging: false,
		destroy: true,
        dom: 'Bfrtip',
        buttons: [
				{
					extend: 'pdf',
					title: gettitlebyid('#alllinesreworkdetailes'),
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: gettitlebyid('#alllinesreworkdetailes')
			},
			{
					extend: 'excel',
					title: gettitlebyid('#alllinesreworkdetailes')
			}
        ]
    });
}
if($('#linesreworkdetailes').length){
	var table = $('#linesreworkdetailes').DataTable({
		searching: false,
		paging: false,
		destroy: true,
        dom: 'Bfrtip',
        buttons: [
				{
					extend: 'pdf',
					title: 'All Lines Rework Details ',
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'All Lines Rework Details '
			},
			{
					extend: 'excel',
					title: 'All Lines Rework Details '
			}
        ]
    });
}
if($('#tablereportsline').length){
	var table = $('#tablereportsline').DataTable({
		destroy: true,
		paging: false,
        dom: 'Bfrtip',
		stateSave: true, //added for storing the last serach
         buttons: [
				{
					extend: 'pdf',
					title: 'Creation Details',
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'Creation Details'
			},
			{
					extend: 'excel',
					title: 'Creation Details'
			}
        ]
    });
}
if($('#tablereportsline_listing').length){
	var table = $('#tablereportsline_listing').DataTable({
		destroy: true,
		paging: false,
        dom: 'Bfrtip',
		searching: false,
		info: false,
		stateSave: true, //added for storing the last serach
         buttons: [
				{
					extend: 'pdf',
					title: 'Creation Details',
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'Creation Details'
			},
			{
					extend: 'excel',
					title: 'Creation Details'
			}
        ]
    });
}

if($('#tablereportskpi').length){
	var table = $('#tablereportskpi').DataTable({
		destroy: true,
        dom: 'Bfrtip',
         buttons: [
				{
					extend: 'pdf',
					title: 'Factory KPI Details',
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'Factory KPI Details'
			},
			{
					extend: 'excel',
					title: 'Factory KPI Details'
			}
        ]
    });
}

if($('#alllineskpidetailes').length){
	var table = $('#alllineskpidetailes').DataTable({
		destroy: true,
        dom: 'Bfrtip',
         buttons: [
				{
					extend: 'pdf',
					title: 'All Line KPI Details',
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'All Line KPI Details'
			},
			{
					extend: 'excel',
					title: 'All Line KPI Details'
			}
        ]
    });
}
if($('#stationkpidetailes').length){
	var table = $('#stationkpidetailes').DataTable({
		destroy: true,
        dom: 'Bfrtip',
         buttons: [
				{
					extend: 'pdf',
					title: gettitlebyid('#stationkpidetailes'),
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: gettitlebyid('#stationkpidetailes')
			},
			{
					extend: 'excel',
					title: gettitlebyid('#stationkpidetailes')
			}
        ]
    });
}
if($('#linekpidetailes').length){
	var table = $('#linekpidetailes').DataTable({
		destroy: true,
        dom: 'Bfrtip',
         buttons: [
				{
					extend: 'pdf',
					title: gettitlebyid('#linekpidetailes'),
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: gettitlebyid('#linekpidetailes')
			},
			{
					extend: 'excel',
					title: gettitlebyid('#linekpidetailes')
			}
        ]
    });
}
if($('#linebreackdowndetailes').length){
	var table = $('#linebreackdowndetailes').DataTable({
		destroy: true,
        dom: 'Bfrtip',
         buttons: [
				{
					extend: 'pdf',
					title: gettitlebyid('#linebreackdowndetailes'),
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: gettitlebyid('#linebreackdowndetailes')
			},
			{
					extend: 'excel',
					title: gettitlebyid('#linebreackdowndetailes')
			}
        ]
    });
}
if($('#alllinebreakdowndetailes').length){
	var table = $('#alllinebreakdowndetailes').DataTable({
		destroy: true,
        dom: 'Bfrtip',
         buttons: [
				{
					extend: 'pdf',
					title: 'All Line Breakdown Details',
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'All Line Breakdown Details'
			},
			{
					extend: 'excel',
					title: 'All Line Breakdown Details'
			}
        ]
    });
}

if($('#factorybreakdowndetailes').length){
	var table = $('#factorybreakdowndetailes').DataTable({
		destroy: true,
        dom: 'Bfrtip',
         buttons: [
				{
					extend: 'pdf',
					title: 'Factory Breakdown Details',
					orientation: 'landscape',
					pageSize: 'LEGAL',
					exportOptions:{
							columns: ':visible'
					}
			},
			{
					extend: 'csv',
					title: 'Factory Breakdown Details'
			},
			{
					extend: 'excel',
					title: 'Factory Breakdown Details'
			}
        ]
    });
}


if($('.tblhgt').length){
	tblrep = $('.tbls').height();
	$('.tblhgt').height(tblrep);
}

if($('.sasa').length){
    // Select and loop the container element of the elements you want to equalise
    $('.container').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.sasa', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.sasa',this).height(highestBox);
                    
    }); 
}

if($('.same').length){
    // Select and loop the container element of the elements you want to equalise
    $('.container').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.same', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.same',this).height(highestBox);
	  $('.table',this).height(highestBox);
                    
    }); 
    // Select and loop the container element of the elements you want to equalise
    $('.container-fluid').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.same', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.same',this).height(highestBox);
	  $('.table',this).height(highestBox);
                    
    }); 
}
});

if($('#graph').length){
Highcharts.chart('graph', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
});
}

if($('#pie').length){
// Build the chart
Highcharts.chart('pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares January, 2015 to May, 2015'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Microsoft Internet Explorer',
            y: 56.33
        }, {
            name: 'Chrome',
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: 'Firefox',
            y: 10.38
        }, {
            name: 'Safari',
            y: 4.77
        }, {
            name: 'Opera',
            y: 0.91
        }, {
            name: 'Proprietary or Undetectable',
            y: 0.2
        }]
    }]
});
}
if($('#don').length){
	
Chart.pluginService.register({
	afterUpdate: function (chart) {
		if (chart.config.options.elements.center) {
			var helpers = Chart.helpers;
			var centerConfig = chart.config.options.elements.center;
			var globalConfig = Chart.defaults.global;
			var ctx = chart.chart.ctx;

			var fontStyle = helpers.getValueOrDefault(centerConfig.fontStyle, globalConfig.defaultFontStyle);
			var fontFamily = helpers.getValueOrDefault(centerConfig.fontFamily, globalConfig.defaultFontFamily);

			if (centerConfig.fontSize)
				var fontSize = centerConfig.fontSize;
			// figure out the best font size, if one is not specified
			else {
				ctx.save();
				var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
				var maxFontSize = helpers.getValueOrDefault(centerConfig.maxFontSize, 256);
				var maxText = helpers.getValueOrDefault(centerConfig.maxText, centerConfig.text);

				do {
					ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
					var textWidth = ctx.measureText(maxText).width;

					// check if it fits, is within configured limits and that we are not simply toggling back and forth
					if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
						fontSize += 1;
					else {
						// reverse last step
						fontSize -= 1;
						break;
					}
				} while (true)
				ctx.restore();
			}

			// save properties
			chart.center = {
				font: helpers.fontString(fontSize, fontStyle, fontFamily),
				fillStyle: helpers.getValueOrDefault(centerConfig.fontColor, globalConfig.defaultFontColor)
			};
		}
	},
	afterDraw: function (chart) {
		if (chart.center) {
			var centerConfig = chart.config.options.elements.center;
			var ctx = chart.chart.ctx;

			ctx.save();
			ctx.font = chart.center.font;
			ctx.fillStyle = chart.center.fillStyle;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
			var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
			ctx.fillText(centerConfig.text, centerX, centerY);
			ctx.restore();
		}
	},
})

var ctx = $("#don");

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
	options: {
        legend: {
				display: true,
				position: 'bottom',
				labels: {
					fontColor: 'black',
					defaultFontFamily: 'ABBvoice',
					defaultFontSize: '13'
				}
			},
		elements: {
			center: {
				// the longest text that could appear in the center
				maxText: '100%',
				text: 'Breakdown',
				fontColor: '#000000',
				fontFamily: "'ABBvoice'",
				fontStyle: 'normal',
				// fontSize: 12,
				// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
				// if these are not specified either, we default to 1 and 256
				minFontSize: 1,
				maxFontSize: 20,
			}
        },
        responsive: true
	}
});

}
if($('#rework').length){

Chart.pluginService.register({
	afterUpdate: function (chart) {
		if (chart.config.options.elements.center) {
			var helpers = Chart.helpers;
			var centerConfig = chart.config.options.elements.center;
			var globalConfig = Chart.defaults.global;
			var ctx = chart.chart.ctx;

			var fontStyle = helpers.getValueOrDefault(centerConfig.fontStyle, globalConfig.defaultFontStyle);
			var fontFamily = helpers.getValueOrDefault(centerConfig.fontFamily, globalConfig.defaultFontFamily);

			if (centerConfig.fontSize)
				var fontSize = centerConfig.fontSize;
			// figure out the best font size, if one is not specified
			else {
				ctx.save();
				var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
				var maxFontSize = helpers.getValueOrDefault(centerConfig.maxFontSize, 256);
				var maxText = helpers.getValueOrDefault(centerConfig.maxText, centerConfig.text);

				do {
					ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
					var textWidth = ctx.measureText(maxText).width;

					// check if it fits, is within configured limits and that we are not simply toggling back and forth
					if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
						fontSize += 1;
					else {
						// reverse last step
						fontSize -= 1;
						break;
					}
				} while (true)
				ctx.restore();
			}

			// save properties
			chart.center = {
				font: helpers.fontString(fontSize, fontStyle, fontFamily),
				fillStyle: helpers.getValueOrDefault(centerConfig.fontColor, globalConfig.defaultFontColor)
			};
		}
	},
	afterDraw: function (chart) {
		if (chart.center) {
			var centerConfig = chart.config.options.elements.center;
			var ctx = chart.chart.ctx;

			ctx.save();
			ctx.font = chart.center.font;
			ctx.fillStyle = chart.center.fillStyle;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
			var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
			ctx.fillText(centerConfig.text, centerX, centerY);
			ctx.restore();
		}
	},
})

var ctx = $("#rework");

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: datarework,
	options: {
        legend: {
            display: true,
			position: 'bottom',
            labels: {
                fontColor: 'black',
				defaultFontFamily: 'ABBvoice',
				defaultFontSize: '13'
            }
        },
		elements: {
			center: {
				// the longest text that could appear in the center
				maxText: '100%',
				text: 'Rework',
				fontColor: '#000000',
				fontFamily: "'ABBvoice'",
				fontStyle: 'normal',
				// fontSize: 12,
				// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
				// if these are not specified either, we default to 1 and 256
				minFontSize: 1,
				maxFontSize: 20,
			}
        },
        responsive: true
	}
});

}

if($('#barline2').length){

var options = {
  type: 'line',
  data: databar2,
  options: {
  	scales: {
		xAxes: [{
                ticks: {
					display: true
				},
			scaleLabel: {
				display: true,
				labelString: 'Date (last 30 days)'
			}
            }],
    	yAxes: [{
        ticks: {
			reverse: false
        },
			scaleLabel: {
				display: true,
				labelString: 'Percentage (%)'
			}
      }]
    },
	legend: {
		display: true,
		position: 'bottom',
		labels: {
			fontColor: 'black',
			defaultFontFamily: 'ABBvoice',
			defaultFontSize: '13'
		}
	}
  }
}

var ctx = $("#barline2");
var mykpimaindash = new Chart(ctx, options);

}

if($('#barline3').length){

var options = {
  type: 'line',
  data: databar3,
  options: {
  	scales: {
		xAxes: [{
                ticks: {
                    display: true
                },
				scaleLabel: {
					display: true,
					labelString: 'Time (hourly)'
				}
            }],
    	yAxes: [{
        ticks: {
			reverse: false
        },
		scaleLabel: {
			display: true,
			labelString: 'Count'
		}
      }]
    },
	legend: {
		display: true,
		position: 'bottom',
		labels: {
			fontColor: 'black',
			defaultFontFamily: 'ABBvoice',
			defaultFontSize: '13'
		}
	}
  }
}

var ctx = $("#barline3");
var myhourlymaindash = new Chart(ctx, options);

}

if($('#barline4').length){

var ctx = $("#barline4");

var myBreakdownparatomaindash = new Chart(ctx,{
    type: 'bar',
    data: databar4,
	options: {
        legend: {
            display: false,
			position: 'bottom',
            labels: {
                fontColor: 'black',
				defaultFontFamily: 'ABBvoice',
				defaultFontSize: '13'
            }
        },
		scales:
		{
            xAxes: [{
                ticks: {
					display: false
				}
            }],

            yAxes: [{
                position: "left",
                id: "y-axis-1",
				stacked: false,
                ticks: {
                    suggestedMin: 0
                },
                scaleLabel: {
                    display: true,
                    labelString: "Hours"
                }
            },{
                position: "right",
                id: "y-axis-2",
				stacked: false,
                ticks: {
                    suggestedMin: 0
                },
                scaleLabel: {
                    display: true,
                    labelString: "percentage(%)"
                }
            }]
        }
	}
});

}

if($('#kpiopqagraphrep').length){

var ctx = $("#kpiopqagraphrep");

var myBubbleChart = new Chart(ctx,{
    type: 'line',
    data: data,
	options: {
        legend: {
            display: true,
			position: 'bottom',
            labels: {
                fontColor: 'black',
				defaultFontFamily: 'ABBvoice',
				defaultFontSize: '13'
            }
        },
		scales:
		{
			xAxes: [{
				ticks: {
					display: true
				}
			}]
		}
	}
});

}

if($('#kpibreakgraphrep').length){

var tablebreak = $('#linebreackdowndetailes').DataTable();
function searchstation(str){
	tablebreak.search('').draw();
	tablebreak.search(str).draw();
};

var ctx = $("#kpibreakgraphrep");

var myBubbleChart = new Chart(ctx,{
    type: 'bar',
    data: data,
	options: {
        legend: {
            display: false,
			position: 'bottom',
            labels: {
                fontColor: 'black',
				defaultFontFamily: 'ABBvoice',
				defaultFontSize: '13'
            }
        },
		scales:
		{
			xAxes: [{
				ticks: {
					display: true
				}
			}],
			yAxes: [{
				scaleLabel:{
					display: true,
					labelstring: 'Minutes'
				}
			}]
		}
	}
});

}

if($('#hourlyprodgraph').length){

var ctx = $("#hourlyprodgraph");

var myBubbleChart = new Chart(ctx,{
    type: 'line',
    data: datahourly,
	options: {
        legend: {
            display: true,
			position: 'bottom',
            labels: {
                fontColor: 'black',
				defaultFontFamily: 'ABBvoice',
				defaultFontSize: '13'
            }
        },
		scales:
		{
			xAxes: [{
				ticks: {
					display: true
				}
			}]
		}
	}
});

};

if($('.pagination').length){

	$('.pagination').each(function(){
	  var allLi = $(this).find('li');
	  if(allLi.length > 20) {
		var activeId = allLi.filter('.active').index();
		allLi.eq(0)
		.add(allLi.eq(1))
		.add(allLi.eq(2))
		.add(allLi.eq(3))
		.add(allLi.eq(4))
		.add(allLi.eq(-1))
		.add(allLi.eq(-2))
		.add(allLi.eq(-3))
		.add(allLi.eq(-4))
		.add(allLi.eq(activeId))
		.add(allLi.eq(activeId-1))
		.add(allLi.eq(activeId-2))
		.add(allLi.eq(activeId-3))
		.add(allLi.eq(activeId+1))
		.add(allLi.eq(activeId+2))
		.add(allLi.eq(activeId+3))
		.addClass('allow');
		var replacedWithDots = false;
		allLi.each(function() {
		  if( $(this).hasClass('allow') ) {
			replacedWithDots = false;
		  } else if(!replacedWithDots) {
			replacedWithDots = true;
			$(this).html('<a>...</a>');
		  } else {
			$(this).remove();
		  }
		})
	  }
	});

};

function newline() {
	$("#selline").val("new");
	$("#lineselect").hide();
	$(".newl").hide();
	$(".newl2").show();
	$("#newline").show();
	$("#newlineentry").val("");
};

var createCookie = function(name, value, days) {

  var expires;

  if (days) {

     var date = new Date();

     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

     expires = "; expires=" + date.toGMTString();

  }

  else {

     expires = "";

  }

  document.cookie = name + "=" + value + expires + "; path=/";

}


function getCookie(c_name) {

  if (document.cookie.length > 0) {

     c_start = document.cookie.indexOf(c_name + "=");

     if (c_start != -1) {

        c_start = c_start + c_name.length + 1;

        c_end = document.cookie.indexOf(";", c_start);

        if (c_end == -1) {

           c_end = document.cookie.length;

        }

        return unescape(document.cookie.substring(c_start, c_end));

     }

  }

  return "";

}
function gettitlebyid(a){
	var name = $(''+a+'').attr('value');
	return name;
}


//multiple shift selection in kpi detailes
function checkout(a){
		
	
		var checkboxes = document.getElementsByName('shift[]');
		var shift = "";
		for (var i=0, n=checkboxes.length;i<n;i++) 
		{
			if (checkboxes[i].checked) 
			{
				if(i===n){
				shift += checkboxes[i].value+"";
				}else{
				shift += checkboxes[i].value+",";
				}
				
			}
		}
		window.location.href = "?type="+type+"&line="+line+"&station="+station+"&date="+date+"&shift="+shift;
	}	
