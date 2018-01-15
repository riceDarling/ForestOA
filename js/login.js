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
