// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {

    // 메인메뉴 영역
    const mainMenu = document.getElementById('main-menu');

    // 서브 메뉴
    const subMenuList = document.querySelectorAll('.submenu');

    // 마우스 올렸을 때
    mainMenu.onmouseover = () => {
        subMenuList.forEach((submenu) => {
            submenu.classList.add('active')
        })
        back.classList.add('active')
    }

    // 마우스 벗어날 때
    mainMenu.onmouseout = () => {
        subMenuList.forEach((submenu) => {
            submenu.classList.remove('active')
        })
        back.classList.remove('active')
    }
})