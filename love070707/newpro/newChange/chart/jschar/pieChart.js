require.config({
    paths: {
        echarts: "buildchar/source/"

    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/pie' ,// 使用柱状图就加载bar模块，按需加载
        'echarts/chart/force' ,//使用点击按钮
    ],

    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('pie'));

        var ecConfig = require('echarts/config');
        myChart.on(ecConfig.EVENT.CLICK, eConsole);//调用点击函数

        clickable : true;

        var idx = 1;
        var option = {
            title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['新浪微博','微信','腾讯新闻','搜狐新闻','央视新闻']
            },

            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',         //控制饼图的半径
                    // center: ['50%', '60%'],
                    data:[
                        {value:335, name:'新浪微博'},
                        {value:310, name:'微信'},
                        {value:234, name:'搜狐新闻'},
                        {value:135, name:'腾讯新闻'},
                        {value:1548, name:'央视新闻'}
                    ]
                }
            ]
        };

        myChart.setOption(option);
    }
);


function eConsole(param) {
    if (typeof param.seriesIndex == 'undefined') {
        return;
    }
    if (param.type == 'click') {
        //  alert(param.name);
        switch (param.name) {
            case  "央视新闻":
                window.location.href = "http://localhost:63342/HTML&CSS/Test/first.html";
                break;
            case  "新浪微博":
                window.location.href = "http://localhost:63342/HTML&CSS/Test/jieshao.html";
                break;
            case  "微信":
                window.location.href = "http://localhost:63342/HTML&CSS/Test/jieshao1.html";
                break;
            case  "搜狐新闻":
                window.location.href = "http://localhost:63342/HTML&CSS/Test/first.html";
                break;
            case  "腾讯新闻":
                window.location.href = "http://localhost:63342/HTML&CSS/Test/jieshao2.html";
                break;
        }
        //window.location.href="http://echarts.baidu.com/echarts2/doc/example.html"
        // window.location.href = "http://localhost:63342/HTML&CSS/Test/first.html";
    }
}
/**
 * Created by Administrator on 2016/10/25.
 */
