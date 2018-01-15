$('#resetPwdBtn').click(function () {
    $('#win').window('open');
});

$('.closeBtn').click(function () {
    $('#win').window('close');
})

function Run(strPath) {
    var objShell = new ActiveXObject("wscript.shell");

    objShell.Run(strPath);
    //关闭进程
    objShell = null;
}
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1; //获取当前月份的日期
    var d = dd.getDate();
    return y + "-" + m + "-" + d;
}
var myChart = echarts.init(document.getElementById('chart_xk'));
var myChart1 = echarts.init(document.getElementById('chart_xk1'));
$.ajax({
    url: 'AjaxHandler/IndexHandler.ashx',
    type: 'POST',
    async: false,
    data: {
        method: 'GetChartData',
       // lastdate: GetDateStr(-1),
        //nextdate: GetDateStr(-1)
        lastdate: '2017-12-05 00:00:00',
        nextdate: '2017-12-15 23:59:59'

    },
    error: function (a) {

    },
    success: function (json) {
        console.log(json);
        json = eval('(' + json + ')');

        var gascount = parseInt(json.gas1all) + parseInt(json.gas2all);
        var dieselcount = parseInt(json.diesel1all) + parseInt(json.diesel2all);
        var count = gascount + dieselcount;

        option = {
            title: {
                text: '',
                left: 'right',
                subtext: GetDateStr(-1) + "\n\n全天津市总共检测 \n\n机动车数量为:" + count + " \n\n汽油车数量为:" + gascount + " \n\n柴油车的数量为:" + dieselcount + " ",
                x: 'center',
                subtextStyle: { //副标题文本样式{"color": "#aaa"}
                    color: '#000',
                    fontFamily: 'Arial, Verdana, sans...',
                    fontSize: '17',
                    fontStyle: 'bold',
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['稳态工况', '双怠速', '加载减速', '不透光烟度']
            },
            series: [{
                name: '检测方法分析',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [{
                    value: json.gas1all,
                    name: '稳态工况'
                },
                {
                    value: json.gas2all,
                    name: '双怠速'
                },
                {
                    value: json.diesel1all,
                    name: '加载减速'
                },
                {
                    value: json.diesel2all,
                    name: '不透光烟度'
                }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        var gas1all = parseInt(json.gas1all);
        var gas2all = parseInt(json.gas2all);
        var diesel1all = parseInt(json.diesel1all);
        var diesel2all = parseInt(json.diesel2all);
        var gas1ok = parseInt(json.gas1ok);
        var gas2ok = parseInt(json.gas2ok);
        var diesel1ok = parseInt(json.diesel1ok);
        var diesel2ok = parseInt(json.diesel2ok);

        var allok = gas1ok + gas2ok + diesel1ok + diesel2ok;

        var gas1nok = gas1all - gas1ok;
        var gas2nok = gas2all - gas2ok;
        var diesel1nok = diesel1all - diesel1ok;
        var diesel2nok = diesel2all - diesel2ok;
        var allnok = gas1nok + gas2nok + diesel1nok + diesel2nok;
        option1 = {
            tooltip: {
                trigger: 'axis',
                formatter: "{a} <br/>{b} : {c} ",
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['合格数', '不合格数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['总数', '稳态', '双怠速', '加载减速', '不透光']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [

                {
                    name: '合格数',
                    type: 'bar',
                    stack: '数量',
                    data: [allok, gas1ok, gas2ok, diesel1ok, diesel2ok]
                }, {
                    name: '不合格数',
                    type: 'bar',
                    stack: '数量',
                    data: [allnok, gas1nok, gas2nok, diesel1nok, diesel2nok]
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。

        myChart.setOption(option);

        myChart1.setOption(option1);

    }
});



/*地图*/
var datas1, datas2, datas3;
/* 主要负责加载地图 */
var map, graphicLayer;
//标记数组
var allMarkers = [];

//获取token方式  
function getToken(url) {
    var data = {
        f: 'json',
        username: 'jdcjkpt',
        password: 'admin123',
        client: 'requestip',
        referrer: '',
        ip: '',
        expiration: 60 * 24 * 10 //单位：分钟  
    };
    $.ajax({
        url: url,
        type: 'POST', //POST请求  
        data: data,
        xhrFields: {
            withCredentials: false
        },
        crossDomain: true,
        success: function (result) {
            var json = jQuery.parseJSON(result);
            alert("token信息：" + json.token);
        }
    });
}

//getToken('http://10.12.100.70:6080/arcgis/admin/generateToken ');
//getToken('http://10.12.100.70:6080/arcgis/tokens/');

/* 加载 */
require([
    "esri/map", "esri/geometry/Circle", "esri/symbols/SimpleFillSymbol",
    "esri/graphic", "esri/layers/GraphicsLayer",
    "dojo/dom", "dojo/dom-attr", "dojo/domReady!"
], function (
    Map, Circle, SimpleFillSymbol,
    Grahpic, GraphicsLayer,
    dom, domAttr
) {

        map = new esri.Map("MyMapDiv", {
            basemap: {
                baseMapLayers: [{
                    url: "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer"
                }],
                thumbnailUrl: "https://www.example.com/images/thumbnail_2014-11-25_61051.png",
                title: "Delorme"
            },
            zoom: 10,
            center: [117.20, 39.12]
        });

        var MyTiledMapServiceLayer = new esri.layers.ArcGISDynamicMapServiceLayer("http://172.16.1.14:6080/arcgis/rest/services/jjj_city/MapServer?token=FLqIUkgf63DnQgw-kEImT4YY4RD8TCImmTwULWo8mS1WBbovqZ-JULJ899yXOWVy");
        map.addLayer(MyTiledMapServiceLayer);
        //创建图层
        graphicLayer = new GraphicsLayer();
        //把图层添加到地图上
        map.addLayer(graphicLayer);
        setTimeout(function () {

            var map1 = function () {
                $.ajax({
                    url: "AjaxHandler/IndexHandler.ashx",
                    data: {
                        method: 'GetJianCeZhanMapData',
                        pagenumber: '',
                        pagesize: '',
                        CUNITNAME: ''
                    },
                    async: false,
                    dataType: "json",
                    type: "post",
                    success: function (json) {
                        data1 = json;
                        for (var c = 0; c < json.length; c++) {
                            var xx = json[c].CMEMO.split(',');
                            addMarkers(xx[0] * 1, xx[1] * 1, json[c]);
                        }
                    },
                    error: function (xhr) {

                    }
                });
            },
                map2 = function () {
                    $.ajax({
                        url: "AjaxHandler/IndexHandler.ashx",
                        data: {
                            method: 'GetMapYouQiGuanLiData',
                            pagenumber: '',
                            pagesize: '',
                            CUNITNAME: ''
                        },
                        async: false,
                        dataType: "json",
                        type: "post",
                        success: function (json) {
                            data2 = json;
                            for (var c = 0; c < json.length; c++) {
                                var xx = json[c].CMEMO.split(',');
                                addMarkers(xx[0] * 1, xx[1] * 1, json[c]);
                            }
                        },
                        error: function (xhr) {

                        }
                    });
                },
                map3 = function () {
                    $.ajax({
                        url: "AjaxHandler/IndexHandler.ashx",
                        data: {
                            method: 'GetMapYaoGanJianCeData',
                            pagenumber: '',
                            pagesize: '',
                            CUNITNAME: ''
                        },
                        async: false,
                        dataType: "json",
                        type: "post",
                        success: function (json) {
                            data3 = json;
                            for (var c = 0; c < json.length; c++) {
                                var xx = json[c].MPADDRESS.split(',');
                                addMarkersss(xx[0] * 1, xx[1] * 1, json[c]);
                            }
                        },
                        error: function (xhr) {

                        }
                    });
                };

            map1();
            $('.index_tab-1').click(function () {
                $('#graphicsLayer2_layer').find('image').remove();
                map1();
            });
            $('.index_tab-2').click(function () {
                $('#graphicsLayer2_layer').find('image').remove();
                map2();
            });
            $('.index_tab-3').click(function () {
                $('#graphicsLayer2_layer').find('image').remove();
                map3();
            });
        }, 2000);

        map.showZoomSlider();

    });

function addMarkers(xx, yy, obj) {

    //设置标注的经纬度
    //方法一
    var pt = new esri.geometry.Point(xx, yy, map.spatialReference);
    //方法二
    //  var pt = new esri.geometry.geographicToWebMercator(new esri.geometry.Point({
    //    "x": 118.0605760000,
    //    "y": 36.8424320000,
    //    "spatialReference": { "wkid": 102113 }
    //            }));

    //设置标注显示的图标
    //var symbol = new esri.symbol.SimpleMarkerSymbol();
    var symbol1;
    if (obj.ISLOCK === 1) {
        symbol1 = new esri.symbol.PictureMarkerSymbol("img/icon2.png", 25, 25);
    } else {
        symbol1 = new esri.symbol.PictureMarkerSymbol("img/icon.png", 25, 25);
    }

    //要在模版中显示的参数
    var attr = {
        "address": "测试"
    };

    //创建模版
    var infoTemplate = new esri.InfoTemplate("信息详情", "<div style=\"min-height:60px;\"><ul><li>名称：" + obj.CUNITNAME + "</li><li>状态：" + (obj.ISLOCK === 1 ? '断开' : '正常') + "</li><li>负责人：" + obj.CDIRECTOR + "</li><li>联系电话：" + obj.CPHONE + "</li></ul></div>");
    //创建图像
    var graphic = new esri.Graphic(pt, symbol1, attr, infoTemplate);
    //把图像添加到刚才创建的图层上
    graphicLayer.add(graphic);
    setMapCenter(xx, yy, 10);

}

function addMarkersss(xx, yy, obj) {

    //设置标注的经纬度
    //方法一
    var pt = new esri.geometry.Point(xx, yy, map.spatialReference);
    //方法二
    //  var pt = new esri.geometry.geographicToWebMercator(new esri.geometry.Point({
    //    "x": 118.0605760000,
    //    "y": 36.8424320000,
    //    "spatialReference": { "wkid": 102113 }
    //            }));

    //设置标注显示的图标
    //var symbol = new esri.symbol.SimpleMarkerSymbol();
    var symbol1;
    if (obj.ISLOCK === 1) {
        symbol1 = new esri.symbol.PictureMarkerSymbol("img/icon2.png", 25, 25);
    } else {
        symbol1 = new esri.symbol.PictureMarkerSymbol("img/icon.png", 25, 25);
    }

    //要在模版中显示的参数
    var attr = {
        "address": "测试"
    };

    //创建模版
    var infoTemplate = new esri.InfoTemplate("信息详情", "<div><ul><li>地址：" + obj.CHECKADDRESS + "</li><li>时间：" + obj.CHECKTIME + "</li><li>车牌号：" + obj.CNUMBERPLATE + "</li><li>结果：" + obj.RESULTEVALUATE + "</li></ul></div>");
    //创建图像
    var graphic = new esri.Graphic(pt, symbol1, attr, infoTemplate);
    //把图像添加到刚才创建的图层上
    graphicLayer.add(graphic);
    setMapCenter(xx, yy, 10);

}

function addMarker(xx, yy) {

    //设置标注的经纬度
    //方法一
    var pt = new esri.geometry.Point(xx, yy, map.spatialReference);
    //方法二
    //  var pt = new esri.geometry.geographicToWebMercator(new esri.geometry.Point({
    //    "x": 118.0605760000,
    //    "y": 36.8424320000,
    //    "spatialReference": { "wkid": 102113 }
    //            }));

    //设置标注显示的图标
    //var symbol = new esri.symbol.SimpleMarkerSymbol();
    var symbol1 = new esri.symbol.PictureMarkerSymbol("img/icon.png", 25, 25);

    //要在模版中显示的参数
    var attr = {
        "address": "测试"
    };

    //创建模版
    var infoTemplate = new esri.InfoTemplate("信息详情", "地址:${address}");
    //创建图像
    var graphic = new esri.Graphic(pt, symbol1, attr, infoTemplate);
    //把图像添加到刚才创建的图层上
    graphicLayer.add(graphic);
    setMapCenter(xx, yy, 10);
}

function setMapCenter(xx, yy, level) {
    var point = new esri.geometry.Point(xx, yy, map.spatialReference);
    map.centerAndZoom(point, level);
}

//添加标注
function mapAddOverLay(xx, yy, id, labelname) {
    var point = new BMap.Point(xx, yy);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker); //添加标注

    allMarkers.push(marker); //记录覆盖物句柄

    if (labelname !== "") {
        var label = new BMap.Label(labelname, {
            offset: new BMap.Size(20, -10)
        });
        marker.setLabel(label); //添加Label
    }

    //添加标注回调
    addOverlayCallback(marker, xx, yy, id);
}

function getNoticeInfo(id) {
    $('#tjwqDetails').window('open');
    $.ajax({
        url: "../../AjaxHandler/IndexHandler.ashx",
        data: {
            method: 'GetNoticeInfo',
            id: id,
        },
        async: false,
        dataType: "json",
        type: "post",
        success: function (json) {
            // console.log(json);
            $("#title").html(json.rows[0].TITLE);
            $("#author").html(json.rows[0].PSN);
            $("#subDateTime").html(json.rows[0].STARTDATE);
            $("#Msg").html(json.rows[0].CONTENT);
        }
    });


}
$.ajax({
    url: '../../AjaxHandler/IndexHandler.ashx',
    type: 'POST',
    async: false,
    data: {
        method: 'GGLB'
    },
    error: function (a) {

    },
    success: function (json) {
        $('.carinfo-dis').remove();
        //console.log(json);
        json = eval('(' + json + ')');
        for (var c = 0; c < json.rows.length; c++) {
            //console.log(json.rows[c]);
            //console.log('#notice' + json.rows[c].TYPE + ' .car-content-source');


            $('#notice' + json.rows[c].TYPE + ' .car-content-source').append(
                '<li class="carinfo-dis" style="width:100%;height:auto; display:table;margin:0;padding:0;background:#f8f8f8;">' +
                '<div style="width:25%;border-right:1px solid #ccc;border-bottom:1px solid #ccc;color:#383838;letter-spacing:1px;height:41px;line-height:41px;float:left;font-size:12px;text-align:center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap" title="' + json.rows[c].TITLE + ' "><a class="mydialogBtn"  href="javascript:getNoticeInfo(' + json.rows[c].ID + ');" style="color: #383838;">' + json.rows[c].TITLE + '</a></div>' +
                '<div style="overflow:hidden;width:25%;border-right:1px solid #ccc;border-bottom:1px solid #ccc;color:#383838;letter-spacing:1px;height:41px;line-height:41px;float:left;font-size:12px;text-align:center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap" title="' + json.rows[c].CONTENT + ' ">' + json.rows[c].CONTENT + '</div>' +
                '<div style="width:25%;border-right:1px solid #ccc;border-bottom:1px solid #ccc;color:#383838;letter-spacing:1px;height:41px;line-height:41px;float:left;font-size:12px;text-align:center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap"title="' + json.rows[c].PSN + ' ">' + json.rows[c].PSN + '</div>' +
                '<div style="width:25%;border-bottom:1px solid #ccc;color:#383838;letter-spacing:1px;height:41px;line-height:41px;float:left;font-size:12px;text-align:center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap" title="' + json.rows[c].STARTDATE + ' ">' + json.rows[c].STARTDATE + '</div>' +
                '</li>'
            );

        }
    }
});
