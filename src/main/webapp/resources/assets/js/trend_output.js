function proc_trend(result){
    $("#get_trend").empty();
    $.each(result, function(index, item){
        var str = '<tr><td>' + item.ranking + '</td>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.start_price.toLocaleString('en') + '</td>';
        str += '<td>' + item.end_price.toLocaleString('en') + '</td>';


        if ( item.start_price < item.end_price ) {
            // 상승
            str += '<td class="text-success">' + item.gain_rate.toLocaleString('en') + ' <i class="mdi mdi-arrow-up-bold"></i></td>';
        } else if (item.start_price > item.end_price){
            // 보합 or 하락
            str += '<td class="text-danger">' + item.gain_rate.toLocaleString('en') + ' <i class="mdi mdi-arrow-down-bold"></i></td>';
        } else {
            str += '<td>' + item.gain_rate.toLocaleString('en') + '</td>';
        }


        str += '<td>' + item.max_gain.toLocaleString('en') + '</td>';
        str += '<td>' + item.min_gain.toLocaleString('en') + '</td>';
        str += '<td>' + item.high.toLocaleString('en') + '</td>';
        str += '<td>' + item.mid.toLocaleString('en') + '</td>';
        str += '<td>' + item.low.toLocaleString('en') + '</td>';
        str += '<td>' + item.roe.toLocaleString('en') + '</td>';
        str += '<td>' + item.total.toLocaleString('en') + '</td>';
        $('#get_trend').append(str);
    });
    $('#get_trend').append('</tr>');
}

function func_trend(cdate){
    var get = 'GET METHOD CALL';
    var url1 = '/v1/qtrend/?cdate=' + cdate

    console.log('func_trend : ' + url1);

    $.ajax({
        type: 'GET',
        url: url1,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_trend(result.list);
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
    func_trend(dt);
}

$(document).ready(function(){
    var date = new Date();
    date.setDate(date.getDate() - 30);

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#id_getdate").attr("value", today);

    var dt = today.replace(/-/g, '');
    func_trend(dt);
});

