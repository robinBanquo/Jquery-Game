$(document).ready(function () {
    function defile() {
        $('#fond1').animate({"bottom" : "-=360"},
                            1000 ,
                            "linear",
                            function(){
                                $('#fond1').css("bottom" , "380px");
                                defile();
                            }
        );

        $('#fond2').animate({"bottom" : "-=360"},
                            1000 ,
                            "linear",
                            function(){
                                $('#fond2').css("bottom" , "0px");
                                defile();
                            }
        );

    }

    function redmove() {
        $(window).keypress(function(e){
            if(e.which == 37) {// flèche gauche
                $("#vr").animate({"right": "-=5"},
                    100,
                    "linear"
                );
            }
            if(e.which == 39) { // flèche droite
                    $("#vr").animate({"right" : "+=5"},
                        100 ,
                        "linear"
                    );
            }
        });


    }

    $('#start').click(function () {
    redmove();
    defile();
    });

});