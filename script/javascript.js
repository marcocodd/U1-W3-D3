const addList = function () {
  const inputList = document.getElementById("input");
  console.log(inputList);
  console.log(inputList.value);

  const newLi = document.createElement("li");

  console.log(newLi);

  newLi.innerText = inputList.value;

  const uList = document.getElementById("ul");

  uList.appendChild(newLi);

  newLi.classList.add("liStyleCursor");

  const hiddenButton = document.createElement("button");
  hiddenButton.innerText = "Delete";
  newLi.appendChild(hiddenButton);
  hiddenButton.classList.add("buttonStyle");
  hiddenButton.addEventListener("click", function () {
    hiddenButton.parentElement.remove();
  });

  newLi.addEventListener("click", function () {
    newLi.classList.toggle("liStyle");
  });
  inputList.value = " ";
};
