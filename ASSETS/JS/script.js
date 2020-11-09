$(function(){
    $('.img').mouseover(function(){  // Quand le curseur est sur l'image, cela déclanche un agrandissement
            $('img').height(700);    // ( x ) valeur x en px
        });
    $('.img').mouseout(function(){   // Quand le curseur est sur l'image, cela déclanche un rétrécissement
            $('img').height(500);
        });
});