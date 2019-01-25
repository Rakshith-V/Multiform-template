Highcharts.chart('breakdown', {
    chart: {
        renderTo: 'breakdown',
        type: 'column'
    },
    title: {
        text: 'Breakdown Reasons',
		x:-110
    },
    xAxis: {
        categories: ['Waiting for parts', 'Michine Breakdown', 'No operators', 'Waiting for parts', 'Michine Breakdown']
    },
    yAxis: [{
        title: {
            text: ''
        }
    }, {
        title: {
            text: ''
        },
        minPadding: 0,
        maxPadding: 0,
        max: 100,
        min: 0,
        opposite: true,
        labels: {
            format: "{value}%"
        }
    }],
    series: [{
        type: 'pareto',
        name: 'Pareto',
        yAxis: 1,
        zIndex: 10,
        baseSeries: 1
    }, {
        name: 'Reasons',
        type: 'column',
        zIndex: 2,
        data: [50, 40, 30, 20, 10]
    }]
});
Highcharts.chart('rework', {
    chart: {
        renderTo: 'rework',
        type: 'column',
		paletteColors: "#0075c2",
		lineColor: "#000",
		 bgColor: "#ffffff"
    },
    title: {
        text: 'Rework Reasons',
		x:-125
    },
    xAxis: {
         categories: ['Waiting for parts', 'Michine Breakdown', 'No operators', 'Waiting for parts', 'Michine Breakdown']
    },
    yAxis: [{
        title: {
            text: ''
        }
    }, {
        title: {
            text: ''
        },
        minPadding: 0,
        maxPadding: 0,
        max: 100,
        min: 0,
        opposite: true,
        labels: {
            format: "{value}%"
        }
    }],
    series: [{
        type: 'pareto',
        name: 'Pareto',
        yAxis: 1,
        zIndex: 10,
        baseSeries: 1,
    }, {
        name: 'Reasons',
        type: 'column',
        zIndex: 2,
        data: [50, 40, 30, 20, 10]
    }]
});

 $(document).ready(function(){
$(".highcharts-axis-labels text[y=269]:nth-child(1)").removeAttr("transform");
$(".highcharts-axis-labels text[y=269]:nth-child(1)").attr("transform","translate(0,0) rotate(-90 73.89272486435067 269)");
$(".highcharts-axis-labels text[y=269]:nth-child(2)").removeAttr("transform");
$(".highcharts-axis-labels text[y=269]:nth-child(2)").attr("transform","translate(0,0) rotate(-90 138.4927248643507 269)");
$(".highcharts-axis-labels text[y=269]:nth-child(31)").removeAttr("transform");
$(".highcharts-axis-labels text[y=269]:nth-child(3)").attr("transform","translate(0,0) rotate(-90 203.0927248643507 269)");
$(".highcharts-axis-labels text[y=269]:nth-child(4)").removeAttr("transform");
$(".highcharts-axis-labels text[y=269]:nth-child(4)").attr("transform","translate(0,0) rotate(-90 267.6927248643506 269)");
$(".highcharts-axis-labels text[y=269]:nth-child(5)").removeAttr("transform");
$(".highcharts-axis-labels text[y=269]:nth-child(5)").attr("transform","translate(0,0) rotate(-90 332.29272486435065 269)");
 });
