//step 1:take the button,
document.getElementById('post').addEventListener('click', function () {

    //step 2: from where to take the comment,
    const Comment = document.getElementById('newcomment')
    const newComment = Comment.value;

    // step 3: Where to post the comment,
    const CommentCont = document.getElementById('commentCon');
    const p = document.createElement('p');
    p.innerText = newComment;
    CommentCont.appendChild(p)

    // step 4: empty the comment box,
    Comment.value = ''


})