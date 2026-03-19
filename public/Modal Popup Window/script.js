const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const doneBtn = document.getElementById("doneBtn");
const modalOverlay = document.getElementById("modalOverlay");

function openModal() {
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; 
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
doneBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});
