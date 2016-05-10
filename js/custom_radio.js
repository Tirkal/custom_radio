$(function (){

    //on ajoute un span après avoir fait dispaitre le bouton initial
    $('.custom_radio input[type=radio]').hide().after('<span class="off"></span>');

    //evt de click sur les spans
    $('.off').click(function(){

        //on déselectionne le précédent
        $('.on').prev().prop('checked','false');
        $('.on').removeClass('on').addClass('off');

        //on selection l'elt en cours
        $(this).removeClass('off').addClass('on');
        $(this).prev().prop('checked','true');

    });


    //vérif saisir
    $('#btn').click(function(){
        console.log($('input[name=choix]:checked').val());
    });

});