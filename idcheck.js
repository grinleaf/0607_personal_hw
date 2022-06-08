function idcheck(){
    $.ajax({
        url: "http://grinleaf.dothome.co.kr/0607_personal_hw/idcheck.js",
        type: "POST",
        data: { },
        success: function(response){
            alert(response)
        },
        error: function(request, error){
            alert(request)
        }
    });
}