import { validar,validarLetras,desenfoque} from "../Modules/moduloUsuario.js";

const form = document.querySelector('form')
const lenguaje = document.querySelector('[name=lenguaje]')

lenguaje.addEventListener('keypress',validarLetras)
lenguaje.addEventListener('blur',desenfoque)

form.addEventListener('submit',validar)
