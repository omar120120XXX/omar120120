$(document).ready(function () {
    if ($(window).width() > 1023) {
        $('#open-btn').click(function () {
            $('#mySidenav').css({
                'right': '60px',
                'opacity': '1',
                'visibility': 'visible'
            });
            $('#open-btn').addClass('active');
            $('#cls-btn').addClass('active');

        });
        $('#cls-btn').click(function () {
            $('#mySidenav').css({
                'right': '40px',
                'opacity': '0',
                'visibility': 'hidden'
            });
            $('#open-btn').removeClass('active');
            $('#cls-btn').removeClass('active');

        });
        $(document).on('click', function (e) {
            if ($(e.target).closest("#mySidenav, .slide-menu").length === 0) {
                $('#mySidenav').css({
                    'right': '40px',
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                $('#cls-btn').removeClass('active');
                $('#open-btn').removeClass('active');
            }
        });

    } else {
        $('#open-btn').click(function () {
            $('#mySidenav').css({
                'right': '0px',
                'opacity': '1',
                'visibility': 'visible'
            });
            $('#open-btn').addClass('active');
            $('#cls-btn').addClass('active');

        });
        $('#cls-btn').click(function () {
            $('#mySidenav').css({
                'right': '-250px',
                'opacity': '0',
                'visibility': 'hidden'
            });
            $('#open-btn').removeClass('active');
            $('#cls-btn').removeClass('active');

        });
        $(document).on('click', function (e) {
            if ($(e.target).closest("#mySidenav, .slide-menu").length === 0) {
                $('#mySidenav').css({
                    'right': '-250px',
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                $('#cls-btn').removeClass('active');
                $('#open-btn').removeClass('active');
            }
        });
    }
    $(window).scroll(function () {
        $('header').toggleClass('scrolled', $(this).scrollTop() > 10);
        if ($(this).scrollTop() > 100) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function () {
        $(".scroll").click(function () {
            $("html,body").animate({
                scrollTop: $(".banner, .otherpage-banner").offset().top
            }, "1000");
            return false
        })
    })
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }

})