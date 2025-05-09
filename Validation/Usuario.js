import { validar } from "./moduloUsuario.js"

const formu = document.querySelector('form')
const documento = document.querySelector('[name="documento"]') 
const nombre_usuario = document.querySelector('[name="nombreUsuario"]');
const apellido = document.querySelector('[name="apellido"]')
const telefono = document.querySelector('[name="telefono"]')
const contrasena = document.querySelector('[name=contrasena]')
const genero = document.querySelector('[name=genero]')
const lenguaje = document.querySelector('[name=lenguaje]')

formu.addEventListener("submit",validar)