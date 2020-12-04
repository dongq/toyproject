

function proc_q6(result){
    $("#get_q6").empty();
    $.each(result, function(index, item){
        var str = '<tr>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.prev_revenue + '</td>';
        str += '<td>' + item.prev_op + '</td>';
        str += '<td>' + item.prev_net + '</td>';
        str += '<td>' + item.prev_per + '</td>';
        str += '<td>' + item.revenue + '</td>';
        str += '<td>' + item.opmargin + '</td>';
        str += '<td>' + item.netmargin + '</td>';
        str += '<td>' + item.per + '</td>';
        $('#get_q6').append(str);
    });
    $('#get_q6').append('</tr>');
}

function proc_q7(result){
    $("#get_q7").empty();
    $.each(result, function(index, item){
        var str = '<tr>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.prev_revenue + '</td>';
        str += '<td>' + item.prev_op + '</td>';
        str += '<td>' + item.prev_net + '</td>';
        str += '<td>' + item.prev_per + '</td>';
        str += '<td>' + item.revenue + '</td>';
        str += '<td>' + item.opmargin + '</td>';
        str += '<td>' + item.netmargin + '</td>';
        str += '<td>' + item.per + '</td>';
        $('#get_q7').append(str);
    });
    $('#get_q7').append('</tr>');
}

function func_q6(){
    var get = 'GET METHOD CALL';
    var url = '/v1/q6'

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_q6(result.list);
            }
        }
    });
}
function func_q7(){
    var get = 'GET METHOD CALL';
    var url = '/v1/q7'

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_q7(result.list);
            }
        }
    });
}

$(document).ready(function(){
    func_q6();
    func_q7();
});
