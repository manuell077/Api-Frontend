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


}


export const desenfoque = (event)=>{
        

       if(event.target.value){
             
          event.target.nextSibling.remove();
          event.target.classList.remove("errorCampo")

       }


}


// export const validarLetras = (event)=>{
     
//     const letras = /^[a-zA-Z]+$/
    
//     if(!letras.test(event.target.value)){
      
//       if(event.target.value){  
        
//       let mensaje = document.createElement("span")
//        mensaje.classList.add("mensajeError")
//        mensaje.textContent = "El campo tiene que tener letras"
//        event.target.insertAdjacentElement("afterend",mensaje)
//       }
//     }

// }

export const validarNumeroDocumento = (event)=>{
     
    const numeros = /^[0-9]{9}$/

    if(!numeros.test(event.target.value)){
      
      
      if(event.target.value){  
       
       event.target.nextSibling.remove()
       let mensaje = document.createElement("span")
       mensaje.classList.add("mensajeError")
       mensaje.textContent = "El campo tiene que tener numeros o ser de 10 digitos"
       event.target.insertAdjacentElement("afterend",mensaje)
        
      }
    }else {
         
      event.target.nextSibling.remove()
      console.log("Ahora si esta validado")
      
    }

}

// export const validarContrasena = (event)=>{

//     const contra = /^[a-zA-Z0-9.^$*+?()[]{}\|\]{6,}$/;

//     if(!contra.test(event.target.value)){
      
//       if(event.target.value){  
//       let mensaje = document.createElement("span")
//        mensaje.classList.add("mensajeError")
//        mensaje.textContent = "El campo tiene que tener por lo menos un caracter especial y 6 digitos"
//        event.target.insertAdjacentElement("afterend",mensaje)
//       }
//     }
// }

