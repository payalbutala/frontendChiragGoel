const commentContainer = document.getElementById("commentContainer");

const getForm = () => {
  return `
    <div class="form">
        <input type="text" placeholder="Your Name" />
        <textarea placeholder="comment"></textarea>
        <div class="form-buttons">
        <button class="post">Post</button>
        <button class="cancel">Cancel</button>
        </div>
    </div>
  `;
};

let getContent = (name, comment) => {
  return `
    <div class="content">
        ${getMainContent(name, comment)}
        <div class="sub-comments"><div class="comments"></div></div>
    </div>
    `;
};

const getMainContent = (name, comment) => {
  return `<div class="main-comment">
    <p class="text-bold name">${name}</p>
    <p class="comment-text">${comment}</p>
    <div class="btn-holder">
      <button class="btn btn-primary small reply">Reply</button>
    </div>
  </div>`;
};

function generateCommentWithContent(content, divRef) {
  const contentDivRef = document.createElement("div");
  contentDivRef.classList.add("comment");
  contentDivRef.innerHTML = content;
  divRef.appendChild(contentDivRef);
}

function generateCommentWithForm(content, divRef) {
  const contentRef = document.createElement("div");
  contentRef.classList.add("comment");
  contentRef.innerHTML = content;
  divRef.appendChild(contentRef);
}

function createComment(name, description, ref) {
  const defaultContent = getContent(name, description);
  generateCommentWithContent(defaultContent, ref);
}
createComment("Payal", "First Comment", commentContainer);

commentContainer.addEventListener("click", function (ev) {
  console.log(ev.target);
  if (ev.target.classList.contains("reply")) {
    const formData = getForm();
    const parentCommentRef = ev.target.closest(".comment");
    const subCommentRef = parentCommentRef.querySelector(".sub-comments");
    generateCommentWithForm(formData, subCommentRef);
  }

  if (ev.target.classList.contains("post")) {
    const formRef = ev.target.closest(".form");
    const inputValue = formRef.querySelector("input").value;
    const textAreaValue = formRef.querySelector("textarea").value;
    console.log(inputValue, textAreaValue);
    const subCommentRef = ev.target.closest(".sub-comments");
    const commentWithFormRef = ev.target.closest(".comment");
    createComment(inputValue, textAreaValue, subCommentRef);
    commentWithFormRef.remove();
  }

  if (ev.target.classList.contains("cancel")) {
    const formRef = ev.target.closest(".form");
    formRef.remove();
  }
});
