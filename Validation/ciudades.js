import { validar,validarLetras } from "../Modules/moduloUsuario.js";

const form = document.querySelector('form')
const ciudad = document.querySelector('[name=ciudad]')

ciudad.addEventListener('keypress',validarLetras)

form.addEventListener('submit',validar)
