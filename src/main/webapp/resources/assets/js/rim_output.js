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

function func_paging1(totalData, dataPerPage, pageCount, currentPage){
    var totalPage = Math.ceil(totalData/dataPerPage);    // 총 페이지 수
    var pageGroup = Math.ceil(currentPage/pageCount);    // 페이지 그룹
    var last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
    if(last > totalPage)
        last = totalPage;
    var first = last - (pageCount-1);    // 화면에 보여질 첫번째 페이지 번호
    var next = last+1;
    var prev = first-1;
    var $pingingView = $("#paging1");
    var html = "";

    if(prev > 0)
        html += "<li class=\"page-item\" text-align='center'><a class=\"page-link\" href=#section-q1 id='prev'><</a></li> ";

    for(var i=first; i <= last; i++){
        html += "<li class=\"page-item\" text-align='center'><a class=\"page-link\" href=#section-q1 id=" + i + ">" + i + "</a></li> ";
    }

    if(last < totalPage)
        html += "<li class=\"page-item\" text-align='center'><a class=\"page-link\" href=#section-q1 id='next'>></a></li>";

    $("#paging1").html(html);    // 페이지 목록 생성
    //$("#paging1 a").css("color", "black");
    $("#paging1 a").css({"text-decoration":"none",
        "color":"#565656",
        "font-weight":"bold",
        "margin":"0 auto",
        "background":"none",
        "border":"none"});
    $("#paging1 a#" + currentPage).css({"text-decoration":"none",
        "color":"#696ffb",
        "font-weight":"bold",
        "margin":"0 auto",
        "background":"none",
        "border":"none"});    // 현재 페이지 표시

    $("#paging1 a").click(function(){
        var $item = $(this);
        var $id = $item.attr("id");
        var selectedPage = $item.text();
        var sortColumn = 'ranking'
        if($id == "next")    selectedPage = next;
        if($id == "prev")    selectedPage = prev;
        func_paging1(totalData, dataPerPage, pageCount, selectedPage);
        func_q1(selectedPage-1, dataPerPage, sortColumn);
    });
}

function func_q1(currentPage, dataPerPage, sortColumn){
    var get = 'GET METHOD CALL';
    var url1 = '/v1/q1/?page=' + currentPage + '&size=' + dataPerPage + '&sort=' + sortColumn

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


$(document).ready(function(){
    var totalData = 100;    // 총 데이터 수
    var dataPerPage = 20;    // 한 페이지에 나타낼 데이터 수
    var pageCount = 5;        // 한 화면에 나타낼 페이지 수
    var currentPage = 0;
    var sortColumn = 'ranking';

    func_paging1(totalData, dataPerPage, pageCount, 1);
    func_q1(currentPage, dataPerPage, sortColumn);
});
