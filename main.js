
let tareas = [
    { id: 1, descripcion: 'Aprender JavaScript', completada: false },
    { id: 2, descripcion: 'Leer un libro', completada: false },
    { id: 3, descripcion: 'Ir al gimnasio', completada: false }
];

// Función para mostrar todas las tareas
function mostrarTareas() {
    let mensaje = 'Lista de Tareas:\n';
    tareas.forEach(tarea => {
        mensaje += `ID: ${tarea.id} - ${tarea.descripcion} - Completada: ${tarea.completada ? 'Sí' : 'No'}\n`;
    });
    alert(mensaje);
}

// Función para agregar una nueva tarea
function agregarTarea() {
    const descripcion = prompt('Ingrese la descripción de la nueva tarea:');
    if (descripcion) {
        const nuevaTarea = {
            id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
            descripcion: descripcion,
            completada: false
        };
        tareas.push(nuevaTarea);
        alert(`Tarea "${descripcion}" agregada.`);
    } else {
        alert('Descripción no puede estar vacía.');
    }
}

// Función para marcar una tarea como completada
function completarTarea() {
    const id = parseInt(prompt('Ingrese el ID de la tarea a completar:'), 10);
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = true;
        alert(`Tarea "${tarea.descripcion}" completada.`);
    } else {
        alert(`Tarea con ID ${id} no encontrada.`);
    }
}

// Función para eliminar una tarea
function eliminarTarea() {
    const id = parseInt(prompt('Ingrese el ID de la tarea a eliminar:'), 10);
    const indice = tareas.findIndex(t => t.id === id);
    if (indice !== -1) {
        const tareaEliminada = tareas.splice(indice, 1);
        alert(`Tarea "${tareaEliminada[0].descripcion}" eliminada.`);
    } else {
        alert(`Tarea con ID ${id} no encontrada.`);
    }
}

// Función para filtrar tareas
function filtrarTareas(criterio) {
    return tareas.filter(criterio);
}

// Función principal para interactuar con el usuario
function iniciar() {
    let opcion;
    do {
        opcion = prompt(`Seleccione una opción:
1. Mostrar todas las tareas
2. Agregar una nueva tarea
3. Completar una tarea
4. Eliminar una tarea
5. Mostrar tareas completadas
6. Mostrar tareas pendientes
0. Salir`);
        
        switch (opcion) {
            case '1':
                mostrarTareas();
                break;
            case '2':
                agregarTarea();
                break;
            case '3':
                completarTarea();
                break;
            case '4':
                eliminarTarea();
                break;
            case '5':
                const tareasCompletadas = filtrarTareas(t => t.completada);
                let mensajeCompletadas = 'Tareas Completadas:\n';
                tareasCompletadas.forEach(t => mensajeCompletadas += `${t.descripcion}\n`);
                alert(mensajeCompletadas);
                break;
            case '6':
                const tareasPendientes = filtrarTareas(t => !t.completada);
                let mensajePendientes = 'Tareas Pendientes:\n';
                tareasPendientes.forEach(t => mensajePendientes += `${t.descripcion}\n`);
                alert(mensajePendientes);
                break;
            case '0':
                alert('Saliendo...');
                break;
            default:
                alert('Opción no válida. Intente de nuevo.');
                break;
        }
    } while (opcion !== '0');
}

// Iniciar la aplicación
iniciar();
