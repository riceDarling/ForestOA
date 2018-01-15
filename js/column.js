var tjwqTitleVal = $('.tjwqtitle').text().trim();
if($(".listbtnz").hasClass("tjwqActive")) {
	var secVal = $('.tjwqActive').text();
}
if (secVal == undefined) {
    $('#tjwqtitlenav').text('欢迎登陆本系统！您当前的位置为:' + tjwqTitleVal);
} else {
    $('#tjwqtitlenav').text('欢迎登陆本系统！您当前的位置为:' + tjwqTitleVal + ' > ' + secVal);
}

$('#tjwqBtn div').click(function() {

	var self = $(this);
	if(self.attr("url") != undefined && self.attr("url") != "") {
		var url = self.attr("url");
		//alert(url);
		$("#mainFrame").attr("src", url);
	}

})
$('#tjwqBtn .listbtnz').click(function() {
	if($(this).next().is(".list_hidegrp")) {
		if($(this).is(".on_xk")) {
			$(this).removeClass("on_xk");
			$(this).next(".list_hidegrp").stop().animate({
				"height": 0
			}, 300);
		} else {
			$(this).addClass("on_xk").siblings(".listbtnz").removeClass("on_xk");
			var _thisheight_ = $(this).next(".list_hidegrp").stop().height();
			var _thisaim_ = $(this).next(".list_hidegrp").css("height", "auto").height();
			$(this).next(".list_hidegrp").css("height", _thisheight_).animate({
				"height": _thisaim_
			}, 300);
			$(this).next(".list_hidegrp").siblings(".list_hidegrp").stop().animate({
				"height": 0
			}, 300);
		}
	} else {
		$(this).addClass("on_xk").siblings(".listbtnz").removeClass("on_xk");
		$(this).siblings(".list_hidegrp").stop().animate({
			"height": 0
		}, 300);
		$('#tjwqBtn .listbtnz').removeClass('tjwqActive');
		$(this).addClass('tjwqActive');
		var tjwqTitleVal = $('.tjwqtitle').text().trim();
		if($(".listbtnz").hasClass("tjwqActive")) {
			var secVal = $('.tjwqActive').children("div").text();
		}
		if(secVal == undefined) {
			$('#tjwqtitlenav').text('欢迎登陆本系统！您当前的位置为:' + tjwqTitleVal);
		} else {
			$('#tjwqtitlenav').text('欢迎登陆本系统！您当前的位置为:' + tjwqTitleVal + ' > ' + secVal);
		}
	}
});
var linkjump = {
	"公文-发文管理_拟稿": "documentsSendFile.html",
	"公文-发文管理_核稿": "documentsSendFileHandle.html",
	"公文-发文管理_审核": "documentsSendFileHandle.html",
	"公文-发文管理_签批": "documentsSendFileHandle.html",
	"公文-发文管理_校核": "documentsSendFileHandle.html",
	"公文-发文管理_盖章": "documentsSendFileHandle.html",
	"公文-发文管理_发文": "documentsSendFileHandle.html",
	
	"公文-收文管理_收文登记": "documentsInFile.html",
	"公文-收文管理_领导批阅": "documentsInFileHandle.html",
	"公文-收文管理_收文传阅": "documentsInFileHandle.html",
	"公文-收文管理_收文承办": "documentsInFileHandle.html",
	"公文-收文管理_收文归档": "documentsInFileHandle.html",
	
	"简报-发文管理_拟稿": "briefingSendFile.html",
	"简报-发文管理_核稿": "briefingSendFileHandle.html",
	"简报-发文管理_审核": "briefingSendFileHandle.html",
	"简报-发文管理_签批": "briefingSendFileHandle.html",
	"简报-发文管理_校核": "briefingSendFileHandle.html",
	"简报-发文管理_盖章": "briefingSendFileHandle.html",
	"简报-发文管理_发文": "briefingSendFileHandle.html",
	
	"简报-收文管理_收文登记": "briefingInFile.html",
	"简报-收文管理_领导批阅": "briefingInFileHandle.html",
	"简报-收文管理_收文传阅": "briefingInFileHandle.html",
	"简报-收文管理_收文承办": "briefingInFileHandle.html",
	"简报-收文管理_收文归档": "briefingInFileHandle.html",
	
	"公文管理":'documents-manager.html',
	"公文搜索":'documents-search.html',
	"权限管理":'admin-permission.html',
	"组织管理":'region-manage.html',
	"人员管理":'personnel-manage.html',
	"统计查询":'statistics-document.html',
	"值班表":'statistics-workingshift.html',
	"考核表":'statistics-check.html',
	"工作计划":'statistics-workplan.html',
	"通知通告":'statistics-notice.html',
	"收发单位管理":'unit-file-management.html',
	
}
$(document).on("click", "[frameHref]", function () {
	var _thishref_ = $(this).attr("frameHref");
	if(_thishref_ == undefined || _thishref_ == null || _thishref_ == "") {
		if($(this).children("div").length) {
			_thishref_ = $(this).children("div").text();
		} else {
			_thishref_ = $(this).text();
		}

	}
	if(linkjump[_thishref_] != undefined && linkjump[_thishref_] != null && linkjump[_thishref_] != "") {
		_thishref_ = linkjump[_thishref_];
	}
	try {
		$("#mainFrame").attr("src", _thishref_);
	} catch(e) {
		//TODO handle the exception
	}
})

window.onload = function() {
	var oDiv = document.getElementById('roll');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var speed = -4;
	var oBtn1 = oDiv.getElementsByTagName('a')[0];
	var oBtn2 = oDiv.getElementsByTagName('a')[1];
	var roll_timer = null;

	oUl.innerHTML += oUl.innerHTML;
	oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';

	/*roll_timer = setInterval(function() {
	oUl.style.left = oUl.offsetLeft + speed + 'px';
	if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
		oUl.style.left = 0 + 'px';
	} else if(oUl.offsetLeft > (0)) {
		oUl.style.left = -oUl.offsetWidth / 2 + 'px';
	}
	}, 30);*/

	//左
	oBtn1.onclick = function() {
		speed = 82;
		oUl.style.left = oUl.offsetLeft + speed + 'px';
		if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
			oUl.style.left = 0 + 'px';
		} else if(oUl.offsetLeft > (0)) {
			oUl.style.left = -oUl.offsetWidth / 2 + 'px';
		}
	}
	//右
	oBtn2.onclick = function() {
		speed = -82;
		oUl.style.left = oUl.offsetLeft + speed + 'px';
		if(oUl.offsetLeft < -oUl.offsetWidth / 2) {
			oUl.style.left = 0 + 'px';
		} else if(oUl.offsetLeft > (0)) {
			oUl.style.left = -oUl.offsetWidth / 2 + 'px';
		}
	}
};

/*--------------------------------*/
$('.chartmapbox_xk ul a').click(function () {

    if (!$(this).is(".on_xk")) {
        $(this).addClass("on_xk").parent("li").siblings("li").children("a").removeClass("on_xk");

    }
    if ($(this)[0].id == "id4") {
        $("#chart_xk").css("display", "block");
        $("#chart_xk1").css("display", "none");
        $("#chart_xk2").css("display", "none");
    }
    if ($(this)[0].id == "id5") {
        $("#chart_xk").css("display", "none");
        $("#chart_xk1").css("display", "block");
        $("#chart_xk2").css("display", "none");
    }
    if ($(this)[0].id == "id6") {
        $("#chart_xk").css("display", "none");
        $("#chart_xk1").css("display", "none");
        $("#chart_xk2").css("display", "block");
    }
});

