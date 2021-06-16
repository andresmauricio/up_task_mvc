export const updateTask = () => {
  const task = document.querySelectorAll('.tarea')
  if (task.length) {
    const taskCompleted = document.querySelectorAll('.completo')
    const advance = Math.round((taskCompleted.length / task.length) * 100)
    const percentage = document.getElementById('porcentaje')
    percentage.style.width = `${advance}%`
  }
}
