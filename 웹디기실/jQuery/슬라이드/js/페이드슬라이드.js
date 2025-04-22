$(function () {
    let index = 0
    const speed = 1000 // 움직이는 시간
    const time = 4000 // 멈춰있는 시간

    const $slide = $('.slide');
    // const $container = $('.slide-container');

    const count = $slide.length;
    $slide.not(':first').hide() // 2,3 숨김

    setInterval(function () {
        index = (index + 1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time);
})