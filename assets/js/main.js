const nameInput = document.getElementById("Name");
const generateBtn = document.getElementById("generateBtn");
const mainDiv = document.getElementById("main-div");

generateBtn.addEventListener("click", async () => {
  const name = nameInput.value.trim();
  if (!name) {
    alert("Please enter a name.");
    return;
  }
});