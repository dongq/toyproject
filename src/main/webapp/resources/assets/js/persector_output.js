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

    $.ajax({
        type: 'GET',
        url: url1,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_q1(result.list);
            }
        }
    });
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    var newSkill_Text = document.getElementById("myDropdown");
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$(document).ready(function(){
    var paramsList = location.search.substring(1).split("?"); //파라미터가 담긴 배열
    if (paramsList == "")
        func_persector("반도체 및 관련장비");
    else
        func_persector(paramsList);

});

