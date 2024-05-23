userNameRef = document.querySelector(".username");
formRef = document.querySelector(".form");
previewRef = document.querySelector(".preview");

userNameRef.addEventListener("keyup", function (e) {
  e.preventDefault();
  console.log(e.keyCode);
  if (e.key == "Enter" || e.keycode == 13) {
    previewRef.innerText = userNameRef.value;
  }

  // iF capsLock is on it will return true otherwise False;
  console.log(e.getModifierState("CapsLock"));
});
