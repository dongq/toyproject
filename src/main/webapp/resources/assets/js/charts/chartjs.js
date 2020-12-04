$(function () {
  'use strict';

  var get = 'GET METHOD CALL';
  var url1 = '/v1/qperftrend'
  var data_1w = [];
  var data_1m = [];
  var data_3m = [];
  var data_6m = [];
  var data_1y = [];
  var data_2y = [];
  var data_3y = [];
  var data_5y = [];


  $.ajax({
    type: 'GET',
    url: url1,
    dataType: 'json',
    data: {data:get},
    success: function(result) {
      if (result) {
        console.log(result);
        $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
      }

      $.each(result.list, function(inx, obj){
        // 1w : 0, 1m: 1, 3m: 2, 6m: 3, 1y: 4, 2y: 5, 3y:6, 5y: 7
        if (inx == 0) {   // 1w
          data_1w.push(obj.kospi);
          data_1w.push(obj.kosdaq);
          data_1w.push(obj.dow);
          data_1w.push(obj.us500);
          data_1w.push(obj.nasdaq);
          data_1w.push(obj.chi);
          data_1w.push(obj.dax);
          createChart_1w();
        }

        if (inx == 1) {
          data_1m.push(obj.kospi);
          data_1m.push(obj.kosdaq);
          data_1m.push(obj.dow);
          data_1m.push(obj.us500);
          data_1m.push(obj.nasdaq);
          data_1m.push(obj.chi);
          data_1m.push(obj.dax);
          createChart_1m();
        }

        if (inx == 2) {
          data_3m.push(obj.kospi);
          data_3m.push(obj.kosdaq);
          data_3m.push(obj.dow);
          data_3m.push(obj.us500);
          data_3m.push(obj.nasdaq);
          data_3m.push(obj.chi);
          data_3m.push(obj.dax);
          createChart_3m();
        }

        if (inx == 3) {
          data_6m.push(obj.kospi);
          data_6m.push(obj.kosdaq);
          data_6m.push(obj.dow);
          data_6m.push(obj.us500);
          data_6m.push(obj.nasdaq);
          data_6m.push(obj.chi);
          data_6m.push(obj.dax);
          createChart_6m();
        }

        if (inx == 4) {
          data_1y.push(obj.kospi);
          data_1y.push(obj.kosdaq);
          data_1y.push(obj.dow);
          data_1y.push(obj.us500);
          data_1y.push(obj.nasdaq);
          data_1y.push(obj.chi);
          data_1y.push(obj.dax);
          createChart_1y();
        }

        if (inx == 5) {
          data_2y.push(obj.kospi);
          data_2y.push(obj.kosdaq);
          data_2y.push(obj.dow);
          data_2y.push(obj.us500);
          data_2y.push(obj.nasdaq);
          data_2y.push(obj.chi);
          data_2y.push(obj.dax);
          createChart_2y();
        }

        if (inx == 6) {
          data_3y.push(obj.kospi);
          data_3y.push(obj.kosdaq);
          data_3y.push(obj.dow);
          data_3y.push(obj.us500);
          data_3y.push(obj.nasdaq);
          data_3y.push(obj.chi);
          data_3y.push(obj.dax);
          createChart_3y();
        }

        if (inx == 7) {
          data_5y.push(obj.kospi);
          data_5y.push(obj.kosdaq);
          data_5y.push(obj.dow);
          data_5y.push(obj.us500);
          data_5y.push(obj.nasdaq);
          data_5y.push(obj.chi);
          data_5y.push(obj.dax);
          createChart_5y();
        }

      });
    }
  });

  function createChart_1w(){
  //if ($("#chartjs-bar-chart_1w").length) {
    var BarData = {
      labels: ["KOSPI", "KOSDAQ", "Dow", "S&P500", "NASDAQ", "상해", "DAX"],
      datasets: [{
        label: 'increase rate(%)',
        data: data_1w,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 0
      }]
    };
    var barChartCanvas = $("#chartjs-bar-chart_1w").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: BarData,
      options: {
        legend: false
      }
    });
  }

  function createChart_1m(){
//  if ($("#chartjs-bar-chart_1m").length) {
    var BarData = {
      labels: ["KOSPI", "KOSDAQ", "Dow", "S&P500", "NASDAQ", "상해", "DAX"],
      datasets: [{
        label: 'increase rate(%)',
        data: data_1m,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 0
      }]
    };
    var barChartCanvas = $("#chartjs-bar-chart_1m").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: BarData,
      options: {
        legend: false
      }
    });
  }

  function createChart_3m(){
//    if ($("#chartjs-bar-chart_3m").length) {
    var BarData = {
      labels: ["KOSPI", "KOSDAQ", "Dow", "S&P500", "NASDAQ", "상해", "DAX"],
      datasets: [{
        label: 'increase rate(%)',
        data: data_3m,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 0
      }]
    };
    var barChartCanvas = $("#chartjs-bar-chart_3m").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: BarData,
      options: {
        legend: false
      }
    });
  }

  function createChart_6m(){
//    if ($("#chartjs-bar-chart_6m").length) {
    var BarData = {
      labels: ["KOSPI", "KOSDAQ", "Dow", "S&P500", "NASDAQ", "상해", "DAX"],
      datasets: [{
        label: 'increase rate(%)',
        data: data_6m,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 0
      }]
    };
    var barChartCanvas = $("#chartjs-bar-chart_6m").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: BarData,
      options: {
        legend: false
      }
    });
  }

  function createChart_1y(){
//    if ($("#chartjs-bar-chart_1y").length) {
    var BarData = {
      labels: ["KOSPI", "KOSDAQ", "Dow", "S&P500", "NASDAQ", "상해", "DAX"],
      datasets: [{
        label: 'increase rate(%)',
        data: data_1y,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 0
      }]
    };
    var barChartCanvas = $("#chartjs-bar-chart_1y").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: BarData,
      options: {
        legend: false
      }
    });
  }

  function createChart_2y(){
//  if ($("#chartjs-bar-chart_2y").length) {
    var BarData = {
      labels: ["KOSPI", "KOSDAQ", "Dow", "S&P500", "NASDAQ", "상해", "DAX"],
      datasets: [{
        label: 'increase rate(%)',
        data: data_2y,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 0
      }]
    };
    var barChartCanvas = $("#chartjs-bar-chart_2y").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: BarData,
      options: {
        legend: false
      }
    });
  }

  function createChart_3y(){
//    if ($("#chartjs-bar-chart_3y").length) {
    var BarData = {
      labels: ["KOSPI", "KOSDAQ", "Dow", "S&P500", "NASDAQ", "상해", "DAX"],
      datasets: [{
        label: 'increase rate(%)',
        data: data_3y,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 0
      }]
    };
    var barChartCanvas = $("#chartjs-bar-chart_3y").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: BarData,
      options: {
        legend: false
      }
    });
  }

  function createChart_5y(){
//    if ($("#chartjs-bar-chart_5y").length) {
    var BarData = {
      labels: ["KOSPI", "KOSDAQ", "Dow", "S&P500", "NASDAQ", "상해", "DAX"],
      datasets: [{
        label: 'increase rate(%)',
        data: data_5y,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 0
      }]
    };
    var barChartCanvas = $("#chartjs-bar-chart_5y").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: BarData,
      options: {
        legend: false
      }
    });
  }

});