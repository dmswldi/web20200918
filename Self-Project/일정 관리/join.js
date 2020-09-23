document.addEventListener("DOMContentLoaded", function(){
    // $(document).ready;
    
    // document.getElementById("pwd").addEventListener("blur", pwdDes());
    /* document.getElementById("pwd").onblur = function(){pwdCk()};

    function pwdCk(){
        var txt = document.getElementsByTagName("p")[0].innerHTML;
        document.getElementsByTagName("input")[1].setAttribute("title", txt);
    } */


    pwd.onblur = function(){
        var pwd = document.getElementById("pwd").value;
        // console.log(document.getElementById("pwd").innerHTML); // null, var에 넣으면 값 나옴

        var numbers = /[0-9]/g;
        var lowerCase = /[a-z]/g;
    
        if (!pwd.match(numbers) || !pwd.match(lowerCase)){
            document.getElementsByTagName("p")[0].style.color = "red";
        }
    }

});