$(function () {
    // 이벤트 처리 메소드
    // -on('이벤트 타입', 콜백함수{})
    // * 이벤트 타입 : click, keyup, change,...

    /* 
        콜백함수
        - function() : $(this) 사용가능
        - () => {} : $(this) 사용불가
    */

    $('#item1').on('click', function () {
        $('#item1').css('color', 'red')
    })

    $('#item2').on('click', function () {
        $(this).css('color', 'pink')
    })

    $('#item3').on('mouseover', function () {
        $(this).css('color', 'blue')
        $(this).css('background-color', 'pink')
    })

    $('#item3').on('mouseout', function () {
        $(this).css('color', 'white')
        $(this).css('background-color', '#3498db')
    })

    // 메서드 체인
    // : 하나의 jQuery 객체에 여러 메소드를 연결하는 기법
    $('#item4').on('mouseover', function () {
        $(this).css('color', 'blue')
        $(this).css('background-color', 'pink')
    }).on('mouseout', function () {
        $(this).css('color', 'white')
        $(this).css('background-color', '#3498db')
    })

    $('#item5')
        .on('mouseover', function () {
            $(this).css('color', 'blue')
            $(this).css('background-color', 'pink')
        }).on('mouseout', function () {
            $(this).css('color', 'white')
            $(this).css('background-color', '#3498db')
        }).on('click', function () {
            $(this).css('color', 'springgreen')
        }).on('dblclick', function () {
            $(this).css({
                'border' : '10px solid pink',
                'background-color' : 'black',
                'color' : 'yellow'
            })
        })
})