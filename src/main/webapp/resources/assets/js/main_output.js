function proc_jisu(result){
    var kospi = {}
    var kosdaq = {}
    var dow = {}
    var nasdaq = {}
    var us500 = {}
    var china = {}

    $("#get_jisu").empty();
    $.each(result, function(index, item){
        if (index == 0) {
            $('#kospi_gubun').text(item.gubun);
            $('#kospi_cdate').text(item.cdate);
            $('#kospi_change').text(item.change);
            $('#kospi_close').text(item.close);
            $('#kospi_rate').text(item.rate);
        }
        if (index == 1) {
            $('#kosdaq_gubun').text(item.gubun);
            $('#kosdaq_cdate').text(item.cdate);
            $('#kosdaq_change').text(item.change);
            $('#kosdaq_close').text(item.close);
            $('#kosdaq_rate').text(item.rate);
        }
        if (index == 2) {
            $('#dow_gubun').text(item.gubun);
            $('#dow_cdate').text(item.cdate);
            $('#dow_change').text(item.change);
            $('#dow_close').text(item.close);
            $('#dow_rate').text(item.rate);
        }
        if (index == 3) {
            $('#nasdaq_gubun').text(item.gubun);
            $('#nasdaq_cdate').text(item.cdate);
            $('#nasdaq_change').text(item.change);
            $('#nasdaq_close').text(item.close);
            $('#nasdaq_rate').text(item.rate);
        }
        if (index == 4) {
            $('#us500_gubun').text(item.gubun);
            $('#us500_cdate').text(item.cdate);
            $('#us500_change').text(item.change);
            $('#us500_close').text(item.close);
            $('#us500_rate').text(item.rate);
        }
        if (index == 5) {
            $('#china_gubun').text(item.gubun);
            $('#china_cdate').text(item.cdate);
            $('#china_change').text(item.change);
            $('#china_close').text(item.close);
            $('#china_rate').text(item.rate);
        }

    });
}


function proc_adr_current(result){
    $("#get_adr_current").empty();
    $.each(result, function(index, item){
        var str = '<tr><td><p class="mb-n1 font-weight-medium">KOSPI</p>';
        str += '<small class="text-gray">' + item.cdate + ' ' + item.ctime + '</small></td>';
        str += '<td class="font-weight-medium">' + item.kospi_value + '</td>';
        if ( item.kospi_updown >= 0 )
            str += '<td class="text-danger font-weight-medium"><div class="badge badge-success">+' + item.kospi_updown + '</div></td></td></tr>';
        else
            str += '<td class="text-danger font-weight-medium"><div class="badge badge-danger">' + item.kospi_updown + '</div></td></td></tr>';

        str += '<tr><td><p class="mb-n1 font-weight-medium">KOSDAQ</p>';
        str += '<small class="text-gray">' + item.cdate + ' ' + item.ctime + '</small></td>';
        str += '<td class="font-weight-medium">' + item.kosdak_value + '</td>';
        if (item.kosdak_updown >= 0)
            str += '<td class="text-danger font-weight-medium"><div class="badge badge-success">+' + item.kosdak_updown + '</div></td></td>';
        else
            str += '<td class="text-danger font-weight-medium"><div class="badge badge-danger">' + item.kosdak_updown + '</div></td></td>';
        $('#get_adr_current').append(str);
    });
    $('#get_adr_current').append('</tr>');
}

function proc_adr_hist(result){
    $("#get_adr_hist").empty();
    $.each(result, function(index, item){
        var str = '<tr><td><p>' + item.cdate + '</p>';
        str += '<td>' + item.kospi_value + '</td>';
        str += '<td>' + item.kosdak_value + '</td>';
        $('#get_adr_hist').append(str);
    });
    $('#get_adr_hist').append('</tr>');
}

function proc_credit(result){
    $("#get_credit").empty();
    $.each(result, function(index, item){
        var str = '<tr><td>' + item.cdate + '</td>';
        str += '<td>' + item.고객예탁금.toLocaleString('en') + '</td>';
        if ( item.고객예탁금_증감 >= 0 ) {
            str += '<td class="text-success">' + item.고객예탁금_증감.toLocaleString('en') + ' <i class="mdi mdi-arrow-up-bold"></i></td>';
        } else {
            str += '<td class="text-danger">' + item.고객예탁금_증감.toLocaleString('en') + ' <i class="mdi mdi-arrow-down-bold"></i></td>';
        }
        str += '<td>' + item.신용잔고.toLocaleString('en') + '</td>';
        if ( item.신용잔고_증감 >= 0 ) {
            str += '<td class="text-success">' + item.신용잔고_증감.toLocaleString('en') + ' <i class="mdi mdi-arrow-up-bold"></i></td>';
        } else {
            str += '<td class="text-danger">' + item.신용잔고_증감.toLocaleString('en') + ' <i class="mdi mdi-arrow-down-bold"></i></td>';
        }
        $('#get_credit').append(str);
    });
    $('#get_credit').append('</tr>');
}

function proc_market(result){
    $("#get_market").empty();
    $.each(result, function(index, item){
        var str = '<tr><td>' + item.market + '</td>';
        str += '<td>' + item.per + '</td>';
        str += '<td>' + item.pbr + '</td>';
        $('#get_market').append(str);
    });
    $('#get_market').append('</tr>');
}


function func_jisu(){
    var get = 'GET METHOD CALL';
    var url1 = '/v1/qjisu'

    $.ajax({
        type: 'GET',
        url: url1,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_jisu(result.list);
            }
        }
    });
}
function func_adr_current(){
    var get = 'GET METHOD CALL';
    var url1 = '/v1/qadrcurrent'

    $.ajax({
        type: 'GET',
        url: url1,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_adr_current(result.list);
            }
        }
    });
}

function func_adr_hist(){
    var get = 'GET METHOD CALL';
    var url1 = '/v1/qadrhist'

    $.ajax({
        type: 'GET',
        url: url1,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_adr_hist(result.list);
            }
        }
    });
}

function func_credit(){
    var get = 'GET METHOD CALL';
    var url1 = '/v1/qcredit5'

    $.ajax({
        type: 'GET',
        url: url1,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_credit(result.list);
            }
        }
    });
}


function func_market(){
    var get = 'GET METHOD CALL';
    var url1 = '/v1/q8'

    $.ajax({
        type: 'GET',
        url: url1,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_market(result.list);
            }
        }
    });
}


$(document).ready(function(){
    func_jisu();
    func_adr_current();
    func_adr_hist();
    func_credit();
    func_market();
});
