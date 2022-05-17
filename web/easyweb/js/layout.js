$(window).ready(function(){
    var headerHamSW = 0;
    $("#headerHamBtn").click(function(){
        if(headerHamSW == 0){
            headerHamSW = 1;
            $(".header--menu-mob").addClass('on')
        }else if(headerHamSW == 1){
            headerHamSW = 0;
            $(".header--menu-mob").removeClass('on')
        }
    })
})