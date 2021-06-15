const task = document.querySelector('.listado-pendientes')
if (task) {
  task.addEventListener('click', e => {
    if (e.target.classList.contains('fa-check-circle')) {
      const icon = e.target
      const id = icon.parentElement.parentElement.dataset.task
    }
  })
}

export default task
