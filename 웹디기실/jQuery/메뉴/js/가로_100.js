// 문서 준비 이벤트
$(function () {
    const mainMenu = $('.main-menu > .menu-item, #back');
    // mainMenu.on('mouseover', function () {
    //     $('.submenu').stop().slideDown();
    //     $('#back').stop().slideDown();
    // });
    // mainMenu.on('mouseout', function () {
    //     $('.submenu').stop().slideUp();
    //     $('#back').stop().slideUp();
    // });

    mainMenu.hover(
        function () {
            // $('.submenu').stop().slideDown();
            // $('#back').stop().slideDown();
            $('.submenu, #back').stop().slideDown();
        },
        function () {
            // $('.submenu').stop().slideUp();
            // $('#back').stop().slideUp();
            $('.submenu, #back').stop().slideUp();
        }
    );
})