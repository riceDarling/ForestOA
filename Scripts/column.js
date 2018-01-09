var tjwqTitleVal = $('.tjwqtitle').text().trim();
if($(".listbtnz").hasClass("tjwqActive")) {
	var secVal = $('.tjwqActive').text();
}
if(secVal == undefined) {
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
	"公文办理": "./handle-documents.html",
	"账号权限管理": "./admin-permission.html",
	"公文统计查询": "./statistics-document.html",
	"值班表及考核表登记": "./statistics-workingshift.html",
	"工作计划": "./statistics-check.html",
	"通知通告": "./statistics-notice.html",
}
$(document).on("click", "[frameHref]", function() {
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
$('.chartmapbox_xk ul a').click(function() {

	if(!$(this).is(".on_xk")) {
		$(this).addClass("on_xk").parent("li").siblings("li").children("a").removeClass("on_xk");

	}
	if($(this)[0].id == "id4") {
		$("#chart_xk").css("display", "block");
		$("#chart_xk1").css("display", "none");
		$("#chart_xk2").css("display", "none");
	}
	if($(this)[0].id == "id5") {
		$("#chart_xk").css("display", "none");
		$("#chart_xk1").css("display", "block");
		$("#chart_xk2").css("display", "none");
	}
	if($(this)[0].id == "id6") {
		$("#chart_xk").css("display", "none");
		$("#chart_xk1").css("display", "none");
		$("#chart_xk2").css("display", "block");
	}
});