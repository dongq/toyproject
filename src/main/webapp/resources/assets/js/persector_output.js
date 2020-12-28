function proc_q1(result){
    $("#get_q1").empty();
    $.each(result, function(index, item){
        var str = '<tr><td>' + item.ranking + '</td>';
        str += '<td>' + item.code + '</td>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.current.toLocaleString('en') + '</td>';
        str += '<td>' + item.pbr.toLocaleString('en') + '</td>';
        str += '<td>' + item.per.toLocaleString('en') + '</td>';
        str += '<td>' + item.high.toLocaleString('en') + '</td>';
        str += '<td>' + item.mid.toLocaleString('en') + '</td>';
        str += '<td>' + item.low.toLocaleString('en') + '</td>';
        str += '<td>' + item.roe.toLocaleString('en') + '</td>';
        str += '<td>' + item.total.toLocaleString('en') + '</td>';
        $('#get_q1').append(str);
    });
    $('#get_q1').append('</tr>');
}


function func_persector(sector){
    var get = 'GET METHOD CALL';
    var url1 = '/v1/persector/?sector=FICS  ' + sector;

    console.log('func_persector : ' + url1);

    $.ajax({
        type: 'GET',
        url: url1,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_q1(result.list);
            }
        }
    });
}



function func_checked() {
    var sector = document.querySelector("input[name=chk_info]:checked").value;
    func_persector(sector);
}

$(document).ready(function(){
    $("input:radio[name=chk_info]").click(function()
    {
        func_checked();
    })

    var sector = document.querySelector("input[name=chk_info]:checked").value;
    func_persector(sector);




 //  var date = new Date();
 //  date.setDate(date.getDate() - 30);

 //  var day = date.getDate();
 //  var month = date.getMonth() + 1;
 //  var year = date.getFullYear();

 //  if (month < 10) month = "0" + month;
 //  if (day < 10) day = "0" + day;

 //  var today = year + "-" + month + "-" + day;
 //  $("#id_getdate").attr("value", today);

 //  var dt = today.replace(/-/g, '');
 //  func_trend(dt);
});

