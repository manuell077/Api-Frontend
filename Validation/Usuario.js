import {  validar, validarContrasena, validarLetras, validarNumeroDocumento} from "../Modules/moduloUsuario.js"

const formu = document.querySelector('form')
const documento = document.querySelector('[name=documento]') 
const nombre_usuario = document.querySelector('[name=nombreUsuario]');
const apellido = document.querySelector('[name=apellido]')
const telefono = document.querySelector('[name=telefono]')
const contrasena = document.querySelector('[name=contrasena]')



documento.addEventListener('keypress',validarNumeroDocumento)
nombre_usuario.addEventListener('keypress',validarLetras)
contrasena.addEventListener('keypress',validarContrasena)
apellido.addEventListener('keypress',validarLetras)
telefono.addEventListener('keypress',validarNumeroDocumento)




formu.addEventListener("submit",validar)