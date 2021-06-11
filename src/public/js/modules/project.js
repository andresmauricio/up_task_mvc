import Swal from 'sweetalert2'
import axios from 'axios'

const buttonDelete = document.getElementById('eliminar-proyecto')
buttonDelete?.addEventListener('click', () => {
  Swal.fire({
    title: '¿Desear eliminar el proyecto?',
    text: 'Un proyecto eliminado no se puede recuperar',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrar',
    cancelButtonText: 'No borrar'
  }).then(result => {
    if (result.isConfirmed) {
      Swal.fire(
        'Borrado!',
        'El proyecto se elimino correctamente',
        'success'
      ).then(() => (window.location.href = '/home'))
    }
  })
})
