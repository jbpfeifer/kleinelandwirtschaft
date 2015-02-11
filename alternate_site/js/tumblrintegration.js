$(document).ready (function(){
    
    
    $(".ajax").colorbox({inline:true, width:"500px", height:"500px"});
    $(".iframe").colorbox({inline:true, width:"500px", height:"500px"});
    
    
    
   
        
            
        

    pagination();
});


function pagination() {
        url = $(location).attr('href')
        page = url.substring(url.lastIndexOf('/') + 1);

    if (page==="?page=0") {
        $(".one").css( "visibility","visible");
        $(".two").css( "visibility","visible");
        $(".three").css( "visibility","visible");
        $(".four").css( "visibility","visible");
        $(".five").css( "visibility","visible");
        $(".six").css( "visibility","visible");
        $(".seven").css( "visibility","visible");
        $(".eight").css( "visibility","visible");
        $(".nine").css( "visibility","visible");
        $(".ten").css( "visibility","visible");
        $(".eleven").css( "visibility","visible");
    }
    if (page==="?page=1") {
        $(".one").css( "visibility","visible");
        $(".two").css( "visibility","hidden");
        $(".three").css( "visibility","hidden");
        $(".four").css( "visibility","hidden");
        $(".five").css( "visibility","hidden");
        $(".six").css( "visibility","visible");
        $(".seven").css( "visibility","visible");
        $(".eight").css( "visibility","visible");
        $(".nine").css( "visibility","visible");
        $(".ten").css( "visibility","visible");
        $(".eleven").css( "visibility","visible");
    }
    if (page==="?page=2") {
        $(".one").css( "visibility","visible");
        $(".two").css( "visibility","visible");
        $(".three").css( "visibility","hidden");
        $(".four").css( "visibility","hidden");
        $(".five").css( "visibility","hidden");
        $(".six").css( "visibility","visible");
        $(".seven").css( "visibility","visible");
        $(".eight").css( "visibility","visible");
        $(".nine").css( "visibility","visible");
        $(".ten").css( "visibility","visible");
        $(".eleven").css( "visibility","hidden");
    }
    if (page==="?page=3") {
        $(".one").css( "visibility","visible");
        $(".two").css( "visibility","visible");
        $(".three").css( "visibility","visible");
        $(".four").css( "visibility","hidden");
        $(".five").css( "visibility","hidden");
        $(".six").css( "visibility","visible");
        $(".seven").css( "visibility","visible");
        $(".eight").css( "visibility","visible");
        $(".nine").css( "visibility","visible");
        $(".ten").css( "visibility","hidden");
        $(".eleven").css( "visibility","hidden");
    }
    if (page==="?page=4") {
        $(".one").css( "visibility","visible");
        $(".two").css( "visibility","visible");
        $(".three").css( "visibility","visible");
        $(".four").css( "visibility","visible");
        $(".five").css( "visibility","visible");
        $(".six").css( "visibility","visible");
        $(".seven").css( "visibility","visible");
        $(".eight").css( "visibility","visible");
        $(".nine").css( "visibility","hidden");
        $(".ten").css( "visibility","hidden");
        $(".eleven").css( "visibility","hidden");
    }
    if (page==="?page=5") {
        $(".one").css( "visibility","visible");
        $(".two").css( "visibility","visible");
        $(".three").css( "visibility","visible");
        $(".four").css( "visibility","visible");
        $(".five").css( "visibility","visible");
        $(".six").css( "visibility","hidden");
        $(".seven").css( "visibility","visible");
        $(".eight").css( "visibility","hidden");
        $(".nine").css( "visibility","hidden");
        $(".ten").css( "visibility","hidden");
        $(".eleven").css( "visibility","hidden");
    }
    if (page==="?page=6") {
        $(".one").css( "visibility","visible");
        $(".two").css( "visibility","visible");
        $(".three").css( "visibility","visible");
        $(".four").css( "visibility","visible");
        $(".five").css( "visibility","visible");
        $(".six").css( "visibility","visible");
        $(".seven").css( "visibility","visible");
        $(".eight").css( "visibility","visible");
        $(".nine").css( "visibility","visible");
        $(".ten").css( "visibility","visible");
        $(".eleven").css( "visibility","visible");
    }
    if (page==="?page=7") {
        $(".one").css( "visibility","visible");
        $(".two").css( "visibility","visible");
        $(".three").css( "visibility","visible");
        $(".four").css( "visibility","visible");
        $(".five").css( "visibility","visible");
        $(".six").css( "visibility","visible");
        $(".seven").css( "visibility","visible");
        $(".eight").css( "visibility","visible");
        $(".nine").css( "visibility","visible");
        $(".ten").css( "visibility","visible");
        $(".eleven").css( "visibility","visible");
    }
}
function loadPage2 () {
    $(".one").css( "visibility","visible");
    $(".two").css( "visibility","visible");
    $(".three").css( "visibility","hidden");
    $(".four").css( "visibility","hidden");
    $(".five").css( "visibility","hidden");
    $(".six").css( "visibility","visible");
    $(".seven").css( "visibility","visible");
    $(".eight").css( "visibility","visible");
    $(".nine").css( "visibility","visible");
    $(".ten").css( "visibility","visible");
    $(".eleven").css( "visibility","hidden");
    
    History.pushState( null, null, '?page=2');
        $(".container .page:nth-of-type(1)").css({
            "-webkit-transform":"rotatey(-180deg)"
        });
                                            
        $(".container .page:nth-of-type(2)").css({
            "z-index":"7",
            "-webkit-transform":"rotatey(-180deg)"
        });
}
    
