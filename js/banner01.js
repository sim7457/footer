$(function () {

    $('.topBanner i').on('click', function () {
        $('.topBanner').toggleClass('on')
    });

    $('.topBanner2 i').on('click', function () {
        $('.topBanner2 .inner').slideToggle(1000);
    });

    $('.leftBanner i').on('click', function () {
        $('.leftBanner').toggleClass('on');
    });
    $('.rightBanner i').on('click', function () {
        $('.rightBanner').toggleClass('on');
    });

    $('.bottomBanner i').on('click', function () {
        $('.bottomBanner .inner').slideToggle();
    });
    $('.popup button').on('click', function () {
        $(this).parent().hide();
    })
});