import { validar,validarLetras } from "../Modules/moduloUsuario.js";

const form = document.querySelector('form')
const genero = document.querySelector('[name=genero]')

genero.addEventListener('keypress',validarLetras)

form.addEventListener('submit',validar)
