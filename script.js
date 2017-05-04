$(document).ready(function () {
    function defile(vitessejeu) {
        $('#fond1').animate({"bottom" : "-=360"},
                            vitessejeu ,
                            "linear",
                            function(){
                                $('#fond1').css("bottom" , "380px");
                                defile(vitessejeu);
                            }
        );

        $('#fond2').animate({"bottom" : "-=360"},
                            vitessejeu ,
                            "linear",
                            function(){
                                $('#fond2').css("bottom" , "0px");
                                defile(vitessejeu);
                            }
        );
    }
    function redmove() {
        $(window).keypress(function(e){
            var vitessedep = 6;
            if(e.keyCode == 37) {// flèche gauche
                $("#vr").animate({"left": "-="+vitessedep},
                                    5,
                                    "linear"
                                    );
            }
            if(e.keyCode == 39) { // flèche droite
                $("#vr").animate({"left" : "+="+vitessedep},
                                    5,
                                    "linear"
                                    );
            }
        });
    }

    function yellowcar(vitessejeu) {
        $('#vj').animate({"bottom" : "-=750"},
            vitessejeu ,
            "linear",
            function(){
                $('#vj').css("bottom" , "600px");//reinitialisation
                $('#vj').css("left", (50 + Math.floor(Math.random()*235))+"px");//position horizontale aléatoire
                yellowcar(vitessejeu);
            }
        );

    }
    function collision () {
        var redpos = $("#vr").position();
        var yelpos = $("#vj").position();
        if(                 //ca collisionne si : collison horizontale et verticale
        (               //collision horizontale si left de vj € [left de vr - largeur voiture , left de vr + largeur voiture]
            (yelpos.left > redpos.left-66)
            && (yelpos.left < redpos.left+66)
        )
        && //collision verticale
            (yelpos.top > redpos.top - 140)
        ){
            alert("collision!");
            setTimeout(collision, 1000);
        }
        else {
            setTimeout(collision, 50); //On attend 50 milisecondes avant d'exécuter la fonction
        }
    }

    $('#start').click(function () {
        var vitessejeu = 1500;
        redmove();
        defile(vitessejeu);
        yellowcar(vitessejeu);
        collision();
    });

});