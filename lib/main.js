$(document).ready(function () {
    function responsivomenu() {
        if ($(window).width() <= 720) {
            if ($('#bmenures').length === 0) {
                var ver_bmenures = false;
                var bmenures = $('<button>').attr({
                    id: 'bmenures'
                }).click(function () {
                    if (!ver_bmenures) {
                        $('.link-section').css('display', 'flex');
                        $('#bmenures').addClass('ativado');
                        ver_bmenures = true;
                    } else {
                        $('.link-section').addClass('coisado');
                        $('#bmenures').prop('disabled', true);
                        setTimeout(function () {
                            $('.link-section').removeClass('coisado');
                            $('.link-section').css('display', 'none');
                            $('#bmenures').removeClass('ativado').prop('disabled', false);
                        }, 700);
                        ver_bmenures = false;
                    }
                });
                
                $('.link-section').before(bmenures);
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
