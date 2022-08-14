const initModal = () => {
  const reload = document.querySelector(".reload-btn");

  reload.addEventListener('click', () => location.reload());

  const modal = document.getElementById("stats-modal");
  modal.style.display = 'block';

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

export { initModal }
