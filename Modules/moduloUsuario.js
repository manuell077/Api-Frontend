import {get, postLenguajes, postUsuarios} from "../Api.js"
//validacion de que los campos no esten vacios 


export const validar = async (e)=>{
    let info = {};
    e.preventDefault();

   const campos = [...e.target].filter((elemento)=>{
     return  elemento.hasAttribute('required')
   })
    
   
    campos.forEach(campo => {
       
        switch(campo.tagName){
            case "INPUT":
            
            if(campo.getAttribute('type') == "text"){
            if(!campo.value){
                campo.nextSibling.remove()
                campo.classList.add("errorCampo")
                let mensaje = document.createElement("span")
                mensaje.classList.add("mensajeError")
                mensaje.textContent = "Tienes que completar este campo"
                campo.insertAdjacentElement("afterend",mensaje)
            }else{
              if(campo.getAttribute('name') == "documento" || campo.getAttribute('name') == "telefono"){
                   if(validarNumeroDocumento){
                     let propiedad = campo.getAttribute('name')
                     info[propiedad] = campo.value
                   }

              }else if (campo.getAttribute('name') == "nombre_usuario" || campo.getAttribute('name') == "apellido_usuario"){
                    if(validarLetras){
                      let propiedad = campo.getAttribute('name')
                     info[propiedad] = campo.value
                    }   
                 
              }
            }

            }else if(campo.getAttribute('type') == "password"){
               if(!campo.value){
                campo.nextSibling.remove()
                campo.classList.add("errorCampo")
                let mensaje = document.createElement("span")
                mensaje.classList.add("mensajeError")
                mensaje.textContent = "Tienes que completar este campo"
                campo.insertAdjacentElement("afterend",mensaje)
            }else{
                 if(validarContrasena){
                  let propiedad = campo.getAttribute('name')
                  info[propiedad] = campo.value
                 }
            }
          }
            break;
            case "SELECT":
              
              if(campo.selectedIndex == 0){
                campo.classList.add("border-red")
                if(campo.nextSibling) campo.nextSibling.remove()
                let afterend = document.createElement('span')
                afterend.textContent = "Debe seleccionar una ciudad";
                campo.insertAdjacentElement("afterend",afterend) 

              }else{
                let propiedad = campo.getAttribute('name');
                
                info[propiedad] = campo.value;
              }
     
              break;           
       }
   });

   const radio = [...campos].filter((elemento)=>{
    return elemento.type == "radio";
   })

   const radiosSeleccionados = radio.find((elemento)=>elemento.checked) || []
   
   let primerPadre = radio[0].parentElement;
   let segundopadre = primerPadre.parentElement;
   if(radiosSeleccionados.length === 0){
                
     if(segundopadre.nextSibling.tagName === "SPAN"){
       segundopadre.nextSibling.remove()  
      }

                let mensaje = document.createElement("span")
                mensaje.classList.add("mensajeError")
                mensaje.textContent = "Tienes que completar este campo"           
                segundopadre.insertAdjacentElement("afterend",mensaje)
   }else{
      if(segundopadre.nextSibling.tagName == "SPAN"){
       segundopadre.nextSibling.remove()  
      }
     
      
      let propiedad = radiosSeleccionados.getAttribute('name')
      
      
      info[propiedad] = radiosSeleccionados.value
    
   }
  
   const checks = [...campos].filter((elemento)=>{
      return elemento.type == "checkbox";
   })
   
   const checkSeleccionado = checks.filter((elemento)=>elemento.checked) || []
   
   
   let checkPadre = checks[0].parentElement;
   let checkAbuelo = checkPadre.parentElement;


   if(checkSeleccionado.length < 3){
      
     let mensaje = document.createElement('span')
     mensaje.classList.add("mensajeError")
     mensaje.textContent = "Debes tener por lo menos tres lenguajes seleccionados"
     checkAbuelo.insertAdjacentElement("afterend",mensaje)

   }else{
     if(checkAbuelo.nextSibling.tagName === "SPAN"){
          checkAbuelo.nextSibling.remove()
     }
     
     let lenguajesSeleccionados = []
    let propiedad = checkSeleccionado[0].getAttribute('name');
     for(let i = 0; i < checkSeleccionado.length; i++ ){
        
     lenguajesSeleccionados[i]  = checkSeleccionado[i].value;
        
     
     
     }
     info[propiedad] = lenguajesSeleccionados;
    

    

   }
   let cant_campos = contarCampos(e.target)
   if(Object.keys(info).length>=cant_campos){

    Object.entries(info).forEach(([clave,valor])=>{
           console.log(clave,valor)
    })
    return info;
   }else return false;
    
        


}

export const agregarDB = async(event,endpoint)=>{
    const info= await validar(event)
    console.log(info);
    
    if(info){

      
      const datosCambiados = {...info};

      delete datosCambiados.id_lenguaje;
      
      const respuesta = await postUsuarios(endpoint,datosCambiados);
            
      console.log(respuesta);
      
            
            if (endpoint == "usuarios") {
            for (let n = 0; n < info.id_lenguaje.length; n++) {
            let regi = {};
            let usu = await get("usuarios");
            let id_usu = usu.data[usu.data.length - 1].id_usuario;

            id_usu=parseInt(id_usu);
            let id_lenguaje=parseInt(info.id_lenguaje[n]);

            
            regi["id_usuario"] = parseInt (id_usu);
            regi["id_lenguaje"] = parseInt(id_lenguaje);
            await postLenguajes("LenguajesUsuarios", regi);
            }
        }
        if(respuesta.status == 200)alert("El registro se ha realizaco correctamente");
        else alert("Ocurrio un error al guardar el registro")

    }else{
      
    }
    



}


export const contarCampos = (formulario)=>{
    const campos = formulario.querySelectorAll(".formulario")
    return campos.length;
}


//Validaciones de letras , numeros y caracteres especiales 
export const validarLetras = (event)=>{
     
    const letras = /^[a-zA-Z]+$/
    
    if(!letras.test(event.target.value)){
      
      if(event.target.nextSibling.tagName === "SPAN"){
       event.target.nextSibling.remove()
      }


       let mensaje = document.createElement("span")
       mensaje.classList.add("mensajeError")
       mensaje.textContent = "El campo tiene que tener letras"
       event.target.insertAdjacentElement("afterend",mensaje)
    }else{
       
      
      if(event.target.nextSibling.tagName === "SPAN"){
      event.target.nextSibling.remove()
      }
      return true;
    }

}

export const validarNumeroDocumento = (event)=>{
     
    const numeros = /^[0-9]{9}$/
    
     
    if(!numeros.test(event.target.value)){
      
      if(event.target.nextSibling.tagName === "SPAN"){
       event.target.nextSibling.remove()
      }


       let mensaje = document.createElement("span")
       mensaje.classList.add("mensajeError")
       mensaje.textContent = "El campo tiene que tener numeros o ser de 10 digitos"
       event.target.insertAdjacentElement("afterend",mensaje)
        
      
    }else {
         
      if(event.target.nextSibling.tagName === "SPAN"){
      event.target.nextSibling.remove()
      }
      return true;
      
    }

}

export const validarContrasena = (event)=>{

    const contra = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{5,}$/;

    if(!event.target.value.match(contra)){
      
      
      if(event.target.nextSibling.tagName === "SPAN"){
       event.target.nextSibling.remove()
      }
      
      let mensaje = document.createElement("span")
       mensaje.classList.add("mensajeError")
       mensaje.textContent = "El campo tiene que tener por lo menos un caracter especial ,  digito o letra y una longitd de 6"
       event.target.insertAdjacentElement("afterend",mensaje)
      
    }else{

      if(event.target.nextSibling.tagName === "SPAN"){
      event.target.nextSibling.remove()
      }
      return true
    }
}

export const desenfoque = (event)=>{
    
  if(event.target.value){
    event.target.classList.remove("errorCampo")
  }
  return true

}

// export const crearTabla = (event)=>{

//     const tabla = document.createElement('table')
//     const header =  document.createElement('thead')
//     const thId = document.createElement('th')
//     const thDocumento = document.createElement('th')
//     const thNombreUsuario = document.createElement('th')
//     const thApellido = document.createElement('th')
//     const thTelefono = document.createElement('th')
//     const thGenero = document.createElement('th')
//     const thLenguaje = document.createElement('th')



// } 