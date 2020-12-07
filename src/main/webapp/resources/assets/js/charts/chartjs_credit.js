$(function () {
    'use strict';

    var get = 'GET METHOD CALL';
    // credit
    var url2 = '/v1/qcredit'
    var label1 = [];
    var data1 = [];   // 예탁금
    var data2 = [];   // 신용

    $.ajax({
        type: 'GET',
        url: url2,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
            }
            $.each(result.list, function(inx, obj){
                label1.unshift(obj.cdate);
                data1.unshift(obj.고객예탁금);
                data2.unshift(obj.신용잔고);
            });
            createChart_credit();
        }
    });

    function createChart_credit(){
        //if ($("#chartjs-staked-line-chart").length) {
        var options = {
            type: 'line',
            data: {
                labels: label1,
                datasets: [
                    {
                        label: '고객예탁금',
                        yAxisID: 'A',
                        data: data1,
                        borderWidth: 2,
                        fill: false,
                        backgroundColor: chartColors[0],
                        borderColor: chartColors[0],
                        borderWidth: 0
                    },
                    {
                        label: '신용잔고',
                        yAxisID: 'B',
                        data: data2,
                        borderWidth: 2,
                        fill: false,
                        backgroundColor: chartColors[1],
                        borderColor: chartColors[1],
                        borderWidth: 0
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            id: 'A',
                            type: 'linear',
                            position: 'left',
                        }, {
                            id: 'B',
                            type: 'linear',
                            position: 'right',
                            ticks: {
                                reverse: false
                            }
                        }
                    ]
                },
                fill: false,
                legend: false
            }
        }

        var ctx = document.getElementById('chartjs-line-chart-credit').getContext('2d');
        new Chart(ctx, options);
    }

});