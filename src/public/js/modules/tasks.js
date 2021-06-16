import axios from 'axios'
import Swal from 'sweetalert2'

const task = document.querySelector('.listado-pendientes')
if (task) {
  task.addEventListener('click', e => {
    const icon = e.target
    const id = icon.parentElement.parentElement.dataset.task
    const url = `${window.location.origin}/task/${id}`
    if (e.target.classList.contains('fa-check-circle')) {
      console.log({ url })
      axios.patch(url, { id }).then(response => {
        if (response.status === 202) {
          icon.classList.toggle('completo')
        }
      })
    }
    if (e.target.classList.contains('fa-trash')) {
      Swal.fire({
        title: '¿Desear eliminar la tarea?',
        text: 'Una tarea eliminado no se puede recuperar',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar',
        cancelButtonText: 'No borrar'
      }).then(result => {
        if (result.isConfirmed) {
          axios.delete(url).then(response => {
            if (response.status === 200) {
              let taskItem = e.target.parentElement.parentElement
              taskItem.parentElement.removeChild(taskItem)
            }
          })
        }
      })
    }
  })
}

export default task
