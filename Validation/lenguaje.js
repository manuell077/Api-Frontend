import { validar,validarLetras } from "../Modules/moduloUsuario.js";

const form = document.querySelector('form')
const lenguaje = document.querySelector('[name=lenguaje]')

lenguaje.addEventListener('keypress',validarLetras)

form.addEventListener('submit',validar)
