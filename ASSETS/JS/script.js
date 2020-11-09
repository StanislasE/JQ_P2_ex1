$(function(){
    $('.img').mouseover(function(){  // Quand le curseur est sur l'image (class img), cela déclanche un agrandissement
            // $('img').height(700);    // ( x ) valeur x en px
            $(this).height(700);        // 'this' cible chaque img indépendamment
        });
    $('.img').mouseout(function(){   // Quand le curseur est sur l'image, cela déclanche un rétrécissement
            $('img').height(500);
        });
});