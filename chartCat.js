/////////////////////////2-sides bar chart///////////////////////

Highcharts.Templating.helpers.abs = value => Math.abs(value);
Highcharts.Templating.helpers.multiplyBy100 = value => value*100;

const yellowColor = '#FFCF69';
const blueColor = '#6DB1FA';
const lightGrayColor = '#DEE4EB';

const categories = [
  'Eye fresher', 'Soap', 'Shower get', 'Body lotion', 'Hair conditioner', 'Shampoo', 'Mascara', 'Lip gloss', 'Foundation', 'Eyeliner', 'Eyeshadows', 'Lipstick', 'Rouge', 'Eyebrow pencil', 'Nail polish'
];


Highcharts.chart("twoSidesBarChart", {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Sales Amounts by Gender: Male vs Female',
  },
  accessibility: {
    point: {
        valueDescriptionFormat: '{index}. {xDescription}, {value}.'
    }
  },
  plotOptions: {
    series: {
        stacking: 'normal',
        borderRadius: '0%',
        pointWidth: 12,
        borderWidth: 0, 
    }
  },
  series: [{
    name: 'Male',
    data: [-900,-6300,-12600,-10800,-14400,-10080,-900,-1440,-1260,-900,-720,-720,-5040,-1620,-540],
    color: yellowColor
  }, {
    name: 'Female',
    data: [9540,9180,9000,7560,10800,5940,9540,7020,8640,10080,9540,9000,7200,10800,5940],
    color: blueColor
  }],
  xAxis: [{
    categories: categories,
    reversed: false,
    lineWidth: 0 
  }, {
    opposite: true,
    categories: categories, 
    reversed: false,
    linkedTo: 0, 
    lineWidth: 0
  }],
  yAxis: {
    title: {
        text: 'Revenue in Dollars',
        margin: 10
    },
    labels: {
        format: '{abs value}'
    },
    gridLineWidth: 0,
    tickInterval: 6000, 
    lineWidth: 1,
    lineColor: 'gray',
    tickWidth: 0.5,
    tickLength: 5
  },
  tooltip: {
    format: '<b>{series.name}, {point.category}</b><br/>' +
        'Sales: ${(abs point.y)}'
  },
  legend: {
    align: 'center',
    verticalAlign: 'top',
    symbolRadius: 0
  }
});


///////////////////////pie chart with drilldown//////////////////////////
const colors = Highcharts.getOptions().colors.map((c, i) =>
    Highcharts.color(blueColor)
        .brighten((i-1) / 10)
        .get()
);

const sData = [
  {
    name: 'Office Products',
    y: 0.549,
    drilldown: 'Office Products drill down'
  },
  {
    name: 'Patio, Lawn & Garden',
    y: 0.081,
    drilldown: null
  },
  {
    name: 'Pet Supplies',
    y: 0.18,
    drilldown: null
  },
  {
    name: 'Shoes & Handbags',
    y: 0.13,
    drilldown: null
  },
  {
    name: 'Other',
    y: 0.06,
    drilldown: null
  }
]

sData.sort((a, b) => b.y - a.y);


Highcharts.chart('pieChartWithDrilldown', {
  chart: {
    type: 'pie'
  },
  title : {
    text: 'Percentage of Sales by Category, June 2023',
  },
  plotOptions: {
    series: {
      dataLabels: {
        format: '{point.name} {(multiplyBy100 point.y):.1f}%'
      },
      colors,
      allowPointSelect: true,
      cursor: 'pointer',
    }
  },
  series: [
    {
        name: 'Vendamos E-commerce',
        data: sData
    }
  ],
  drilldown: {
    series: [
      {
        name: 'Office Products drill down',
        id: 'Office Products drill down',
        data: [
          [
            'Chair',
            0.2
          ],
          [
            'Desk',
            0.3
          ],
          [
            'Chair',
            0.4
          ],
          [
            'Desk',
            0.1
          ]
        ]
      }
    ]
  },
})


///////////////////////column chart with line//////////////////////////

Highcharts.chart('columnAndLine', {
  title: {
    text: 'Profit Margin and Sales Amounts by Gender'
  },
  xAxis: {
    categories: categories,
  },
  yAxis: [
    {
      tickInterval: 250,
      gridLineWidth: 0,
      title: {
        text: 'Sales by gender',
        rotation: -270,
        margin: 20
      },
    },
    {
      tickInterval: 0.05, 
      gridLineWidth: 0,
      labels: {
        format: '{multiplyBy100 value}%',
      },
      title: {
        text: 'Profit Rate',
      },
      opposite: true
    }
  ],
  plotOptions: {
    series: {
      borderRadius: '0%',
    },
    column: {
      grouping: false, 
      borderWidth: 0, 
    },
    line: {
      marker: {
        symbol: 'square',
        radius: 3 
      }
    }
  },
  legend: {
    symbolRadius: 0,
    verticalAlign: 'top'
  },
  series: [
    {
      type: 'column',
      name: 'Male',
      yAxis: 0,
      color: lightGrayColor,
      pointWidth: 10,
      zIndex: 2,
      data: [1754, 1578, 1488, 2213, 953, 1470, 1843, 2001, 2203, 1681, 1404, 952, 1695, 2093, 1579]
    },
    {
      type: 'column',
      name: 'Female',
      yAxis: 0,
      color: blueColor,
      pointWidth: 16,
      zIndex: 1,
      data: [2462, 2233, 2244, 1637, 2022, 2245, 2495, 2665, 2722, 2463, 2158, 2207, 2900, 2756, 2232]
    },
    {
      type: 'line', 
      name: 'Profit%',
      yAxis: 1,
      color: yellowColor,
      zIndex: 3,
      data: [0.4, 0.26, 0.19, 0.85, 0.83, 0.48, 0.29, 0.62, 0.45, 0.55, 0.6, 0.15, 0.14, 0.19, 0.29],
    }
  ]
})


/////////////////////////stacked column///////////////////////

Highcharts.chart("stackedColumn", {
  chart: {
    type: 'column',
    backgroundColor: '#EBF5F6' //light blue bg color
  },
  title: {
    text: 'Students by Subjects at UK Uinversities, 2010-2011',
    margin: 20
  },
  xAxis: {
    categories: ['Business','Health allied','Education','Social studies','Biological studies','Arts and Design','Engineering','Languages','Combined subjects','Computing','History','Physical studies','Law','Medicine & dentistry','Architecture','Mass communication','Mathemetics','Agriculture','Veterinary science']
  },
  yAxis: {
    title: '',
    labels: {      
      formatter: function() {
        return Highcharts.numberFormat(this.value, 0, ',', ',') //a little bit strange
      },
    },
    gridLineColor: '#D7EFF2',
    gridLineWidth: 1,
    minorTickInterval: 'auto',
    minorGridLineColor: '#D7EFF2',    
  },
  plotOptions: {
    column: {
      borderWidth: 0, 
      stacking: 'normal'
    },
    series: {
      borderRadius: '0'
    }
  },
  legend: {
    layout: 'vertical',
    symbolRadius: 0, 
    symbolHeight: 10, 
    align: 'right',
    verticalAlign: 'top',
    itemMarginTop: 3,
    x: -10,
    y: 30,
    floating: true,
  },
  series: [
    {
      name: 'Postgraduate',
      color: yellowColor,
      data: [120000, 60000, 120000, 56000, 28000, 25000, 56000, 22000, 5000, 25000, 23000, 23000, 25000, 23000, 20000, 13000, 8000, 6000, 4000],
    },
    {
      name: 'Undergraduate',
      color: blueColor,
      data: [240000, 245000, 120000, 180000, 175000, 170000, 120000, 120100, 115000, 90000, 90500, 90000, 85000, 50000, 50000, 48000, 45000, 23000, 8000],  
    }
  ]
})


////////////////////////////////line chart///////////////////////////
//1. not responsive
//2. little padding
Highcharts.chart("lineChart", {
  chart: {
    type: 'line',
    width: 430, 
    height: 450,
  },
  title: {
    text: 'Harvard Admit Rate, 2009-2016',
  },
  xAxis: [
    {
      lineWidth: 1,
      tickWidth: 0.5,
      tickLength: -4,
      tickInterval: 1,
      title: {
        text: 'Harvar Class'
      },
    },
    {
      labels: {
        enabled: false
      },
      tickInterval: 1,
      linkedTo: 0,
      opposite: true,
      lineWidth: 1,
      tickWidth: 0.5,
      tickLength: -4,
    }
  ],
  yAxis: [
    {
      title: {
        text: 'Admit Rate'
      },
      lineWidth: 1,
      tickWidth: 0.5, 
      tickLength: -4,
      max: 50,
      tickInterval: 2.5, 
      gridLineWidth: 0,
      labels: {
        format: '{value}%'
      }
    },
    {
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      lineWidth: 1,
      tickWidth: 0.5, 
      tickLength: -4,
      opposite: true,
      max: 50,
      min: 5,
      tickInterval: 2.5, 
      gridLineWidth: 0,
    }
  ],
  plotOptions: {
    series: {
      color: blueColor,
    },
    line: {
      marker: {
        enabled: false,
      }
    },
  },
  series: [
    {
      name: 'African American',
      dashStyle: 'Solid', 
      yAxis: 1,
      data: [[2009, 50.00], [2010, 45.00], [2011, 44.00], [2012, 41.00], [2013, 40.00], [2014, 35.00], [2015, 37.00], [2016, 36.80]]
    },
    {
      name: 'Hispanic',
      dashStyle: 'Dot',
      yAxis: 0,
      data: [[2009, 25.00], [2010, 25.00], [2011, 28.00], [2012, 24.00], [2013, 23.00], [2014, 17.50], [2015, 20.00], [2016, 16.00]]
    },
    {
      name: 'White',
      dashStyle: 'LongDashDot',
      yAxis: 0,
      data: [[2009, 17.50], [2010, 19.50], [2011, 17.50], [2012, 16.30], [2013, 14.00], [2014, 13.00], [2015, 12.50], [2016, 12.30]]
    },
    {
      name: 'Asian American',
      dashStyle: 'Dash',
      yAxis: 0,
      data: [[2009, 11.20], [2010, 11.20], [2011, 13.00], [2012, 11.20], [2013, 10.00], [2014, 9.00], [2015, 8.00], [2016, 9.00]]
    }
  ]
})


/////////////////////////////scatter chart//////////////////////////////
//https://kieranhealy.org/blog/archives/2021/01/26/income-and-happiness/

Highcharts.chart('scatterChart', {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Income and Happiness'
  },
  xAxis: {
    title: {
      text: 'Household Income'
    },
    tickInterval: 100000,
    tickWidth: 0.5,
    tickLength: -5,
  },
  yAxis: {
    title: {
      text: 'z-scored well-being'
    },
    gridLineWidth: 0,
    lineWidth: 1,
    tickWidth: 0.5,
    tickLength: -5,
    max: 0.4,
    min: -0.4,
    tickInterval: 0.2, 
  },
  plotOptions: {
    series: {
      lineWidth: 1
    },
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'bottom',
    itemMarginTop: 5,
    y: -80,
    floating: true,
  },
  series: [
    {
      name: 'Life Satisfaction',
      type: 'line',
      color: blueColor,
      marker: {
        enabled: true,
        symbol: 'square',
        radius: 3,
        fillColor: blueColor,
        lineColor: blueColor,
        lineWidth: 0 
      },
      data: [[15000, -0.35], [29000, -0.34], [36000, -0.18], [48000, -0.15], [58000, -0.08], [63000, -0.03], [75000, -0.01], [83000, 0.03], [100000, 0], [120000, 0.08], [132000, 0.17], [190000, 0.18], [240000, 0.28], [420000, 0.35], [600000, 0.4]],
    },
    {
      name: 'Experienced Well-being',
      type: 'line',
      color: yellowColor,
      marker: {
        enabled: true,
        radius: 3,
        fillColor: yellowColor,
        lineColor: yellowColor,
        lineWidth: 0, 
      },
      data: [[15000, -0.205], [29000, -0.13], [36000, -0.1], [48000, -0.05], [58000, -0.02], [63000, -0.01], [75000, -0.01], [83000, 0.01], [100000, -0.03], [120000, 0.02], [132000, 0.07], [190000, 0.1], [240000, 0.17], [420000, 0.19], [600000, 0.28]],
    },
    {
      name: 'Equal Point (75k)',
      color: 'gray',
      dashStyle: 'Dot',
      showInLegend: false,
      data: [[75000, -0.4], [75000, 0], [75000, 0.4]]
    }
  ]
});


/////////////////////////////waterfall//////////////////////////////
//need a separate module: highcharts-more.js
Highcharts.chart("waterfall", {
  chart: {
    type: 'waterfall',
  },
  title: {
    text: 'Department headcount in 2023'
  },
  xAxis: {
    type: 'category',
    lineColor: 'gray',
    tickWidth: 0.5,
    tickLength: 5,
    labels: {
      rotation: 90,
    }
  },
  yAxis: {
    title: {
      text: null
    },
    gridLineWidth: 0,
    lineWidth: 1,
    lineColor: 'gray',
    tickWidth: 0.5,
    tickLength: 5
  },
  legend: {
    enabled: false
  },
  series: [
    {
      borderRadius: 0,
      borderWidth: 0,
      pointWidth: 22, 
      upColor: blueColor,
      color: yellowColor,
      data: [
        {
          name: 'Q1',
          y: 24,
          color: lightGrayColor
        },
        {
          name: 'T/0-1',
          y: -2
        },
        {
          name: 'RES-1',
          y: -6
        },
        {
          name: 'TERM',
          y: -2
        },
        {
          name: 'HIRE-1',
          y: 4
        },
        {
          name: 'R/H-1',
          y: 0,
          borderWidth: 1,
        },
        {
          name: 'T/1-1',
          y: 2
        },
        {
          name: 'Q2',
          isIntermediateSum: true,
          color: lightGrayColor
        },
        {
          name: 'T/0-2',
          y: 0,
          borderWidth: 1,
        },
        {
          name: 'RES-2',
          y: -16
        },
        {
          name: 'TERM-2',
          y: 0,
          borderWidth: 1,
        },
        {
          name: 'HIRE-2',
          y: 6
        },
        {
          name: 'R/H',
          y: 7
        },
        {
          name: 'T/1',
          y: 3
        },
        {
          name: 'Q3',
          isSum: true,
          color: lightGrayColor
        }
      ],
    }
  ]
})



/////////////////////////////bubble chart//////////////////////////////
Highcharts.chart('bubbleChart', {
  chart: {
   type: 'bubble',
    plotBorderWidth: 1,
  },
  title: {
    text: 'Housing Prices, Area, and Age in Two Cities',
  },
  xAxis: {
    gridLineWidth: 1,
    title: {
      text: 'Years of Construction'
    }
  },
  legend: {
    verticalAlign: 'top'
  },
  yAxis: {
    title: {
      text: 'Estimated Value'
    },
    labels: {
      format: '{value}K'
    }
  },
  series: [
    {
      name: 'City A',
      data: [[1, 200, 434], [4, 150, 280], [5, 80, 120], [2, 300, 600], [4, 100, 180], [5, 90, 150], [11, 200, 300], [10, 30, 40], [6, 70, 100], [8, 30, 90]],
      color:blueColor,
      marker: {
        fillColor: blueColor,
        lineWidth: 0
    }
  }, 
  {
    name: 'City B',
    data: [[2, 200, 400], [3, 120, 220], [2, 60, 130], [3, 70, 130], [5, 90, 160], [7, 150, 220], [9, 50, 60], [12, 30, 30], [8, 100, 170], [10, 200, 280]],
      color: yellowColor,
      marker: {
          fillColor:yellowColor,
          lineWidth: 0
      }
  }]
});
