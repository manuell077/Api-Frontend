import {  validar, validarContrasena, validarLetras, validarNumeroDocumento,desenfoque, agregarDB} from "../Modules/moduloUsuario.js"

import { CrearTabla ,cargarCiudades,cargarGenero, cargarLenguajes} from "../CargarDatos/cargarUsuarios.js";

const formu = document.querySelector('form')
const documento = document.querySelector('[name=documento]') 
const nombre_usuario = document.querySelector('[name=nombre_usuario]');
const apellido = document.querySelector('[name=apellido_usuario]')
const telefono = document.querySelector('[name=telefono]')
const contrasena = document.querySelector('[name=contrasenia]')


CrearTabla();
cargarGenero();
cargarCiudades();
cargarLenguajes();
const editar = document.querySelector('[name=btn_editar]');
console.log(documento);


documento.addEventListener('keypress',validarNumeroDocumento)
nombre_usuario.addEventListener('keypress',validarLetras)
contrasena.addEventListener('keypress',validarContrasena)
apellido.addEventListener('keypress',validarLetras)
telefono.addEventListener('keypress',validarNumeroDocumento)


documento.addEventListener('blur',desenfoque)
nombre_usuario.addEventListener('blur',desenfoque)
contrasena.addEventListener('blur',desenfoque)
apellido.addEventListener('blur',desenfoque)
telefono.addEventListener('blur',desenfoque)





formu.addEventListener("submit",(event)=>{agregarDB(event,"usuarios")})