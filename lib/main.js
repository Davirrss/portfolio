$(document).ready(function () {
    function responsivomenu() {
        if ($(window).width() <= 720) {
            if ($('#bmenures').length === 0) {
                var ver_bmenures = false;
                var bmenures = $('<button>').attr({
                    id: 'bmenures'
                }).click(function () {
                    if (!ver_bmenures) {
                        $('.link-section').show();
                        ver_bmenures = true;
                    } else {
                        $('.link-section').hide();
                        ver_bmenures = false;
                    }
                }).text('botão');
                $('header').append(bmenures);
                $('.link-section').hide();
            }
        } else {
            $('.link-section').css('display', 'block');
            $('#bmenures').remove();
        }
    }

    responsivomenu();

    $(window).on('resize', function () {
        responsivomenu();
    });
});
