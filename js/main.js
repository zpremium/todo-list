//1.REQUISITOS

//1.1 Petición de funcionaldad (reunión 1-2h con jefe de negocio, de servicios, producto owner o project manager)
//Tip: Apuntar todo en la reunión

// -->Necesitamos una web para almacenar las tareas de los usuarios. API, TEMATIZACIÓN...

// 1.2 Traducir a funcionalidades de HTML Y JS, partes de la aplicación
// - Input con el nombre de tarea
// - Boton para agregar tarea
// - Listado para tareas
// - Botón eliminar tareas
// - Botón eliminar tareas individuales

// 1.3 Definir acciones de usuario (inputs del programa)
// - Agregar tarea
// - Eliminar (tarea o tareas)

// 1.4 Definir resultado a mostrar (API + ACCIONES USUARIOS -> OUTPUT)
// - Lista de tareas

/*------------------*/
// 2. PLANIFICACIÓN
/*------------------*/

// 2.1 Hitos de la aplicación
// - Crear un HTML estático
// - Montar la base del javascript --> estructura & pseudocódigo.
// - Implementar lógica JS para que sea dinámico
// - Renellar las diferentes partes del JS
// - Lincas & debbuggar JS+HTML
// - Mejorar maquetación

// 2.2 Tareas concretas --> ganar focus
// - C1 [HTML] Implementar bootstrap + crear input y button boostrap y dejar espacio para el listado <ul> [1h]
// - C2 [JS] Definiar las variables que necesitará el programa [0.5h]
// - C3 [JS] Definir todas las funciones vacias de js [1h]
// - C4 [JS] Rellenar lógica de funciones una a una --> probar --> siguiente [3h]
// - C5 [HTML] Mejorar interficie [2h]

let input = document.getElementById('userInput');
let enterButton = document.getElementById('button');
let ul = document.querySelector('ul')
