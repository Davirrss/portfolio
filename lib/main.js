$(document).ready(function () {
    function responsivomenu() {
        if ($(window).width() <= 720) {
            if ($('#bmenures').length === 0) {
                var ver_bmenures = false;
                var bmenures = $('<button>').attr({
                    id: 'bmenures'
                }).click(function () {
                    if (!ver_bmenures) {
                        $('.link-header').css('display', 'flex');
                        $('#bmenures').addClass('ativado');
                        ver_bmenures = true;
                        $('#bmenures').prop('disabled', true);
                        setTimeout(() => {
                            $('#bmenures').prop('disabled', false);
                        }, 1000);
                    } else {
                        $('.link-header').addClass('coisado');
                        $('#bmenures').prop('disabled', true);
                        setTimeout(function () {
                            $('.link-header').removeClass('coisado');
                            $('.link-header').css('display', 'none');
                            $('#bmenures').removeClass('ativado').prop('disabled', false);
                        }, 1000);
                        ver_bmenures = false;
                    }
                });
                $('.link-header').before(bmenures);
                $('.link-header').hide();
            }
        } else {
            $('.link-header').css('display', 'block');
            $('#bmenures').remove();
        }
    }

    function comparacaoCompetencia(button, compBid) {
        if (!button.hasClass('comp-active')) {
            $('.sobre-eu-competencias-botao button.comp-active').removeClass('comp-active');
            button.addClass('comp-active');
        }
        if (compBid === 'comp1') {
            if (!$('#comp1-info').hasClass('comp-info-active')) {
                $('.sobre-eu-competencias-info p.comp-info-active').removeClass('comp-info-active').css('display', 'none');
                $('#comp1-info').css('display', 'block').addClass('comp-info-active');
            }
        } else if (compBid === 'comp2') {
            if (!$('#comp2-info').hasClass('comp-info-active')) {
                $('.sobre-eu-competencias-info p.comp-info-active').removeClass('comp-info-active').css('display', 'none');
                $('#comp2-info').css('display', 'block').addClass('comp-info-active');
            }
        } else if (compBid === 'comp3') {
            if (!$('#comp3-info').hasClass('comp-info-active')) {
                $('.sobre-eu-competencias-info p.comp-info-active').removeClass('comp-info-active').css('display', 'none');
                $('#comp3-info').css('display', 'block').addClass('comp-info-active');
            }
        }
    }

    function infospaninteracao(texto, titulo) {
        var divbase = $('<div>', {
            class: 'base-div-info'
        }).append($('<div>', {
            class: 'base-div-info-bfechar'
        }).append($('<button>', {
            text: 'X'
        })).click(function () {
            $('.base-div-info').remove();
        })).append($('<div>', {
            class: 'base-div-info-titulo'
        }).append($('<p>', {
            text: titulo
        }))).append($('<div>', {
            class: 'base-div-info-conteudo'
        }).append($('<p>', {
            text: texto
        })));
        $('#sobre').before(divbase);
    }

    responsivomenu();

    $(window).on('resize', function () {
        responsivomenu();
    });

    $('.sobre-eu-competencias-botao button').click(function () {
        var compBid = $(this).attr('id');

        if (compBid === 'comp1' || compBid === 'comp2' || compBid === 'comp3') {
            comparacaoCompetencia($(this), compBid);
        }
    });

    $('.sobre-eu-competencias-info span').click(function () {
        var idSpanB = $(this).attr('id');
        if (idSpanB === 'comp-info-p1') {
            infospaninteracao('Comecei a usar a biblioteca JQuery desde o começo dos estudos em programação front end, utilizei ela em muitos projetos não formais.', 'JQuery');
        } else if (idSpanB === 'comp-info-p2') {
            infospaninteracao('HTML foi a primeira ferramenta que usei ao front end, pretendo me integrar mais nos seus elementos.', 'HTML');
        } else if (idSpanB === 'comp-info-p3') {
            infospaninteracao('No CSS eu cosegui entender as estilização dos sites e suas respectivas identidades, foi uma descoberta incrível.', 'CSS');
        } else if (idSpanB === 'comp-info-p4') {
            infospaninteracao('Em Bootstrap, tive algumas experiências em carrosséis e criação de menus com collapse e afins. Pretendo estudar mais sobre o mesmo.', 'Bootstrap');
        } else if (idSpanB === 'comp-info-p5') {
            infospaninteracao('Sobre o SASS, não tive tantas demonstrações de como usar, logo não tenho uma noção completa do mesmo.', 'SASS');
        }
    });

});
