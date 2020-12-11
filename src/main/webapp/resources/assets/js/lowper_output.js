
function proc_q2(result){
    $("#get_q2").empty();
    $.each(result, function(index, item){
        var str = '<tr><td>' + item.ranking + '</td>';
        str += '<td>' + item.code + '</td>';
        str += '<td>' + item.name + '</td>';
        str += '<td>' + item.expected.toLocaleString('en') + '</td>';
        str += '<td>' + item.totalvalue.toLocaleString('en') + '</td>';
        str += '<td>' + item.e_PER.toLocaleString('en') + '</td>';
        str += '<td>' + item.class_small + '</td>';
        str += '<td>' + item.avg_per.toLocaleString('en') + '</td>';
        $('#get_q2').append(str);
    });
    $('#get_q2').append('</tr>');
}

function func_paging2(totalData, dataPerPage, pageCount, currentPage) {

    console.log("currentPage : " + currentPage);

    var totalPage = Math.ceil(totalData / dataPerPage);    // 총 페이지 수
    var pageGroup = Math.ceil(currentPage / pageCount);    // 페이지 그룹

    console.log("pageGroup : " + pageGroup);

    var last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
    if (last > totalPage)
        last = totalPage;
    var first = last - (pageCount - 1);    // 화면에 보여질 첫번째 페이지 번호
    var next = last + 1;
    var prev = first - 1;

    console.log("last : " + last);
    console.log("first : " + first);
    console.log("next : " + next);
    console.log("prev : " + prev);
    var $pingingView = $("#paging2");
    var html = "";

    if (prev > 0)
        html += "<li class=\"page-item\" text-align='center'><a class=\"page-link\" href=#section-q2 id='prev'><</a></li> ";

    for (var i = first; i <= last; i++) {
        html += "<li class=\"page-item\" text-align='center'><a class=\"page-link\" href=#section-q2 id=" + i + ">" + i + "</a></li> ";
    }


    if (last < totalPage)
        html += "<li class=\"page-item\" text-align='center'><a class=\"page-link\" href=#section-q2 id='next'>></a></li>";

    $("#paging2").html(html);    // 페이지 목록 생성
    //$("#paging1 a").css("color", "black");
    $("#paging2 a").css({"text-decoration":"none",
        "color":"#565656",
        "font-weight":"bold",
        "margin":"0 auto",
        "background":"none",
        "border":"none"});
    $("#paging2 a#" + currentPage).css({"text-decoration":"none",
        "color":"#696ffb",
        "font-weight":"bold",
        "margin":"0 auto",
        "background":"none",
        "border":"none"});    // 현재 페이지 표시

    $("#paging2 a").click(function () {

        var $item = $(this);
        var $id = $item.attr("id");
        var selectedPage = $item.text();
        var sortColumn = 'ranking'

        if ($id == "next") selectedPage = next;
        if ($id == "prev") selectedPage = prev;

        func_paging2(totalData, dataPerPage, pageCount, selectedPage);
        func_q2(selectedPage - 1, dataPerPage, sortColumn);
    });
}



function func_q2(currentPage, dataPerPage, sortColumn){
    var get = 'GET METHOD CALL';
    var url2 = '/v1/q2/?page=' + currentPage + '&size=' + dataPerPage + '&sort=' + sortColumn
    $.ajax({
        type: 'GET',
        url: url2,
        dataType: 'json',
        data: {data:get},
        success: function(result) {
            if (result) {
                console.log(result);
                $('#get_output').append('success: ' + result.success + '<br>' + 'msg: ' + result.msg);
                proc_q2(result.list);

            }
        }
    });
}
$(document).ready(function(){
    var totalData = 100;    // 총 데이터 수
    var dataPerPage = 20;    // 한 페이지에 나타낼 데이터 수
    var pageCount = 5;        // 한 화면에 나타낼 페이지 수
    var currentPage = 0;
    var sortColumn = 'ranking';

    func_paging2(totalData, dataPerPage, pageCount, 1);
    func_q2(currentPage, dataPerPage, sortColumn);
});

