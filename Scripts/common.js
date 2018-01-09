/* Copyright (c) 2010-2016 Marcus Westin */
(function(f) {
	if(typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f()
	} else if(typeof define === "function" && define.amd) {
		define([], f)
	} else {
		var g;
		if(typeof window !== "undefined") {
			g = window
		} else if(typeof global !== "undefined") {
			g = global
		} else if(typeof self !== "undefined") {
			g = self
		} else {
			g = this
		}
		g.store = f()
	}
})(function() {
	var define, module, exports;
	return(function e(t, n, r) {
		function s(o, u) {
			if(!n[o]) {
				if(!t[o]) {
					var a = typeof require == "function" && require;
					if(!u && a) return a(o, !0);
					if(i) return i(o, !0);
					var f = new Error("Cannot find module '" + o + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				}
				var l = n[o] = {
					exports: {}
				};
				t[o][0].call(l.exports, function(e) {
					var n = t[o][1][e];
					return s(n ? n : e)
				}, l, l.exports, e, t, n, r)
			}
			return n[o].exports
		}
		var i = typeof require == "function" && require;
		for(var o = 0; o < r.length; o++) s(r[o]);
		return s
	})({
		1: [function(require, module, exports) {
			(function(global) {
				"use strict";
				module.exports = function() {
					function e() {
						try {
							return o in n && n[o]
						} catch(e) {
							return !1
						}
					}
					var t, r = {},
						n = "undefined" != typeof window ? window : global,
						i = n.document,
						o = "localStorage",
						a = "script";
					if(r.disabled = !1, r.version = "1.3.20", r.set = function(e, t) {}, r.get = function(e, t) {}, r.has = function(e) {
							return void 0 !== r.get(e)
						}, r.remove = function(e) {}, r.clear = function() {}, r.transact = function(e, t, n) {
							null == n && (n = t, t = null), null == t && (t = {});
							var i = r.get(e, t);
							n(i), r.set(e, i)
						}, r.getAll = function() {}, r.forEach = function() {}, r.serialize = function(e) {
							return JSON.stringify(e)
						}, r.deserialize = function(e) {
							if("string" == typeof e) try {
								return JSON.parse(e)
							} catch(t) {
								return e || void 0
							}
						}, e()) t = n[o], r.set = function(e, n) {
						return void 0 === n ? r.remove(e) : (t.setItem(e, r.serialize(n)), n)
					}, r.get = function(e, n) {
						var i = r.deserialize(t.getItem(e));
						return void 0 === i ? n : i
					}, r.remove = function(e) {
						t.removeItem(e)
					}, r.clear = function() {
						t.clear()
					}, r.getAll = function() {
						var e = {};
						return r.forEach(function(t, r) {
							e[t] = r
						}), e
					}, r.forEach = function(e) {
						for(var n = 0; n < t.length; n++) {
							var i = t.key(n);
							e(i, r.get(i))
						}
					};
					else if(i && i.documentElement.addBehavior) {
						var c, u;
						try {
							u = new ActiveXObject("htmlfile"), u.open(), u.write("<" + a + ">document.w=window</" + a + '><iframe src="/favicon.ico"></iframe>'), u.close(), c = u.w.frames[0].document, t = c.createElement("div")
						} catch(l) {
							t = i.createElement("div"), c = i.body
						}
						var f = function(e) {
								return function() {
									var n = Array.prototype.slice.call(arguments, 0);
									n.unshift(t), c.appendChild(t), t.addBehavior("#default#userData"), t.load(o);
									var i = e.apply(r, n);
									return c.removeChild(t), i
								}
							},
							d = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
							s = function(e) {
								return e.replace(/^d/, "___$&").replace(d, "___")
							};
						r.set = f(function(e, t, n) {
							return t = s(t), void 0 === n ? r.remove(t) : (e.setAttribute(t, r.serialize(n)), e.save(o), n)
						}), r.get = f(function(e, t, n) {
							t = s(t);
							var i = r.deserialize(e.getAttribute(t));
							return void 0 === i ? n : i
						}), r.remove = f(function(e, t) {
							t = s(t), e.removeAttribute(t), e.save(o)
						}), r.clear = f(function(e) {
							var t = e.XMLDocument.documentElement.attributes;
							e.load(o);
							for(var r = t.length - 1; r >= 0; r--) e.removeAttribute(t[r].name);
							e.save(o)
						}), r.getAll = function(e) {
							var t = {};
							return r.forEach(function(e, r) {
								t[e] = r
							}), t
						}, r.forEach = f(function(e, t) {
							for(var n, i = e.XMLDocument.documentElement.attributes, o = 0; n = i[o]; ++o) t(n.name, r.deserialize(e.getAttribute(n.name)))
						})
					}
					try {
						var v = "__storejs__";
						r.set(v, v), r.get(v) != v && (r.disabled = !0), r.remove(v)
					} catch(l) {
						r.disabled = !0
					}
					return r.enabled = !r.disabled, r
				}();
			}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
		}, {}]
	}, {}, [1])(1)
});

var menuHtml = "<li class=\"car-manager\" style=\"display:none\" id=\"m_1\"><a href='CarQueryIndex.aspx'><i class='fa fa-sitemap'></i>主页</a></li>" +
	"<li class=\"car-manager\" style=\"display:none\" id=\"m_2\"><a href='CarQueryList.aspx'><i class='fa fa-sitemap'></i>检测数据查询</a></li>" +
	"<li class=\"car-manager\" style=\"display:none\" id=\"m_3\"><a href='CarWarnList.aspx'><i class='fa fa-sitemap'></i>疑似违规车辆</a></li >" +
	"<li class=\"car-manager\" style=\"display:none\" id=\"m_4\"><a href='Oil.aspx'><i class='fa fa-sitemap'></i>油气回收信息查询</a></li>" +
	"<li class=\"car-manager\" style=\"display:none\" id=\"m_5\"><a href='newcar/NewCarQuery.aspx'><i class='fa fa-sitemap'></i>车辆审核</a></li>" +
	"<li class=\"car-manager\" style=\"display:none\" id=\"m_6\"><a href='newcar/NewCarInsert.aspx'><i class='fa fa-sitemap'></i>车辆审核录入</a></li>" +
	"<li class=\"car-manager\" style=\"display:none\" id=\"m_7\"><a href='newcar/CarWeiHu.html'><i class='fa fa-sitemap'></i>车辆信息维护</a></li>" +
	"<li class=\"car-manager\" style=\"display:none\" id=\"m_8\"><a href='newcar/GetInfo.html'><i class='fa fa-sitemap'></i>环保部信息归集</a></li>" +
	"<li class=\"car-manager\" style=\"display:none\" id=\"m_9\"><a href='newcar/LoginLog.html'><i class='fa fa-sitemap'></i>日志管理</a></li>" +
	"<li class=\"car-manager\" style=\"display:none\" id=\"m_10\"><a href='newcar/Authority.html'><i class='fa fa-sitemap'></i>权限管理</a></li>";
if($("#main-menu") != null) {
	GetQueryString("");
	$("#main-menu").html(menuHtml);
	if(store.get(store.get('dengluzhanghao')) != undefined && store.get(store.get('dengluzhanghao')) != '') {
		var arrs = eval('(' + store.get(store.get('dengluzhanghao')) + ')').bianhao.split(',');

		for(var c = 0; c < arrs.length; c++) {
			$('#m_' + arrs[c]).show();
		}
	} else {
		$('.car-manager').show();
	}
	initMenu();
}
//if ($("#menu-authority") != null) {
//    alert($("#menu-authority"));
//    //alert("123123");
//    $("#menu-authority").html(menuHtml);
//    //$("#menu-authority li a").each(function (i) {
//    //    var text = $(this).text();
//    //    $(this).parent().html(text);
//    //    $(this).parent().attr("id","m"+i);
//    //});
//}

//function getRootPath_web() {
//    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
//    var curWwwPath = window.document.location.href;
//    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
//    var pathName = window.document.location.pathname;
//    var pos = curWwwPath.indexOf(pathName);
//    //获取主机地址，如： http://localhost:8083
//    var localhostPaht = curWwwPath.substring(0, pos);
//    //获取带"/"的项目名，如：/uimcardprj
//    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
//    return (localhostPaht + projectName);
//}
//alert( getRootPath_web());
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) {
		return unescape(r[2]);
	}
	return null;
}

function activeMenu(menu) {
	$("#main-menu li a[href=\"" + menu + "\"]").addClass("active-menu");
	$("#main-menu li .active-menu").append("<span class='fa arrow'></span>");
}

function initMenu() {
	var str = '';
	if(window.location.pathname.indexOf('?') != -1) {
		str = window.location.pathname.substring(1, window.location.pathname.indexOf('?'));
	} else {
		str = window.location.pathname.substring(1, window.location.pathname.length);
	}

	activeMenu(str);
	var c = "/"; // 要计算的字符
	var regex = new RegExp(c, 'g'); // 使用g表示整个字符串都要匹配
	var result = str.match(regex);
	var count = !result ? 0 : result.length;
	//console.log(c + " 的数量为 " + count);
	for(var i = 0; i < count; i++) {
		$("#main-menu li a").each(function() {
			$(this).attr("href", "../" + $(this).attr("href"));
		});
	}
}
/*


<li>
                        <a class="active-menu" href="CarQueryIndex.aspx"><i class="fa fa-dashboard"></i>主页</a>
                    </li>

                    <li>
                        <a  href="CarQueryList.aspx"><i class="fa fa-sitemap"></i>检测数据查询<span class="fa arrow"></span></a>
                    </li>
 <li>
                        <a  href="CarWarnList.aspx"><i class="fa fa-qrcode"></i>疑似违规车辆</a>
                    </li>
                     <li>
                        <a  href="Oil.aspx"><i class="fa fa-sitemap"></i>油气回收信息查询<span class="fa arrow"></span></a>
                    </li>


                                        <li>
                        <a href="VINQuery.aspx"><i class="fa fa-qrcode"></i>车辆审核</a>
                    </li>
                    <li style="display: none;">
                        <a href="tab-panel.html"><i class="fa fa-qrcode"></i>Tabs & Panels</a>
                    </li>

                    <li style="display: none;">
                        <a href="table.html"><i class="fa fa-table"></i>Responsive Tables</a>
                    </li>
                    <li style="display: none;">
                        <a href="form.html"><i class="fa fa-edit"></i>Forms </a>
                    </li>
                    <li style="display: none;">
                        <a href="empty.html"><i class="fa fa-fw fa-file"></i>Empty Page</a>
                    </li>
*/