
// 댓글 추가
function addComment() {
    // 작성 내용 가져오기
    const writer = document.getElementById('writer').value
    const content = document.getElementById('content').value

    // 날짜
    const today = new Date()
    const date = today.toISOString().slice(0, 10) // 2025-04-18

    // 추가할 댓글 상자
    let commentCard = `<div class="comment-card">
                            <div class="title">
                                <div class="item">
                                    <div class="avatar">
                                        <img src="../../../img/icon1.jpg" width="80px" alt="프로필">
                                    </div>
                                    <div class="writer">${writer}</div>
                                </div>
                                <div class="item">
                                    <div class="date">${date}</div>
                                </div>
                            </div>
                            <div class="content-box">
                                <p class="content">
                                    ${content}
                                </p>
                            </div>
                        </div>`

    // 댓글 상자를 담을 div
    const commentList = document.getElementById('commentList')

    // 새로운 div
    // Node타입의 div를 생성하고 그 안에 html을 담아야 한다. 
    const card = document.createElement('div')

    // 새로운 div에 추가할 댓글 상자를 담음
    card.innerHTML = commentCard        // <div><div class="comment-card"> ..
    // commentCard는 Node가 아니라서 부모 요소에 appendChild 할 수 없다. 

    // 댓글 상자를 담을 div에 추가할 댓글 상자를 담은 div를 추가
    commentList.appendChild(card)

    document.getElementById('writer').value = ''
    document.getElementById('content').value = ''
}

// [작성] 버튼 클릭 이벤트
const btn = document.getElementById('commentBtn')
btn.addEventListener('click', (event) => {
    addComment()
})