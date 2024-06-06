const commentContainer = document.getElementById("commentContainer");

const getForm = () => {
    return `<div class="form">
    <input type="text" placeholder="Your Name" />
    <textarea placeholder="comment"></textarea>
    <div class="form-buttons">
      <button>Post</button>
      <button>Cancel</button>
    </div>
  </div>`;
}

let getContent = ((name, comment) => {
    return `<div class="content">
    ${getMainContent()}
    <div class="sub-comments"></div>
  </div>`;
})

const getMainContent = (name, comment) => {
    return `<div class="main-comment">
    <p class="text-bold name">${name}</p>
    <p class="comment-text">${comment}</p>
    <div class="btn-holder">
      <button class="btn btn-primary small reply">Reply</button>
    </div>
  </div>`
}