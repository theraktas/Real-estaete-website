let prvBtn = document.querySelector(".prv-btn")
let nxtBtn = document.querySelector(".nxt-btn")
let comments = document.querySelectorAll(".comment-content")
let commentContainer = document.querySelector(".slider-container")
let index = 1
let move = 0

nxtBtn.addEventListener('click', function () {
    if (index < comments.length) {
        let commentWidth = comments[index].offsetWidth
        move += commentWidth
        commentContainer.style.transform = 'translateX(-' + move + 'px)'
        index++
    }

})
prvBtn.addEventListener('click', function () {
    if (index > 1) {
        let commentWidthh = comments[index - 1].offsetWidth
        move -= commentWidthh
        commentContainer.style.transform = 'translateX(-' + move + 'px)'
        index--
    }
})