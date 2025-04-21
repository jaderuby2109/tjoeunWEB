// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {

    // 이미지 3장
    const slides = document.querySelectorAll('.slide img');
    let index = 1;
    let count = 3; 
    const size = 600;


    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.style.top = 600 ;
        slide.style.opacity = 0;
    }
    slides[0].style.top = 0 ;
    slides[0].style.opacity = 1 ;

    function slide2() {
        let beforeIndex = (index - 1) % count;
        let nowIndex = index;
        let NextIndex = (index + 1) % count;

        slides[beforeIndex].style.transform
            = `translateY( -600px )) `;

        slides[index].style.opacity = 1;
        slides[index].style.transform
            = `translateY( -600px )) `;
    }

    function slide() {
        //다음 순서 지정
        index = (index + 1) % 3;

        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            slide.style.transform
                = `translateY( calc(${size}px * -${index})) `

        }
    }

    setInterval(slide2, 3000);
})