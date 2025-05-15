import { desenfoque, validar, validarNumeroDocumento} from "../Modules/moduloUsuario.js"

const formu = document.querySelector('form')
const documento = document.querySelector('[name=documento]') 
const nombre_usuario = document.querySelector('[name=nombreUsuario]');
const apellido = document.querySelector('[name=apellido]')
const telefono = document.querySelector('[name=telefono]')
const contrasena = document.querySelector('[name=contrasena]')
const genero = document.querySelector('[name=genero]')
const lenguaje = document.querySelector('[name=lenguaje]')



documento.addEventListener('keydown',validarNumeroDocumento)


documento.addEventListener('blur',desenfoque)
nombre_usuario.addEventListener('blur',desenfoque)
apellido.addEventListener('blur',desenfoque)
telefono.addEventListener('blur',desenfoque)
contrasena.addEventListener('blur',desenfoque)


formu.addEventListener("submit",validar)