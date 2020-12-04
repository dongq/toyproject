
function proc_q3(result){
    $("#get_q3").empty();
    $.each(result, function(index, item){
        var str = '<tr>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.start_price + '</td>';
        str += '<td>' + item.end_price + '</td>';

        if ( item.start_price < item.end_price ) {
            // 상승
            str += '<td class="text-success">' + item.changes + ' <i class="mdi mdi-arrow-up-bold"></i></td>';
        } else if (item.start_price > item.end_price){
            // 보합 or 하락
            str += '<td class="text-danger">' + item.changes + ' <i class="mdi mdi-arrow-down-bold"></i></td>';
        } else {
            str += '<td>' + item.changes + '</td>';
        }

        str += '<td>' + item.num_gikwan + '</td>';
        str += '<td>' + item.num_foreign + '</td>';
        $('#get_q3').append(str);
    });
    $('#get_q3').append('</tr>');
}




function proc_q4(result){
    $("#get_q4").empty();
    $.each(result, function(index, item){
        var str = '<tr>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.start_price + '</td>';
        str += '<td>' + item.end_price + '</td>';

        if ( item.start_price < item.end_price ) {
            // 상승
            str += '<td class="text-success">' + item.changes + ' <i class="mdi mdi-arrow-up-bold"></i></td>';
        } else if (item.start_price > item.end_price){
            // 보합 or 하락
            str += '<td class="text-danger">' + item.changes + ' <i class="mdi mdi-arrow-down-bold"></i></td>';
        } else {
            str += '<td>' + item.changes + '</td>';
        }

        str += '<td>' + item.num_gikwan + '</td>';
        str += '<td>' + item.num_foreign + '</td>';
        $('#get_q4').append(str);
    });
    $('#get_q4').append('</tr>');
}

function proc_q5(result){
    $("#get_q5").empty();
    $.each(result, function(index, item){
        var str = '<tr>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.start_price + '</td>';
        str += '<td>' + item.end_price + '</td>';

        if ( item.start_price < item.end_price ) {
            // 상승
            str += '<td class="text-success">' + item.changes + ' <i class="mdi mdi-arrow-up-bold"></i></td>';
        } else if (item.start_price > item.end_price){
            // 보합 or 하락
            str += '<td class="text-danger">' + item.changes + ' <i class="mdi mdi-arrow-down-bold"></i></td>';
        } else {
            str += '<td>' + item.changes + '</td>';
        }

        str += '<td>' + item.num_gikwan + '</td>';
        str += '<td>' + item.num_foreign + '</td>';
        $('#get_q5').append(str);
    });
    $('#get_q5').append('</tr>');
}

function func_q3(){
    var get = 'GET METHOD CALL';
    var url = '/v1/q3'

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_q3(result.list);
            }
        }
    });
}
function func_q4(){
    var get = 'GET METHOD CALL';
    var url = '/v1/q4'

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_q4(result.list);
            }
        }
    });
}
function func_q5(){
    var get = 'GET METHOD CALL';
    var url = '/v1/q5'

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_q5(result.list);
            }
        }
    });
}
$(document).ready(function(){
    func_q3();
    func_q4();
    func_q5();
});
