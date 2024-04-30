function updateFileName(input) {
  const label = input.parentElement;
  const fileName = input.files[0].name;
  const buttonText = label.querySelector(".inputbutton");
  buttonText.textContent = fileName;
}
