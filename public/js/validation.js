function validate_signup(){if(""==$("input").val()||"0"==$("select").val())return $(".validate").html("<p class='w3-red w3-padding'>Fill in all fields!</p>"),!1;var e=$("[name='username']").val(),a=$("[name='fullname']").val(),l=$("[name='phone']").val(),n=$("[name='password']").val(),s=!0;return e.length<4&&($(".username").html("<p class='w3-red w3-padding'>Username too short!</p>"),s=!1),a.length<9&&($(".fullname").html("<p class='w3-red w3-padding'>Please enter your full name!</p>"),s=!1),l.length<10&&($(".phone").html("<p class='w3-red w3-padding'>Your phone is incomplete!</p>"),s=!1),n.length<6&&($(".pass").html("<p class='w3-red w3-padding'>Password should be more than 6 characterss!</p>"),s=!1),s}$(document).ready(function(){$("[name='username']").blur(function(){var e={username:$("[name='username']").val()};$.ajax({url:"/ajax/validate/username",method:"POST",data:e,success:function(e){"1"==e?$(".errs .username").html("<div class='panel w3-red w3-padding'>This username has been taken!</div>"):$(".errs .username").html("")}})}),$("[name='email']").blur(function(){var e={email:$("[name='email']").val()};$.ajax({url:"/ajax/validate/email",method:"POST",data:e,success:function(e){1==e?$(".errs .email").html("<div class='panel w3-red w3-padding'>The email is already been used!</div>"):$(".errs .email").html("")}})})});
