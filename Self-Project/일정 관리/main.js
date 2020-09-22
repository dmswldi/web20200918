$(document).ready(function(){
    var date = new Date();
    document.getElementById("date").innerHTML =  `${date.getMonth() + 1}월 ${date.getDate()}일`;

    $("#plus").click(function() {
        $(".add-modal").show();
    });
    $("#exit").click(function(){
        $(".add-modal").hide();
    });

    
});