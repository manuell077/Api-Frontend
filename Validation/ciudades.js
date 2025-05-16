import { desenfoque, validar,validarLetras } from "../Modules/moduloUsuario.js";

const form = document.querySelector('form')
const ciudad = document.querySelector('[name=ciudad]')

ciudad.addEventListener('keypress',validarLetras)
ciudad.addEventListener('blur',desenfoque)

form.addEventListener('submit',validar)
