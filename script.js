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
    $('#jeu').click(function () {

    defile();
    });

});