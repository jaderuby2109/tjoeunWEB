// 문서 준비 이벤트
$(function () {
    const mainMenu = $('.menu');
    const subMenu = $('.sub .inner');

    // mainMenu.on('mouseover', function() {
    //     subMenu.stop().fadeIn() ;
    // });
    // mainMenu.on('mouseout', function() {
    //     subMenu.stop().fadeOut() ;
    // });
    mainMenu.hover(
        function () {
            subMenu.stop().fadeIn();
        },
        function () {
            subMenu.stop().fadeOut();
        }
    );
})