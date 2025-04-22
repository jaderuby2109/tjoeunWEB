// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {

    // 메인메뉴 영역
    const mainMenuList = document.querySelectorAll('.main-menu > .menu-item');

    mainMenuList.forEach(function (menu) {
        //해당 메인 메뉴의 서브 메뉴
        const submenu = menu.children[1];

        // 마우스 올렸을 때
        menu.onmouseover = () => {
            submenu.classList.add('active')
        }

        // 마우스 벗어날 때
        submenu.onmouseout = () => {
            submenu.classList.remove('active')
        }
    })
})