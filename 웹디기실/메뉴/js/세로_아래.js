// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {

    // 메인메뉴 영역
    const mainMenu = document.querySelectorAll('.main-menu > .menu-item');

    mainMenu.forEach(function (menu) {
        //해당 메인 메뉴의 서브 메뉴
        const submenu = menu.children[1];

        // 마우스 올렸을 때
        // menu.addEventListener("mouseover", () => {
        menu.onmouseover = () => {
            submenu.classList.add('active')
        }
        // })
        // 마우스 벗어날 때
        // menu.addEventListener("mouseout", () => {
        menu.onmouseout = () => {
            submenu.classList.remove('active')
        }
        // })
    })

})