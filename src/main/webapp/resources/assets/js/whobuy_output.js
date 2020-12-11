
function proc_q3(result){
    $("#get_q3").empty();
    $.each(result, function(index, item){
        var str = '<tr>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.start_price.toLocaleString('en') + '</td>';
        str += '<td>' + item.end_price.toLocaleString('en') + '</td>';

        if ( item.start_price < item.end_price ) {
            // 상승
            str += '<td class="text-success">' + item.changes.toLocaleString('en') + ' <i class="mdi mdi-arrow-up-bold"></i></td>';
        } else if (item.start_price > item.end_price){
            // 보합 or 하락
            str += '<td class="text-danger">' + item.changes.toLocaleString('en') + ' <i class="mdi mdi-arrow-down-bold"></i></td>';
        } else {
            str += '<td>' + item.changes.toLocaleString('en') + '</td>';
        }

        str += '<td>' + item.sum_gikwan.toLocaleString('en') + '</td>';
        str += '<td>' + item.sum_foreign.toLocaleString('en') + '</td>';
        $('#get_q3').append(str);
    });
    $('#get_q3').append('</tr>');
}




function proc_q4(result){
    $("#get_q4").empty();
    $.each(result, function(index, item){
        var str = '<tr>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.start_price.toLocaleString('en') + '</td>';
        str += '<td>' + item.end_price.toLocaleString('en') + '</td>';

        if ( item.start_price < item.end_price ) {
            // 상승
            str += '<td class="text-success">' + item.changes.toLocaleString('en') + ' <i class="mdi mdi-arrow-up-bold"></i></td>';
        } else if (item.start_price > item.end_price){
            // 보합 or 하락
            str += '<td class="text-danger">' + item.changes.toLocaleString('en') + ' <i class="mdi mdi-arrow-down-bold"></i></td>';
        } else {
            str += '<td>' + item.changes.toLocaleString('en') + '</td>';
        }

        str += '<td>' + item.sum_gikwan.toLocaleString('en') + '</td>';
        str += '<td>' + item.sum_foreign.toLocaleString('en') + '</td>';
        $('#get_q4').append(str);
    });
    $('#get_q4').append('</tr>');
}

function proc_q5(result){
    $("#get_q5").empty();
    $.each(result, function(index, item){
        var str = '<tr>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.start_price.toLocaleString('en') + '</td>';
        str += '<td>' + item.end_price.toLocaleString('en') + '</td>';

        if ( item.start_price < item.end_price ) {
            // 상승
            str += '<td class="text-success">' + item.changes.toLocaleString('en') + ' <i class="mdi mdi-arrow-up-bold"></i></td>';
        } else if (item.start_price > item.end_price){
            // 보합 or 하락
            str += '<td class="text-danger">' + item.changes.toLocaleString('en') + ' <i class="mdi mdi-arrow-down-bold"></i></td>';
        } else {
            str += '<td>' + item.changes.toLocaleString('en') + '</td>';
        }

        str += '<td>' + item.sum_gikwan.toLocaleString('en') + '</td>';
        str += '<td>' + item.sum_foreign.toLocaleString('en') + '</td>';
        $('#get_q5').append(str);
    });
    $('#get_q5').append('</tr>');
}

function func_q3(cdate, gubun){
    var get = 'GET METHOD CALL';
    var url = '/v1/q3/?cdate=' + cdate + '&gubun=' + gubun
    console.log(url)
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
function func_q4(cdate, gubun){
    var get = 'GET METHOD CALL';
    var url = '/v1/q3/?cdate=' + cdate + '&gubun=' + gubun
    console.log(url)
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
function func_q5(cdate, gubun){
    var get = 'GET METHOD CALL';
    var url = '/v1/q3/?cdate=' + cdate + '&gubun=' + gubun
    console.log(url)

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


function set_max_to_today(){
    // Use Javascript
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("id_getdate").setAttribute("max", today);
}

function setDate() {
    var x = document.getElementById('id_getdate').value; //"Pulling" the value entered
    console.log(typeof x);
    console.log(x);
    var dt = x.replace(/-/g, '');
    console.log(dt);
//	var dt = moment(x).format('YYYYMMDD');
    func_q3(dt, 'gikwan');
    func_q4(dt, 'foreign');
    func_q5(dt, 'all');
}


$(document).ready(function(){
    func_q3('20201202', 'gikwan');
    func_q4('20201202', 'foreign');
    func_q5('20201202', 'all');
});
