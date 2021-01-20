import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const columnOptions = {
    chart: {
      type: 'column'
  },
  title: {
      text: 'Browser market shares. January, 2018'
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          pointPadding: 0.4,
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
          }
      }
  },
  
  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  
  series: [
      {
          name: "Browsers",
          colorByPoint: true,
          data: [
              {
                  name: "Chrome",
                  y: 62.74,
              },
              {
                  name: "Firefox",
                  y: 10.57,
              },
              {
                  name: "Internet Explorer",
                  y: 7.23,
              },
              {
                  name: "Safari",
                  y: 5.58,
              },
              {
                  name: "Edge",
                  y: 4.02,
              },
              {
                  name: "Opera",
                  y: 1.92,
              },
              {
                  name: "Other",
                  y: 7.62,
              }
          ]
      }
  ],
  };


const columnchart = () => (
    <div>
        <HighchartsReact
        Highcharts={Highcharts}
        options={columnOptions}
      />
    </div>
);

export default columnchart;