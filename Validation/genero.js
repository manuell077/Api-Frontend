import { validar,validarLetras,desenfoque } from "../Modules/moduloUsuario.js";

const form = document.querySelector('form')
const genero = document.querySelector('[name=genero]')

genero.addEventListener('keypress',validarLetras)
genero.addEventListener('blur',desenfoque)

form.addEventListener('submit',validar)
