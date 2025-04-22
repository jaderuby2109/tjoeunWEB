// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {
    // // 이미지 3장
    const slides = document.querySelector('#slide');
    const img = document.querySelectorAll('.silde img');
    const count = img.length;
    const size = 1200;
    const delay = 3000;
    const speed = 1000;
    let index = 0;

    // 이미지 슬라이드 복제
    const list = [];
    for (let i = 0; i < img.length; i++) {
        const clone = img[i].cloneNode(true);
        list.push(clone);
    }

    // 다 비우고 1,2번 이미지 넣기
    slides.innerHTML = ''
    slides.appendChild(list[index]);
    slides.appendChild(list[index + 1]);

    // 애니메이션 
    function animate(size) {
        for (let i = 0; i < list.length; i++) {
            const slideImg = list[i];
            slideImg.style.transform = `translateX( ${size}px )`

        }
    }

    // 슬라이드
    function silde() {
        // 사이즈만큼 슬라이드
        animate(-size);
        // index 계산
        index = (index + 1) % count;
        next = (index + 1) % count;

        // 다음 슬라이드로 전환
        setTimeout(() => {
            slides.innerHTML = ''
        }, timeout);
    }





    setInterval(silde, 3000)
})