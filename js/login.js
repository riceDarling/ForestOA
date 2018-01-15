function btnLoginClick() {
    var user = $("#name").val();
    var pwd = $("#password").val();
    var rem = $("#remember").attr("checked");
    if (user.length == 0) {
        alert("请输入登录名！");
        return false;
    }

    if (pwd.length == 0) {
        alert("请输入密码！");
        return false;
    }

    var data = {
        
        UserName: encodeURIComponent(user),
        UserPwd: encodeURIComponent(pwd),
        Remember: encodeURIComponent(rem),
        method: "UserLogin"
    };
    //debugger;
    $.ajax({
        url: 'AjaxHandler/LoginHandler.ashx',
        type: 'post',
        dataType: 'json',
        timeout: 10000, //设定超时  
        cache: false, //禁用缓存  
        data: data,
        error: function (xml) {
            alert("网络连接错误!");
        },
        success: function (json) {

            console.log(json);
            if (json.code==200) {
                window.location.href = 'index.aspx';
                alert("登陆成功！");
            } else {
                //window.location.href = 'Login.aspx';
                alert("用户名或密码错误");
            }


            //$(json).find("user").each(function (i) {
            //    var self = $(this);
            //    var name = self.attr("name"); //获取节点的属性  
            //    var password = self.attr("password");
            //    if (name == user && password == pwd) {
            //        store.set('dengluzhanghao', user);
            //        if (eval('(' + store.get(user) + ')') != undefined || eval('(' + store.get(user) + ')') != null) {
            //            window.location.href = 'index.aspx';
            //        } else {
            //            window.location.href = 'index.aspx';
            //        }
            //        return false;
            //    } else {
            //        if ($(json).find("user").length == i + 1) {
            //            
            //        }
            //    }

            //});
        }
    });
}
function showpwd() {
    var username = $('#name');
    var cookieinfo = getCookie("USER_COOKIE");
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
