$(function (){

    //on ajoute un span après avoir fait dispaitre le bouton initial
    $('.custom_radio input[type=radio]').hide().after('<span class="off"></span>');

    //evt de click sur les spans
    $('.off').click(function(){

        //on déselectionne le précédent
        //on précise que la selection se fait uniquement dans le "block" dans lequel on se trouve
        $(this).parent().find('.on').prev().prop('checked','false');
        $(this).parent().find('.on').removeClass('on').addClass('off');

        //on selection l'elt en cours
        $(this).removeClass('off').addClass('on');
        $(this).prev().prop('checked','true');

    });


});