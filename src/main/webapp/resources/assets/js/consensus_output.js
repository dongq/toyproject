

function proc_q6(result){
    $("#get_q6").empty();
    $.each(result, function(index, item){
        var str = '<tr>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.prev_revenue.toLocaleString('en') + '</td>';
        str += '<td>' + item.prev_op.toLocaleString('en') + '</td>';
        str += '<td>' + item.prev_net.toLocaleString('en') + '</td>';
        str += '<td>' + item.prev_per.toLocaleString('en') + '</td>';
        str += '<td>' + item.revenue.toLocaleString('en') + '</td>';
        str += '<td>' + item.opmargin.toLocaleString('en') + '</td>';
        str += '<td>' + item.netmargin.toLocaleString('en') + '</td>';
        str += '<td>' + item.per.toLocaleString('en') + '</td>';
        $('#get_q6').append(str);
    });
    $('#get_q6').append('</tr>');
}

function func_q6(updown){
    var get = 'GET METHOD CALL';
    var url = '';

    if(updown == 'up')
        url = '/v1/q6';
    else if (updown == 'down')
        url = '/v1/q7';
    else
        url = '/v1/q6new';

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_q6(result.list);
            }
        }
    });
}

function func_checked(val) {
    func_q6(val);
}

$(document).ready(function(){
    var updown = document.querySelector("input[name=chk_info]:checked").value;
    func_q6(updown);
});

