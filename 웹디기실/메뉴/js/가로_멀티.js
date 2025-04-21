// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {

    // 모든 서브 메뉴
    const mainMenuList = document.querySelectorAll('.main-menu > .menu-item');

    mainMenuList.forEach(function (menu) {

        // 서브 메뉴
        const subMenuList = document.querySelectorAll('.submenu');

        // 마우스 올렸을 때
        menu.onmouseover = () => {
            subMenuList.forEach((submenu) => {
                submenu.classList.add('active')
            })
        }

        // 마우스 벗어날 때
        menu.onmouseout = () => {
            subMenuList.forEach((submenu) => {
                submenu.classList.remove('active')
            })
        }
    })
})