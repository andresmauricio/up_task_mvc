import axios from 'axios'

const task = document.querySelector('.listado-pendientes')
if (task) {
  task.addEventListener('click', e => {
    if (e.target.classList.contains('fa-check-circle')) {
      const icon = e.target
      const id = icon.parentElement.parentElement.dataset.task
      const url = `${window.location.origin}/task/${id}`
      console.log({ url })
      axios.patch(url, { id }).then(response => {
        if (response.status === 202) {
          icon.classList.toggle('completo')
        }
      })
    }
  })
}

export default task
