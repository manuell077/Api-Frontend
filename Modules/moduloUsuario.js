//validacion de que los campos no esten vacios 

export const validar = (e)=>{
    e.preventDefault();

   const campos = [...e.target].filter((elemento)=>{
     return  elemento.hasAttribute('required')
   })
    
   
    campos.forEach(campo => {
      
        switch(campo.tagName){
            case "INPUT":
            
            
            if(!campo.value){
                campo.nextSibling.remove()
                campo.classList.add("errorCampo")
                let mensaje = document.createElement("span")
                mensaje.classList.add("mensajeError")
                mensaje.textContent = "Tienes que completar este campo"
                campo.insertAdjacentElement("afterend",mensaje)
            }
 
                         
        }
   });

   const radio = [...campos].filter((elemento)=>{
    return elemento.type == "radio";
   })

   const radiosSeleccionados = radio.find((elemento)=>elemento.checked) || []
   
   let primerPadre =    radio[0].parentElement;
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
    
   }
   
   

   const checks = [...campos].filter((elemento)=>{
      return elemento.type == "checkbox";
   })
   
   
   

   const checkSeleccionado = checks.filter((elemento)=>elemento.checked) || []
   
  

   let primerCheck = checks[0].parentElement
   let segundoCheck = primerCheck.parentElement

   if(checkSeleccionado.length < checks.length){
    
        if(segundoCheck.nextSibling.tagName === "SPAN"){
       segundoCheck.nextSibling.remove()  
      }

       let mensaje = document.createElement("span")
       mensaje.classList.add("mensajeError")
       mensaje.textContent = "Debe tener por lo menos tres campos seleccionados"   
       segundoCheck.insertAdjacentElement("afterend",mensaje)

   }else{
    if(segundoCheck.nextSibling.tagName === "SPAN"){
       segundoCheck.nextSibling.remove()  
      }
   }


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
    }
}

export const desenfoque = (event)=>{
    
  if(event.target.value){
    event.target.classList.remove("errorCampo")
  }

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