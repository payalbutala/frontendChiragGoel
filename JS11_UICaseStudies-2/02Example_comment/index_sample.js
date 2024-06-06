let parentRef = document.querySelector(".parent");
postBtnRef = document.querySelector(".post");

parentRef.addEventListener("click", function (ev) {
  const divRef = document.createElement("div");
  const parentDiv = ev.target.closest(".parent");
  console.log(parentDiv.querySelector("input").value);
  if ([...ev.target.classList].includes("post")) {
    // debugger;
    divRef.classList.add("parent");
    const inputVal = parentDiv.querySelector("input").value;
    const txtVal = parentDiv.querySelector("textarea").value;
    divRef.innerHTML = renderHTML(inputVal, txtVal);
    parentDiv.appendChild(divRef);
  }
});

function renderHTML(input, description) {
  return `
      <h4>My Name is ${input}. I love you </h4>  
      <h5>${description} </h5>
      <input type="text" placeholder="enter name" class="ip-name" />
      <textarea placeholder="comment"></textarea>
      <button class="post">Reply</button>
    `;
}
