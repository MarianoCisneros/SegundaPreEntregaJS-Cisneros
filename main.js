


// Array 
let alumnos = []

// Cargar los datos de un alumno
function cargarAlumno() {
    let nombre = prompt("Ingrese el nombre del alumno:")
    let edad = Number(prompt("Ingrese la edad del alumno:"))
    let curso = prompt("Ingrese el curso del alumno:")

    // Objeto
    let persona = {
        nombre: nombre,
        edad: edad,
        curso: curso
    }

    alumnos.push(persona)
}

// Mostrar los datos de todos los alumnos
function mostrarAlumnos() {
    console.log("Datos de los alumnos:")
    alumnos.forEach(function (persona, i) {
        console.log("Alumno " + (i + 1) + ":")
        console.log("Nombre: " + persona.nombre)
        console.log("Edad: " + persona.edad)
        console.log("Curso: " + persona.curso)
        console.log(".................")
    })
}

// Buscar un personaa por nombre
function buscarAlumnoPorNombre(nombre) {
    let resultado = alumnos.filter(function (persona) {
        return persona.nombre.toLowerCase() === nombre.toLowerCase()
    })
    return resultado
}

// Filtrar alumnos por curso
function filtrarAlumnosPorCurso(curso) {
    let resultado = alumnos.filter(function (persona) {
        return persona.curso.toLowerCase() === curso.toLowerCase()
    })
    return resultado
}



///////////////////////////////////////////////////////////////////////////


while (true) {

    let opcion = prompt("Que desea hacer? \n 1. Agregar alumno. \n 2. Buscar alumno por nombre. \n 3. Buscar alumno por curso. \n 4. Mostrar alumnos.")

    if (opcion == 1) {
        // Carga de datos
        for (let i = 0; i < 1; i++) {
            cargarAlumno()
        }
    } else if (opcion == 2) {

        // Busqueda de alumno por nombre
        let nombreABuscar = prompt("Ingrese el nombre del alumno a buscar:")
        let resultadoBusqueda = buscarAlumnoPorNombre(nombreABuscar)
        if (resultadoBusqueda.length > 0) {
            console.log("Alumnos encontrados como " + nombreABuscar + ":")
            resultadoBusqueda.forEach(function (persona) {
                console.log(persona)
            })
        } else {
            console.log("Alumno no encontrado.")
        }
    } else if (opcion == 3) {

        // Filtrado de alumnos por curso
        let cursoAFiltrar = prompt("Ingrese el curso para filtrar alumnos:")
        let resultadoFiltrado = filtrarAlumnosPorCurso(cursoAFiltrar)
        if (resultadoFiltrado.length > 0) {
            console.log("Alumnos encontrados en el curso " + cursoAFiltrar + ":")
            resultadoFiltrado.forEach(function (persona) {
                console.log(persona.nombre)
            })
        } else {
            console.log("No se encontraron alumnos en el curso " + cursoAFiltrar + ".")
        }

    } else if (opcion == 4) {

        mostrarAlumnos()
        
    } else {
        alert("Ingrese una opción válida.")
        continue
    }


    if (!confirm("Desea realizar otra operación?")) {
        break
    }
}

