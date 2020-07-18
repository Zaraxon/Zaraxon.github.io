var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("模拟只会猜题意", "贪心只能过样例", "数学上来先打表", "DP一般看规律", "组合数学靠运气", "计算几何瞎暴力", "图论强行套模板", "数论只会GCD", "递归递推伤不起","搜索茫然TLE","分治做得像枚举","暴力枚举我第一","数据结构干瞪眼","涨姿势也不容易");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF0000"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
