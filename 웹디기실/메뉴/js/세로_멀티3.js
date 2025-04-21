// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {

    // 메인메뉴 영역
    const mainMenu = document.querySelector('.main');

    // 서브 메뉴
    const subMenu = document.querySelector('.sub');

    // 메인 메뉴- 마우스 올렸을 때
    mainMenu.onmouseover = () => {
        subMenu.classList.add('active')
    }
    // 메인 메뉴- 마우스 올렸을 때
    subMenu.onmouseover = () => {
        subMenu.classList.add('active')
    }
    // 메인 메뉴 -마우스 벗어날 때
    mainMenu.onmouseout = () => {
        subMenu.classList.remove('active')
    }

    // 서브메뉴- 마우스 벗어날 때
    subMenu.onmouseout = () => {
        subMenu.classList.remove('active')
    }


})