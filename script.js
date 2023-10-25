let estudiantes = []


function datosEstudiante() {
    let nombre = prompt("Ingrese el nombre del estudiante: ");
    let documento = prompt("Ingrese el documento del estudiante:");
    let telefono = prompt("Ingrese el número de teléfono del estudiante:");
    let direccion = prompt("Ingrese la dirección del estudiante:");
    let correo = prompt("Ingrese el correo electrónico del estudiante:")
    let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
    let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));

    let notaDefinitiva = calculoDefinitiva(nota1, nota2, nota3)

    let estudiantesregistrado = {
        nombre: nombre,
        documento: documento,
        telefono: telefono,
        direccion: direccion,
        correo: correo,
        notaDefinitiva: notaDefinitiva,
    };
    estudiantes.push(estudiantesregistrado)

    alert("Registro Exitoso")
}
function calculoDefinitiva(nota1, nota2, nota3) {
    let notaFinal = (nota1 * 0.25) + (nota2 * 0.35) + (nota3 * 0.4)
    if (notaFinal > 4) {
        return "Ganó"
    } else if (notaFinal >= 3.5) {
        return "Tiene derecho a nivelatorio"
    } else {
        return "Perdió"
    }
}
function resultados() {
    console.log("Resultados de los estudiantes:")
    estudiantes.forEach(function (estudiantesregistrado) {
        console.log("Nombre: " + estudiantesregistrado.nombre)
        console.log("Documento: " + estudiantesregistrado.documento)
        console.log("Resultado: " + estudiantesregistrado.notaDefinitiva)
        console.log("            ")
    });
}


let usuario = 'admin'
let contrasena = 'admin123'
const usuarioIngresado = prompt('Ingresar Usuario')
const contrasenaIngresada = prompt('Ingresar Contraseña')

if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
    alert('Acceso concedido a: ' + usuarioIngresado )
    
    let repetir = true
    while (repetir) {

        const opciones = Number(prompt(
            "Seleccione su opcion: " + "\n" +
            "1. Registrar Estudiante \n" +
            "2. Mostrar Resultados \n" +
            "3. Salir"
        ))

        switch (opciones) {
            case 1:
                datosEstudiante()
                break;

            case 2:
                                resultados();
                break;

            case 3:
                repetir = false
                alert('Saliendo de la aplicación ')
                break;

            default:
                alert('Opción incorrecta , intenta nuevamente')
                break;
        }
    }
}   